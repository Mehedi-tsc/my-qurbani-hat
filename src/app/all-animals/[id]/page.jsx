
import { ModalForm } from "@/ui/Modal";
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

    return (
        <div className="my-5 w-11/12 lg:max-w-7xl mx-auto ">
            <h2 className="text-center font-bold text-3xl">Details of {name}</h2>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure>
                    <Image
                        src={image} alt={name} width={400} height={400}
                        className="rounded-2xl h-65 w-90"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>
                        <p>{description}</p>
                        <p><span className="font-medium">Type:</span> {type}</p>
                        <p> <span className="font-medium">Breed:</span> {breed}</p>
                        <p> <span className="font-medium">Category:</span> {category}</p>
                        <p> <span className="font-medium">Location:</span> {location}</p>
                        <p> <span className="font-medium">Age:</span> {age}</p>
                        <p> <span className="font-medium">Weight:</span> {weight} Kg</p>
                        <p> <span className="font-medium">Price:</span> {price} Taka</p>
                    </div>

                    <div className="card-actions justify-end">
                        <ModalForm></ModalForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;