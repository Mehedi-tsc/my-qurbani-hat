import AnimalCard from "@/ui/AnimalCard";


const FeaturedAnimal = async() => {
    const res = await fetch('https://my-qurbani-hat.vercel.app/data.json')
    const animals = await res.json()
    
    return (
        <div className='mt-10 w-11/12 lg:max-w-7xl mx-auto'>
            <p className='text-center font-bold text-3xl mb-3'>Featured animals</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    animals.slice(0,4).map(animal=> <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedAnimal;