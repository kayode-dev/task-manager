import { useRef } from "react";

const AddTask = (props) => {
  const taskref = useRef("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const task = { task: taskref.current.value };

    taskref.current.value = "";

    props.onAddTask(task);
  };
  return (
    <form onSubmit={onSubmitHandler} className="flex gap-5 justify-center items-center">
      <input
        type="text"
        placeholder="Create Task"
        ref={taskref}
        className="border rounded p-2 min-w-full"
      />
      <button className="h-10 p-2 rounded text-white bg-purple-900">Add</button>
    </form>
  );
};
export default AddTask;
