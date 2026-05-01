'use client'

import { useState } from "react";
import AnimalCard from "./AnimalCard";


const Sorting = ({ animals }) => {
    const [sortOrder, setSortOrder] = useState('default')
    const getSortedAnimal = () => {
        const sorted = [...animals]
        if (sortOrder === "low-to-high") {
            return sorted.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "high-to-low") {
            return sorted.sort((a, b) => b.price - a.price);
        }
        return sorted
    }

    const sortedAnimal = getSortedAnimal()
    

    return (
        <div>
            <div className='mb-3 flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between'>
                <h2 className=' text-3xl font-bold'>All Animals</h2>
                <select onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="default">Sort By Price</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    sortedAnimal.map(animal=> <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
                }
            </div>
        </div>
    );
};

export default Sorting;