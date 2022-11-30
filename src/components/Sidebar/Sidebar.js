import React, { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';
import Workout from '../Workout/Workout';

const Sidebar = ({ time, activity }) => {

    const [NewTime, setBreakTime] = useState(0)


    const breakHandle = (e) => {

        const breaktime2 = e.target.innerText;
        const breaktime = parseInt(breaktime2.slice(0, 2));

        localStorage.setItem('breakTime', breaktime);

        setBreakTime(breaktime)
    }
   
    // console.log(getTime);
    // const getTime2 = parseInt(getTime);
    // // console.log(parseInt(getTime));
    // setBreakTime(getTime2)

    // console.log(breakTime);
    const notify = () => toast("Congrates! all activity completed");

    return (
        <div className="cart-container bg-gradient-to-br from-green-400 to-blue-500 rounded-lg h-screen sm:sticky top-0 min-w-[300px]  sm:w-1/4 ">
            <Profile></Profile>
            <Break breakHandle={breakHandle}></Break>
            <Workout time={time} NewTime={NewTime}></Workout>
            <h2 className='text-xl font-bold p-4 bg-blue-600 w-11/12 rounded-lg text-center uppercase text-white mx-auto mt-12' onClick={notify}>Activity Complete</h2>
            <ToastContainer />
        </div>
    );
};

export default Sidebar;