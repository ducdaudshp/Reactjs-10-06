import './App.css';
import ClassCompDemo from './component/ClassCompDemo';
import FuncArrowDemo from './component/FuncArrowDemo';
import FuncDemo from './component/FuncDemo';
import Header from './component/Header';
import JSXExpresion from './component/JSXExpresion';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* Biểu thức jsx */}
      <JSXExpresion />

      {/* components */}
      {/* function components */}
      <FuncDemo />
      <FuncDemo
        name="Đức"
        address="Nhổn"
        company="Devmaster" />

      <FuncArrowDemo
        name="Đức"
        module="Reactjs in Devmaster" />

      {/* class component   */}
      <ClassCompDemo />
      <ClassCompDemo
        name="Devmaster Academy"
        address="25 Vũ Ngọc Phan" />
    </div>
  );
}

export default App;
