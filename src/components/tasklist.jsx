const TaskList = (props) => {
  return (
    <ul className="flex flex-col gap-3">
      {props.Tasks.map((task) => {
        return (
          <li className="flex flex-col gap-3">
            <div className="flex gap-4">
              <input type="checkbox"/>
              <p key={task.id} className="md:min-w-full">
                {task.task}
              </p>{" "}
            </div>
            <hr />
          </li>
        );
      })}
    </ul>
  );
};
export default TaskList;
