import './App.css';
import TwitterCounter from './Exercises/TwitterCount';
import PasswordMatch from './Exercises/PasswordMatch';
import AlphaNumeric from './Exercises/AlphanumericPassword';
import DisableSubmit from './Exercises/DisableSubmit';



function App() {
  return (
    <div className="App">
       <h1>ReactJS Practice Exercise</h1>
       <hr />
       <TwitterCounter />
       <PasswordMatch />
       <hr />
       <AlphaNumeric />
       <hr />
       <DisableSubmit />
    </div>
  );
}

export default App;
