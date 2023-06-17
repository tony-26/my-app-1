import _ from "lodash";
const DeleteTask = (props) => {
  const { i, tasks, setTasks } = props;
  return (
    <button
      onClick={() => {
        const copy = _.cloneDeep(tasks);
        const newTask = copy.slice(0, i).concat(copy.slice(i + 1));
        setTasks(newTask);
      }}
    >
      X
    </button>
  );
};
export default DeleteTask;
