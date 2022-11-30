import React from 'react';

const Break = ({breakHandle}) => {
    return (
        <div className="profile flex flex-col justify-center mt-12 items-center">
            <h2 className='text-xl font-bold p-4 bg-sky-100 bg-opacity-30 w-11/12 rounded-lg text-center uppercase mt-3 text-white'>Add A Break</h2>
            <div className="break-times flex flex-row justify-around  p-3 bg-opacity-20 bg-sky-200 mt-5 w-11/12 rounded-lg">
                <h2 onClick={breakHandle} className='p-3 text-white bg-sky-300 rounded-full text-lg font-semibold'><span>10</span>s</h2>
                <h2 onClick={breakHandle} className='p-3 text-white rounded-full text-lg font-semibold bg-blue-500'><span>20</span>s</h2>
                <h2 onClick={breakHandle} className='p-3 text-white bg-sky-300 rounded-full text-lg font-semibold'><span>
                    30</span>s</h2>
                <h2 onClick={breakHandle} className='p-3 text-white bg-sky-300 rounded-full text-lg font-semibold'><span>25</span>s</h2>
            </div>
        </div>
    );
};

export default Break;