import './App.css';
import TwitterCounter from './Exercises/TwitterCount';
import PasswordMatch from './Exercises/PasswordMatch';
import AlphaNumeric from './Exercises/AlphanumericPassword';
import DisableSubmit from './Exercises/DisableSubmit';
import ShowPassword from './Exercises/ShowPassword';
import DesignerTool from './Exercises/DesignerTool';



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
       <hr />
       <ShowPassword />
       <hr />
       <DesignerTool />
    </div>
  );
}

export default App;
