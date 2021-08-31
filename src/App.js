
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route  
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
     setAlert({
       msg: message,
       type: type
     })

     setTimeout(() => {
       setAlert(null);
     }, 1500);
  }
  const toggleMode = ()=>{
     if(mode ===  'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
       showAlert("Dark mode has been enabled", "success");
       document.title = 'TextUtils - Dark Mode';
     }
     else{
       setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled", "success");
       document.title = 'TextUtils - Light Mode';
     }
  }
  return (
    <>   
     {/* <Router> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">   
  {/* <Switch> */}
    {/* /users
    /users/home  - for exact matching of url use exact path */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm heading= "Enter the text to analyze below" showAlert={showAlert} mode={mode} />
          {/* </Route> */}
        {/* </Switch>   */}
  {/* <About/> */}
  </div>
  {/* </Router> */}
    </>
  );  
}

export default App;
