import {
  filteringByColors,
  filteringByStatus,
  filterByColorStatus,
} from "../../Functions/filteringTasks";

describe("filteringByStatus", () => {
  it("example1", () => {
    const tasks = [
      { text: "task1", isComplete: true },
      { text: "task3", isComplete: true },
      { text: "task2", isComplete: false },
      { text: "task4", isComplete: false },
    ];
    const filterStatus = "all";
    const expectedResult = [
      { text: "task1", isComplete: true },
      { text: "task3", isComplete: true },
      { text: "task2", isComplete: false },
      { text: "task4", isComplete: false },
    ];
    const actualResult = filteringByStatus(tasks, filterStatus);
    expect(actualResult).toEqual(expectedResult);
  });

  it("example2", () => {
    const tasks = [
      { text: "task1", isComplete: true },
      { text: "task3", isComplete: true },
      { text: "task2", isComplete: false },
      { text: "task4", isComplete: false },
    ];
    const filterStatus = "completed";
    const expectedResult = [
      { text: "task1", isComplete: true },
      { text: "task3", isComplete: true },
    ];
    const actualResult = filteringByStatus(tasks, filterStatus);
    expect(actualResult).toEqual(expectedResult);
  });

  it("example3", () => {
    const tasks = [
      { text: "task1", isComplete: true },
      { text: "task3", isComplete: true },
      { text: "task2", isComplete: false },
      { text: "task4", isComplete: false },
    ];
    const filterStatus = "active";
    const expectedResult = [
      { text: "task2", isComplete: false },
      { text: "task4", isComplete: false },
    ];
    const actualResult = filteringByStatus(tasks, filterStatus);
    expect(actualResult).toEqual(expectedResult);
  });
});

describe("filteringByColors", () => {
  it("example1", () => {
    const tasks = [
      { text: "task1", color: "red" },
      { text: "task2", color: "red" },
      { text: "task3", color: "black" },
      { text: "task4", color: "black" },
      { text: "task5", color: "blue" },
      { text: "task6", color: "blue" },
    ];
    const selectedColors = ["red"];
    const expectedResult = [
      { text: "task1", color: "red" },
      { text: "task2", color: "red" },
    ];

    const actualResult = filteringByColors(tasks, selectedColors);
    expect(actualResult).toEqual(expectedResult);
  });
  it("example2", () => {
    const tasks = [
      { text: "task1", color: "red" },
      { text: "task2", color: "red" },
      { text: "task3", color: "black" },
      { text: "task4", color: "black" },
      { text: "task5", color: "blue" },
      { text: "task6", color: "blue" },
    ];
    const selectedColors = ["blue", "red"];
    const expectedResult = [
      { text: "task1", color: "red" },
      { text: "task2", color: "red" },
      { text: "task5", color: "blue" },
      { text: "task6", color: "blue" },
    ];
    const actualResult = filteringByColors(tasks, selectedColors);
    expect(actualResult).toEqual(expectedResult);
  });

  it("example3", () => {
    const tasks = [
      { text: "task1", color: "red" },
      { text: "task2", color: "red" },
      { text: "task3", color: "black" },
      { text: "task4", color: "black" },
      { text: "task5", color: "blue" },
      { text: "task6", color: "blue" },
    ];
    const selectedColors = [];
    const expectedResult = [
      { text: "task1", color: "red" },
      { text: "task2", color: "red" },
      { text: "task3", color: "black" },
      { text: "task4", color: "black" },
      { text: "task5", color: "blue" },
      { text: "task6", color: "blue" },
    ];
    const actualResult = filteringByColors(tasks, selectedColors);
    expect(actualResult).toEqual(expectedResult);
  });
});

describe("filterByColorStatus", () => {
  it("example1", () => {
    const tasks = [
      { text: "task1", color: "red", isComplete: true },
      { text: "task2", color: "red", isComplete: false },
      { text: "task3", color: "black", isComplete: true },
      { text: "task4", color: "black", isComplete: false },
      { text: "task5", color: "blue", isComplete: true },
      { text: "task6", color: "blue", isComplete: false },
    ];
    const selectedColors = ["red"];
    const status = "all";
    const expectedResult = [
      { text: "task1", color: "red", isComplete: true },
      { text: "task2", color: "red", isComplete: false },
    ];

    const actualResult = filterByColorStatus(tasks, status, selectedColors);
    expect(actualResult).toEqual(expectedResult);
  });

  it("example2", () => {
    const tasks = [
      { text: "task1", color: "red", isComplete: true },
      { text: "task2", color: "red", isComplete: false },
      { text: "task3", color: "black", isComplete: true },
      { text: "task4", color: "black", isComplete: false },
      { text: "task5", color: "blue", isComplete: true },
      { text: "task6", color: "blue", isComplete: false },
    ];
    const selectedColors = ["red", "blue"];
    const status = "active";
    const expectedResult = [
      { text: "task2", color: "red", isComplete: false },
      { text: "task6", color: "blue", isComplete: false },
    ];

    const actualResult = filterByColorStatus(tasks, status, selectedColors);
    expect(actualResult).toEqual(expectedResult);
  });

  it("example3", () => {
    const tasks = [
      { text: "task1", color: "red", isComplete: true },
      { text: "task2", color: "red", isComplete: false },
      { text: "task3", color: "black", isComplete: true },
      { text: "task4", color: "black", isComplete: false },
      { text: "task5", color: "blue", isComplete: true },
      { text: "task6", color: "blue", isComplete: false },
    ];
    const selectedColors = [];
    const status = "completed";
    const expectedResult = [
      { text: "task1", color: "red", isComplete: true },
      { text: "task3", color: "black", isComplete: true },
      { text: "task5", color: "blue", isComplete: true },
    ];

    const actualResult = filterByColorStatus(tasks, status, selectedColors);
    expect(actualResult).toEqual(expectedResult);
  });
});
