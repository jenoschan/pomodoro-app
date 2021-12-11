import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Let's get stuff done</small>
    
      <br></br>

      <div className='buttons'>
        <Button title={"Start"}/>
        <Button title={"Pause"}/>
      </div>
  
    </div>
  );
}

export default App;
