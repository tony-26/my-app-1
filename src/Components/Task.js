import _ from "lodash";
import StatusCheckbox from "./StatusCheckbox";
import ColorSelector from "./ColorSelector";
import DeleteTask from "./DeleteTask";
const Task = (props) => {
  // const task = props.task;
  // const i = props.i;
  // const tasks = props.tasks;
  // const setTasks = props.setTasks;
  const { task, i, tasks, setTasks } = props;
  const taskColors = { color: task.color };
  const isCompleteHandler = () => {
    const copy = _.cloneDeep(tasks);
    copy[i].isComplete = !copy[i].isComplete;
    setTasks(copy);
  };

  return (
    <div style={taskColors}>
      <StatusCheckbox i={i} tasks={tasks} setTasks={setTasks} />
      {task.text}

      <ColorSelector i={i} tasks={tasks} setTasks={setTasks} />
      <DeleteTask i={i} tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
export default Task;
