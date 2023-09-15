export const filteringByStatus = (tasks, filterStatus) =>
  tasks.filter(
    (t) =>
      filterStatus === "all" ||
      (filterStatus === "active" && t.isComplete === false) ||
      (filterStatus === "completed" && t.isComplete === true)
  );

export const filteringByColors = (tasks, selectedColors) => {
  if (selectedColors.length === 0) return tasks;
  return tasks.filter((t) => selectedColors.includes(t.color));
};

export const filterByColorStatus = (tasks, status, selectedColors) =>
  filteringByStatus(filteringByColors(tasks, selectedColors), status);
