const TaskList = (props) => {
  return (
    <ul>
      {props.Tasks.map((task) => {
        return (
          <li>
            <p key={task.id} className="md:min-w-full">
              {task.task}
            </p>{" "}
            <hr />
          </li>
        );
      })}
    </ul>
  );
};
export default TaskList;
