import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = "rgb(11 16 79)";
  }
   else{
     setMode('light');
     document.body.style.backgroundColor = "white";
   }
  }
  return (
    <>
       <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
       {/* <Navbar/> */}
       <div className="container my-3">
          <TextForm heading="Enter the text to analyze below" mode={mode}/>
       </div>
       {/* <About/>  */}
    </>
  );
}

export default App;
