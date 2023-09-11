import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/addtask";
import TaskList from "./components/tasklist";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchTask = async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://swmovies-default-rtdb.firebaseio.com/task.json"
    );
    const data = await res.json();
    console.log("data", data);

    const loadedData = [];
    for (var key in data) {
      loadedData.push({ id: key, task: data[key].task });
    }

    console.log(loadedData);
    setTasks(loadedData);
    setIsLoading(false);
  };

  const addTask = async (task) => {
    const res = await fetch(
      "https://swmovies-default-rtdb.firebaseio.com/task.json",
      {
        method: "post",
        body: JSON.stringify(task),
        ContentType: "application/json",
      }
    );
    fetchTask();
  };

  useEffect(() => {
    fetchTask();
  }, []);
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-evenly">
      <div className="bg-white p-8 h-min lg:w-2/5 md:w-3/5 w-[90%] flex items-center justify-center rounded">
        <AddTask onAddTask={addTask} />
      </div>
      <div className="bg-white p-8 h-min lg:w-2/5 md:w-3/5 w-[90%] flex justify-evenly rounded">
        {isLoading && <p>Loading....</p>}
        {!isLoading && tasks.length > 0 && <TaskList Tasks={tasks} />}
        {!isLoading && tasks.length === 0 && (
          <p>No haven't added any task yet</p>
        )}
      </div>
    </div>
  );
}

export default App;
