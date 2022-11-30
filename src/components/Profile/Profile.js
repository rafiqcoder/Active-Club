import React from 'react';
import my from '../../images/my.jpg';
const Profile = () => {
    return (
        <div className="profile flex flex-col justify-center mt-10 items-center">
            <img className='w-[100px] rounded-3xl' src={my} alt="" />
            <div className='flex flex-col justify-center text-xl text-center mt-3'>
                <h2 className='font-bold'>Md Rafiqul Islam</h2>
                <h2 className='text-xl'>Web Designer and Developer</h2>
            </div>
        </div>
    );
};

export default Profile;