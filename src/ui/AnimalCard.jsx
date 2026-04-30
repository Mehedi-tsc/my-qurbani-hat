import Image from 'next/image';
import React from 'react';

const AnimalCard = ({ animal }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-10 pt-10 ">
               <Image className='rounded-xl h-35' src={animal.image} alt={animal.name}
               width={200} height={200}/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{animal.name}</h2>
                <p>{animal.description}</p>
                <div className='text-center font-medium'>
                    <p>Price: {animal.price}/- Taka</p>
                    <p>Weight: {animal.weight} Kg</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;