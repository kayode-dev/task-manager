const TaskList = (props) => {
  const deleteHandler = (e) => {
    const keytoDelete = e.target.getAttribute("data-value").toString();
    console.log(keytoDelete);
    props.onDelete(keytoDelete);
  };
  return (
    <ul className="flex flex-col gap-3 ">
      {props.Tasks.map((task) => {
        return (
          <li className="flex flex-col gap-3" key={task.id}>
            <div className="flex gap-4 justify-between items-center">
              <input type="checkbox" />
              <p className="md:w-4/5">{task.task}</p>{" "}
              <button
                className="bg-red-700 p-2 rounded text-white"
                onClick={deleteHandler}
                data-value={task.id}
              >
                Delete
              </button>
            </div>
            <hr />
          </li>
        );
      })}
    </ul>
  );
};
export default TaskList;
