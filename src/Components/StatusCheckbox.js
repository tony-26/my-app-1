export default (props) => {
  const { isComplete, isCompleteHandler } = props;
  return (
    <input
      type="checkbox"
      checked={isComplete}
      onChange={isCompleteHandler}
    ></input>
  );
};
