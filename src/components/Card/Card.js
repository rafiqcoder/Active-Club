import React from 'react';
const Card = (props) => {
    // console.log(props);

    const { card, handleAddtoList } = props;
    const {name, des, age, time, img } = card



    return (
        
            
            <div className="card w-full bg-base-100 shadow-xl m-0 p-0 h-full">
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>{des.slice(0,100)}</p>
                    <h2 className='text-base-500 font-bold text-xl'>Age: {age}</h2>
                    <h2 className='text-orange-500 font-bold text-xl'>Time required:{time} s</h2>
                    <div className="card-actions justify-end p-0 m-0">
                        <button onClick={() => handleAddtoList(card.time)} className="btn border-0 bg-blue-400 text-white w-full">Add to List</button>
                    </div>
                </div>
            </div>
       
    );
};

export default Card;