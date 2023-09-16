import './App.css';
import CreateUser from './components/CreateUser';
import ListUsers from './components/ListUsers';

function App() {
  return (
    <div className="container border">
      <header>
        <div className='logo'>
          <img src='https://devmaster.edu.vn/images/logo.png' alt='Devmaster Academy' />
        </div>
      </header>
      <div className='body-content'>
        <ListUsers />
        <CreateUser />
      </div>
    </div>
  );
}

export default App;
