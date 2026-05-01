import AnimalCard from '@/ui/AnimalCard';
import React from 'react';

const AllAnimalPage = async () => {
    const res = await fetch('https://my-qurbani-hat.vercel.app/data.json')
    const animals = await res.json()
    return (
        <div className='my-5 w-11/12 lg:max-w-7xl mx-auto'>
            <div className='mb-3 flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between'>
                <h2 className=' text-3xl font-bold'>All Animals</h2>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    animals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
                }
            </div>
        </div>
    );
};

export default AllAnimalPage;