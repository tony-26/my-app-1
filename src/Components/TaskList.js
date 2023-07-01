import Task from "./Task";

const TaskList = (props) => {
  const { tasks, setTasks } = props;

  return (
    <div>
      {tasks.map((e, i) => {
        return <Task key={i} i={i} tasks={tasks} setTasks={setTasks} />;
      })}
    </div>
  );
};
export default TaskList;
