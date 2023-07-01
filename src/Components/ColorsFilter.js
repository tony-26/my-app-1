const ColorsFilter = (props) => {
  const { selectedColors, setSelectedColors } = props;
  const allColors = ["red", "black", "blue"];
  return (
    <div style={{ marginBottom: "30px" }}>
      {allColors.map((e) => {
        return (
          <span key={e}>
            <input
              type="checkbox"
              checked={selectedColors.includes(e)}
              onChange={() => {
                if (selectedColors.includes(e)) {
                  setSelectedColors(selectedColors.filter((c) => c !== e));
                } else {
                  setSelectedColors([...selectedColors, e]);
                }
              }}
            />
            {e}
          </span>
        );
      })}
    </div>
  );
};
export default ColorsFilter;
