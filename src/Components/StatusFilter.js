const StatusFilter = (props) => {
  const { filterStatus, setFilterStatus } = props;
  const allStatus = ["all", "completed", "active"];
  return (
    <div style={{ marginBottom: "30px" }}>
      {allStatus.map((e) => {
        return (
          <span key={e}>
            <input
              type="checkbox"
              checked={filterStatus === e}
              onChange={() => {
                setFilterStatus(e);
              }}
            />
            {e}
          </span>
        );
      })}
    </div>
  );
};
export default StatusFilter;
