import { useState } from 'react';
import Control from './components/Control';
import Form from './components/Form';
import ListTask from './components/ListTask';
import Title from './components/Title';

function App() {

  //mock data
  const initListTask = [
    { taskId: 1, taskName: "Lorem ipsum dolor sit amet, consectetur adipisicing elit A", level: 0 },
    { taskId: 2, taskName: "Lorem ipsum dolor sit amet, consectetur adipisicing elit B", level: 1 },
    { taskId: 3, taskName: "Lorem ipsum dolor sit amet, consectetur adipisicing elit C", level: 2 },
  ];

  //tạo state listTask
  const [listTasks, setListTasks] = useState(initListTask);

  //form: show/hide
  //ẩn hiện form
  const [isToggle, setToggle] = useState(false);

  let initTask = { taskId: 0, taskName: "", level: 0 }
  const [task, setTask] = useState(initTask);

  //Add or edit
  const handleAddOrEdit = (toggle, task) => {
    setToggle(toggle);
    console.log(task);
    if (task === undefined)
      setTask(initTask)
    else
      setTask(task)
  }

  //submit: add/edit
  const handleSubmit = (toggle, task) => {
    //task
    console.log("onSubmit:", task);
    //dựa vào taskId: để xác định là dữ liệu thêm mới hay dữ liệu sửa từ form chuyển về
    if (task.taskId === 0 || task.taskId === "0") {
      //dữ liệu trạng thái thêm mới
      //tạo taskId tự động
      let taskIdMax = listTasks[listTasks.length - 1].taskId;
      console.log("taskIdMax", taskIdMax);
      task.taskId = taskIdMax + 1;
      //thêm vào listTask
      setListTasks([
        ...listTasks,
        task
      ])
    } else {
      //trường hợp sửa
      let list = listTasks;
      for (let index = 0; index < list.length; index++) {
        if (list[index].taskId === task.taskId) {
          list[index] = task;
          break;
        }
      }
      setListTasks(list);
    }
    setToggle(toggle); // ẩn form
  }

  const handleDelete = (task) => {
    setListTasks(listTasks.filter(x => x.taskId !== task.taskId))
  }

  const elementForm = (isToggle === true) ? <Form renderTask={task}
    onToggle={handleAddOrEdit}
    onSubmit={handleSubmit} /> : "";

  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      < Control onToggle={handleAddOrEdit} />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {elementForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask renderListTasks={listTasks} onEdit={handleAddOrEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
