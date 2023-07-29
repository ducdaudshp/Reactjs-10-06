import './App.css';
import ExampleContext from './component/ExampleContext';
import './App.css';
import DemoUseRef from './component/DemoUseRef';
import DemoUseReducer from './component/DemoUseReducer';
import DemoUseMemo from './component/DemoUseMemo';

function App() {
  return (
    <div className="App">
      <ExampleContext />
      <DemoUseRef />
      <DemoUseReducer />
      <DemoUseMemo />
    </div>
  );
}

export default App;
