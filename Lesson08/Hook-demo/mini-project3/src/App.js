import { useEffect, useState } from 'react';
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
  // const [listTasks, setListTasks] = useState(initListTask);
  const [listTasks, setListTasks] = useState(() => {
    //lấy dữ liệu từ localStorage
    let lists = JSON.parse(localStorage.getItem("DEV2302GH_RJ_DB"));
    if (lists === null) {
      return initListTask;
    } else {
      return lists;
    }
  });

  

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
      localStorage.setItem("DEV2302GH_RJ_DB", JSON.stringify(listTasks))
    }
    setToggle(toggle); // ẩn form
  }

  //xóa
  const handleDelete = (task) => {
    // setListTasks(listTasks.filter(x => x.taskId !== task.taskId))
    setListTasks(prev => {
      let newList = prev.filter(x => x.taskId !== task.taskId)
      return newList;
    })
  }

  //cập nhật localStorage cho listTasks mỗi khi có dữ liệu thay đổi
  useEffect(() => {
    if (listTasks.length === 0) return
    localStorage.setItem("DEV2302GH_RJ_DB", JSON.stringify(listTasks));
  }, [listTasks])

  //tìm kiếm
  const handleSearch = (keyword) => {
    let tasksResult = listTasks.filter(x => x.taskName.toLowerCase().includes(keyword.toLowerCase()));
    setListTasks(tasksResult);
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
      < Control onToggle={handleAddOrEdit} onSearch={handleSearch} />
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
