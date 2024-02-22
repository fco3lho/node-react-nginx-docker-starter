import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [descriptionTask, setDescriptionTask] = useState("");
  const [tasks, setTasks] = useState();
  const [condition, setCondition] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Axios.post("http://localhost:3001/api/post", {
      descriptionTask: descriptionTask,
    })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response.data));

    setDescriptionTask("");
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get")
      .then((response) => {
        setTasks(response.data);
        setCondition(false);
      })
      .catch((error) => console.log(error.response.data));
  }, [condition === true]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Tarefa:</span>
          <input
            type="text"
            name="descriptionTask"
            required
            value={descriptionTask}
            onChange={(e) => setDescriptionTask(e.target.value)}
          />
        </label>
        <button onClick={() => setCondition(true)}>Criar tarefa</button>
      </form>

      <div>
        {typeof tasks !== "undefined" &&
          tasks.map((value) => {
            return (
              <div className="task" key={value.id_task}>
                <span>{value.id_task}</span>
                <span>{value.description_task}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
