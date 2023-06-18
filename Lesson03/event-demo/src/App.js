import logo from './logo.png';
import './App.css';
import EventDemo1 from './component/EventDemo1';
import EventDemo2 from './component/EventDemo2';
import EventFormControl from './component/EventFormControl';
import EventFormControl2 from './component/EventFormControl2';
import EventFormControl3 from './component/EventFormControl3';

function App() {
  return (
    <div className="container border border-primary my-3 rounded p-3">
      <div className="d-flex align-items-center">
        <img src= {logo} alt='Devmaster' />
        <h1>Event Demo</h1>
      </div>
      <EventDemo1 />
      <EventDemo1 name="Đức" />
      <EventDemo2 />
      <EventDemo2 name="Viện công nghệ" />

      <EventFormControl />
      <EventFormControl2 />
      <EventFormControl3 />
    </div>
  );
}

export default App;
