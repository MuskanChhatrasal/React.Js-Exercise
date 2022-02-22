import React, { useState } from 'react'
import './styles.css'
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';

const SwitchTabs = () => {
  const [state, setState] = useState({home: false, about: false, profile: false})

  const changePage = (page) =>{
    setState((state)=>{
        let obj = {...state};
        Object.keys(obj).forEach((item)=>{
            obj[item] = item === page ? true: false;
        })
        return obj;
    })
  }
  return (
    <div>
        <h2>Switch Tabs</h2>
        <button onClick={()=>changePage("home")}>Home</button>
        <button onClick={()=>changePage("about")}>About</button>
        <button onClick={()=>changePage("profile")}>Profile</button>

        {state.home && <Home />}
        {state.about && <About />}
        {state.profile && <Profile />}
    </div>
  )
}

export default SwitchTabs