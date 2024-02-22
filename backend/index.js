const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "tasks",
});

db.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log("Database connected.");
});

// Routes
app.get("/api/get", async (req, res) => {
  const sql = "SELECT * FROM list";

  db.query(sql, (error, result) => {
    if (error) {
      res.status(500).send("Ocorreu um erro interno no servidor.");
      return;
    }

    res.status(200).send(result);
  });
});

app.post("/api/post", async (req, res) => {
  const { descriptionTask } = await req.body;

  let sql = "INSERT INTO list ( description_task ) VALUES ( ? )";

  db.query(sql, [descriptionTask], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send("Ocorreu um erro interno no servidor.");
      return;
    }

    res.status(200).send("Tarefa criada.");
  });
});

// Listening port 3001
app.listen(3001, () => {
  console.log("Backend online.");
});
