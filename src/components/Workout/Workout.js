import React from 'react';


const Workout = ({time,NewTime}) => {

    let breakTime;

    if (!NewTime === 0) {
        breakTime = NewTime
    } else {
        const getTime = localStorage.getItem('breakTime');
        breakTime = parseInt(getTime);
    }
    console.log(breakTime);
    return (
        <div className="profile flex flex-col justify-center mt-12 items-center">
            <h2 className='text-xl font-bold p-4 bg-sky-100 bg-opacity-30 w-11/12 rounded-lg text-center uppercase mt-3 text-white'>Workout Details</h2>
            <div className="break-times flex flex-row justify-around  p-3 bg-opacity-20 bg-sky-200 mt-5 w-11/12 rounded-lg">
                <h2 className='p-3 text-whiterounded-full text-lg font-semibold'>Workout Time</h2>
                <h2 className='p-3 text-white text-lg font-semibold opacity-70'><span>{time}</span> seconds</h2>

            </div>
            <div className="break-times flex flex-row justify-around  p-3 bg-opacity-20 bg-sky-200 mt-5 w-11/12 rounded-lg">
                <h2 className='p-3 text-whiterounded-full text-lg font-semibold'>Break Time</h2>
                <h2 className='p-3 text-white text-lg font-semibold opacity-70'><span>{breakTime}</span> seconds</h2>

            </div>
        </div>
    );
};

export default Workout;