
import React, { useState}  from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type) =>
  {
    setAlert(
      {
        msg:message,
        Type:type,
      })
      setTimeout(() => {
       setAlert(null) 
      }, 1500);
    
  }
  const toggleMode = () => {
    if (mode ==='light') {
        setMode('dark');
        document.body.style.backgroundColor = '#0B0849';
        showAlert("Dark Mode Enabled","Success");
        document.title = "TextUtils - Dark Mode";
        setInterval(() => {
            document.title = "TextUtils  is Amazing";
        }, 2000);
        setInterval(() => {
            document.title = "Install TextUtils";
        }, 1500);
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode Enabled","Success");
        document.title = "TextUtils - Light Mode";
        setInterval(() => {
            document.title = "TextUtils  is Amazing";
        }, 2000);
        setInterval(() => {
            document.title = "Install TextUtils";
        }, 1500);
    }

};
  return (
    <>
     <Router>
         <Navbar  title="Text-Utils" about="About Us " mode={mode} toggleMode={toggleMode}  alert={alert}/>     
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
                </Route>   
              </Switch>
     </Router>
         
         
         
         
        
         
    </>
     
  );
}

export default App;
