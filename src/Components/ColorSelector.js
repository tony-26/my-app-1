import _ from "lodash";
const ColorSelector = (props) => {
  const { i, tasks, setTasks } = props;
  const selectColorHandler = (e) => {
    const changeColor = e.target.value;
    const copy = _.cloneDeep(tasks);
    copy[i].color = changeColor;
    setTasks(copy);
  };
  return (
    <select onChange={selectColorHandler}>
      <option value=""></option>
      <option value="black">black</option>
      <option value="red">red</option>
      <option value="blue">blue</option>
    </select>
  );
};

export default ColorSelector;
