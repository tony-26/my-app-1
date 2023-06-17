import _ from "lodash";
import StatusCheckbox from "./StatusCheckbox";
import ColorSelector from "./ColorSelector";
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
  const deleteTaskHandler = () => {
    const copy = _.cloneDeep(tasks);
    setTasks(copy.slice(0, i).concat(copy.slice(i + 1)));
  };
  return (
    <div style={taskColors}>
      <StatusCheckbox
        isComplete={task.isComplete}
        isCompleteHandler={isCompleteHandler}
      />
      {task.text}

      <ColorSelector i={i} tasks={tasks} setTasks={setTasks} />

      <button onClick={deleteTaskHandler}>X</button>
    </div>
  );
};
export default Task;
