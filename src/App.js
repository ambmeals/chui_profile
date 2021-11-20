import React, {useState} from 'react';
import './App.css';
import Card from './Components/Card'

function App() 
{

  const [name,setName] = useState('Your Name');
  const [job,setJob] = useState('Your Name');
  const [about,setAbout] = useState("About");


  return (
    <div className="App">
     <Card name={'Chui'} job={'Professional Cuddler'} about={"20 lbs of fluffy pomchi goodness. Able to find any size chicken wang on the ground. Enjoys long walks off leash, peanut-butter bones, and a sunbathed nap. The mail lady cannot tell if he is a dog or a cat."}/>

     
    </div>
 
    
  );
}


export default App;
