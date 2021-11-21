import React, {useState} from 'react';
import './App.css';
import Card from './Components/Card';
import Card2 from './Components/Card2';

function App() 
{

  const [name,setName] = useState('Your Name');
  const [job,setJob] = useState('Your Name');
  const [about,setAbout] = useState("About");


  return (
    <div className="App">
     <Card name={'Chui'} job={'Professional Cuddler'} about={"20 lbs of fluffy pomchi goodness. Able to find any size chicken wang on the ground. Enjoys long walks off leash, peanut-butter bones, and a sunbathed nap. The mail lady cannot tell if he is a dog or a cat." }/>
    
     <Card2 name={'Ethel'} job={'Professional Drooler'} about={"A cat that lives up to her name. She enjoys drinking coffee, licking cookies, and most of all begging for pets. You can usually find her kneeding biscuits on a fluffy blanket or sitting right in front of the tv screen."}/>
     
    </div>
 
    
  );
}


export default App;
