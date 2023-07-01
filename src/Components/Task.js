import _ from "lodash";
import StatusCheckbox from "./StatusCheckbox";
import ColorSelector from "./ColorSelector";
import DeleteTask from "./DeleteTask";
const Task = (props) => {
  const { i, tasks, setTasks } = props;
  const taskColors = { color: tasks[i].color };
  const ColorSelectorProps = { i: i, tasks: tasks, setTasks: setTasks };
  // const ShorterProps = { i, tasks, setTasks }; //shorter way of line8
  return (
    <div style={taskColors}>
      <StatusCheckbox {...props} />
      {tasks[i].text}
      <ColorSelector {...ColorSelectorProps} />
      <DeleteTask i={i} tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
export default Task;
