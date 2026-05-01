
import Image from "next/image";


const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://my-qurbani-hat.vercel.app/data.json')
    const animals = await res.json();

    const filterdAnimal = animals.filter(animal => animal.id == id)
    const {
        id: animalId,
        name,
        type,
        breed,
        price,
        weight,
        age, location, description, image, category
    } = filterdAnimal[0];
    console.log(animalId)
    return (
        <div className="my-5 w-11/12 lg:max-w-7xl mx-auto ">
           
        </div>
    );
};

export default DetailsPage;