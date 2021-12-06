import React, {useState} from 'react';
import './App.css';
import Card from './Components/Card';
import Card2 from './Components/Card2';
import Card3 from './Components/Card3';
import Card4 from './Components/Card4';


function App() 
{

  const [name,setName] = useState('Your Name');
  const [job,setJob] = useState('Your Name');
  const [about,setAbout] = useState("About");


  return (
    <div className="App">
     <Card name={'Chui'} job={'Professional Cuddler'} about={"20 lbs of fluffy pomchi goodness. Able to find any size chicken wang on the ground. Enjoys long walks off leash, peanut-butter bones, and a sunbathed nap. The mail lady cannot tell if he is a dog or a cat." }/>
    
     <Card2 name={'Ethel'} job={'Professional Yodeler'} about={"The most vocal of the group, Ethel, a cat that lives up to her name. She enjoys drinking coffee, licking cookies, and most of all begging for pets. You can usually find her kneeding biscuits on a fluffy blanket or sitting right in front of the tv screen.  "}/>

     <Card3 name={'Xander'} job={'Professional Heat Thief'} about={"Named after Buffy the Vampire slayer, Xander is out to steal your heat. A mere shadow of a cat with his gray fur coat and scared disposition. You can find him sitting in front of a heater with his eyes closed and belly out."}/>

     <Card4 name={'Zuko'} job={'Professional Mouser'} about={"Zuko named after the Fire Lord always has something to say. Always one paw in and one paw out. The only one who pays rent...unfortunately the currency is dead mice. "}/>
     
     </div>
        
  );
}


export default App;
