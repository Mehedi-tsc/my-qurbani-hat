
import AnimalList from "@/ui/AnimalList";
import { Suspense } from "react";


const FeaturedAnimal = () => {
   

    return (
        <div className='mt-10 w-11/12 lg:max-w-7xl mx-auto'>
            <p className='text-center font-bold text-3xl mb-3'>Featured animals</p>
            <Suspense fallback={<p className="text-center my-3 font-semibold">loading...</p>}>
                <AnimalList></AnimalList>
            </Suspense>
        </div>
    );
};

export default FeaturedAnimal;