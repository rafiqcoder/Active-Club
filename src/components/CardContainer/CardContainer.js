import React from 'react';

import Logo from '../../images/logo.jpg';
import Card from '../Card/Card';

const CardContainer = (props) => {
    //distructuring the props
    const { activity, handleAddtoList } = props;

    return (

        <div className="products-container p-3 sm:px-5 gap-5 md:w-9/12">

            <div className='ml-5 text-3xl font-semibold flex py-3'>
                <a href="/"> <img className='w-[80px] rounded-full mr-3' src={Logo} alt="" /></a>
                <h2 className='w-full ml-3 uppercase mt-2' > Workout at Home</h2>
            </div>
            <div className='grid sm:grid-cols-1  lg:grid-cols-3 2xl:grid-cols-4 col-span-4 sm:p-3 sm:px-5 gap-5'>
                {
                    activity.map(card => <Card key={card.id} card={card} handleAddtoList={handleAddtoList}></Card>)
                }
            </div>

            <div className='m-0 my-10 sm:mx-8'>
                <div tabIndex={1} className="collapse collapse-plus collapse-open border border-base-300 rounded-box bg-green-100">
                    <div className="collapse-title text-xl font-medium  bg-sky-300">
                        Q1: How does React works?
                    </div>
                    <div className="collapse-content">
                        <p className='sm:w-9/12 h-auto sm:pl-10 pt-5 pb-5 text-xl' tabIndex={0}> React uses vanila javascript to maintain all hooks and functionalities.And provides Tags that looks like html Tag but behind the scene they all are nothing but javascript objects. React devides the ui into many isolated parts which is called Component. And makes a copy of DOM as virtual DOM</p>
                    </div>
                </div>
                <div tabIndex={1} className="collapse-plus collapse border border-base-300 bg-green-100 rounded-box">
                    <div className="collapse-title text-xl font-medium  bg-sky-300">
                        Q2:  What are the differences between props and state?
                    </div>
                    <div className="collapse-content ">
                        <p tabIndex={1} className='sm:w-9/12 h-auto sm:pl-10 pt-5 pb-5 text-xl'> Props uses to pass the data from one component to another and State uses to store the change of data and passes within the component</p>
                    </div>
                </div>
                <div tabIndex={2} className=" collapse-plus collapse border border-base-300  rounded-box  bg-green-200">
                    <div className="collapse-title text-xl font-medium  bg-sky-300">
                        Q3: Without Api load what are the other purposes of useEffect ?
                    </div>
                    <div className="collapse-content">
                        <p className='sm:w-9/12 h-auto sm:pl-10 pt-5 pb-5 text-xl' tabIndex={2}> The useEffect is used to control and manipulate the side effects.Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects</p>
                    </div>
                </div>


            </div>

        </div>



    )
};

export default CardContainer;