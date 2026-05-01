import AnimalCard from "./AnimalCard";


const AnimalList = async () => {
    const res = await fetch('https://my-qurbani-hat.vercel.app/data.json')
    const animals = await res.json()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

            {
                animals.slice(0, 4).map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
            }

        </div>
    );
};

export default AnimalList;