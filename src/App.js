import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  const showAlert=(message,type)=>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  return (
    <>
    <Navbar  title="TEXTUTILS" aboutText = "About TextUtils" mode = {mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className='container my-3'>
      <Textform heading="Enter the Text to Analyse" mode={mode} showAlert={showAlert}/>
    </div>
    {/* <About></About> */}
    </>
  );
}

export default App;
