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
  const deleteTask = async (key) => {
    const res = await fetch(
      `https://swmovies-default-rtdb.firebaseio.com/task/${key}.json`,
      {
        method: "delete",
        ContentType: "application/json",
      }
    );
    fetchTask();
  };
  return (
    <div className="min-h-full flex flex-col items-center justify-evenly gap-20">
      <h1 className="text-white font-bold text-2xl mt-10 text-center">
        Numerous Cheffings - The Todo list
      </h1>
      <div className="bg-white p-8 h-min lg:w-1/2 md:w-3/5 w-[90%] flex items-center justify-center  rounded">
        <AddTask onAddTask={addTask} />
      </div>
      <div className="bg-white p-8 h-min lg:w-1/2 md:w-3/5 w-[90%] max-h-[50vh] overflow-y-auto rounded">
        {isLoading && <p>Loading....</p>}
        {!isLoading && tasks.length > 0 && (
          <TaskList Tasks={tasks} onDelete={deleteTask} />
        )}
        {!isLoading && tasks.length === 0 && (
          <p>You haven't added any task yet</p>
        )}
      </div>
    </div>
  );
}

export default App;
