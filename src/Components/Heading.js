import "./Heading.css";

// const Heading = (props) => {
//   const { headingSize, headingColor } = props;
const Heading = ({ headingSize, headingColor }) => {
  const style = { color: headingColor, fontSize: headingSize };
  return (
    <h1 className="Heading" style={style}>
      My To Do Apps
    </h1>
  );
};

export default Heading;
