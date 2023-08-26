import './App.css';
import Card from './component/Card';
import ListProduct from './component/ListProduct';
import Title from './component/Title';

function App() {
  return (
    <div className="container">
  {/* TITLE : START */}
  <Title />
  {/* TITLE : END */}
  <div className="row">
    {/* LIST PRODUCT : START */}
    <ListProduct />
    {/* LIST PRODUCT : END */}
    {/* CART : START */}
    <Card />
    {/* CART : END */}
  </div>
</div>

  );
}

export default App;
