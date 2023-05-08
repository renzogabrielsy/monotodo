let DataSet: {
  key: number;
  id: number;
  taskName: string;
  dueDate: string;
  taskDesc: string;
  completed: boolean;
}[] = [
  {
    key: Date.now(),
    id: Date.now(),
    taskName: "Clean Fishbowl",
    dueDate: '1-1-00',
    taskDesc: "use proper method of cleaning!!!",
    completed: true
  },
  {
    key: Date.now()+1,
    id: Date.now()+1,
    dueDate: '1-1-00',
    taskName: "Clean Fishbowl",
    taskDesc: "use proper method of cleaning!!!",
    completed: false
  }
];

export default DataSet;
