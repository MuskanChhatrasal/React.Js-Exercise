import './App.css';
import TwitterCounter from './Exercises/TwitterCount';
import PasswordMatch from './Exercises/PasswordMatch';
import AlphaNumeric from './Exercises/AlphanumericPassword';
import DisableSubmit from './Exercises/DisableSubmit';
import ShowPassword from './Exercises/ShowPassword';
import DesignerTool from './Exercises/DesignerTool';
import AddToCart from './Exercises/AddToCart';
import SwitchTabs from './Exercises/SwitchTabs';
import Toast from './Exercises/Toast';
import TodoApp from './Exercises/TodoApp';
import DarkMode from './Exercises/DarkMode';
import LikeList from './Exercises/LikeList';



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
       <hr />
       <AddToCart />
       <hr />
       <SwitchTabs />
       <hr />
       <Toast />
       <hr />
       <TodoApp />
       <hr />
       <DarkMode />
       <hr />
       <LikeList />
    </div>
  );
}

export default App;
