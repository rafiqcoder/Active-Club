import React, { useEffect, useState } from 'react';
import './App.css';

import CardContainer from './components/CardContainer/CardContainer';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    fetch('activity.json')
      .then(res => res.json())
      .then(data => setActivity(data))
  }, [])
  const [id] = activity;

  const [time, setTime] = useState(0);


  const handleAddtoList = (getTime) => {
    const newTime = time + getTime;
    setTime(newTime)
    // console.log(cards);
  }
  // console.log(time);

  return (
   
      <div className='flex flex-col-reverse sm:flex-row  px-3 bg-base-200 w-full'>

        <CardContainer activity={activity} handleAddtoList={handleAddtoList}></CardContainer>
        <Sidebar key={id} time={time} activity={activity}></Sidebar>

      </div>
      
    
  );
}

export default App;
