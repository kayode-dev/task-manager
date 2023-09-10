const TaskList = (props) => {
  return (
    <ul>
      {props.Tasks.map((task) => {
        return <li key={task.id}>{task.task}</li>;
      })}
    </ul>
  );
};
export default TaskList;
