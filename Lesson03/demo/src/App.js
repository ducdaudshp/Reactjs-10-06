import logo from './logo.png';
import './App.css';
import FuncComp from './component/FuncComp';
import ClassComp from './component/ClassComp';
import Member from './component/Member';
import MemberList from './component/MemberList';
import DemoState from './component/DemoState';

function App() {

  const elementMember = (
    <div>
      <h2>Member List</h2>
      <div>
        <Member name="Đức" address="Nhổn" />
        <Member name="Devmaster" address="Nhổn" />
        <Member name="Viện công nghệ" address="Nhổn" />
        <Member name="Trung Đức" address="Nhổn" />
      </div>
    </div>
  )

  return (
    <div className="container">
      <div className='logo'>
        <img src={logo} alt='Devmaster' />
      </div>
      <hr/>
      <div className='row'>
        <FuncComp />
        <FuncComp name="Đức" age="24" />
      </div>
      <div className='row'>
        <div className='col'>
          <ClassComp />
          <ClassComp name="Devmaster" age="6" address="25 Vũ Ngọc Phan" />
        </div>
      </div>
      <div className='row'>
        {elementMember}
        <MemberList />
      </div>
      <div>
        <DemoState />
      </div>
    </div>
  );
}

export default App;
