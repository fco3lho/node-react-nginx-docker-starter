import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [descriptionTask, setDescriptionTask] = useState("");
  const [tasks, setTasks] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Axios.post("http://localhost:3001/api/post", {
      descriptionTask: descriptionTask,
    })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response.data));
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get")
      .then((response) => setTasks(response.data))
      .catch((error) => console.log(error.response.data));
  }, [setTasks]);

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
        <button>Criar tarefa</button>
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
