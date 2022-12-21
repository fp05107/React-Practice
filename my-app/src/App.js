import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';


function App() {
  const [mode,setMode] = useState('light'); //Whether dark mode is enabled or not

  let toggleMode = ()=>{
    if(mode == 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
     <Alert alert='This is alert' />
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">

    <Textform heading = "Enter Text Here" />
    <About/>
   
    </div>
    </>
  );
}

export default App;

