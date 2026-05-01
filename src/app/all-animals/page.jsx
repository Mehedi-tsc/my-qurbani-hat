
import Sorting from '@/ui/Sorting';


const AllAnimalPage = async () => {
    const res = await fetch('https://my-qurbani-hat.vercel.app/data.json')
    const animals = await res.json()
    return (
        <div className='my-5 w-11/12 lg:max-w-7xl mx-auto'>
              
                <Sorting animals={animals}></Sorting>
         
        </div>
    );
};

export default AllAnimalPage;