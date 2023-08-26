import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Categories from './component/Categories';
import Header from './component/Header';
import Home from './component/Home';
import Kid from './component/Kid';
import Network from './component/Network';
import Program from './component/Program';
import Menu from './component/Menu';
import Notfound from './component/Notfound';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/categories' element={<Categories></Categories>}>
            <Route path='program' element={<Program></Program>}></Route>
            <Route path='kid' element={<Kid></Kid>}></Route>
            <Route path='network' element={<Network></Network>}></Route>
          </Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
