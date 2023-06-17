// export default (props) => {
//   const { isComplete, isCompleteHandler } = props;
//   return (
//     <input
//       type="checkbox"
//       checked={isComplete}
//       onChange={isCompleteHandler}
//     ></input>
//   );
// };
import _ from "lodash";
const StatusCheckbox = (props) => {
  const { i, tasks, setTasks } = props;
  const ithTask = tasks[i];
  const onChangeHandler = () => {
    const copy = _.cloneDeep(tasks);
    copy[i].isComplete = !copy[i].isComplete;
    setTasks(copy);
  };
  return (
    <input
      type="checkbox"
      checked={ithTask.isComplete}
      onChange={onChangeHandler}
    />
  );
};
export default StatusCheckbox;
