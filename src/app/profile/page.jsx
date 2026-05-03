import { auth } from '@/lib/auth';
import UpdateModal from '@/ui/Update';
import { Button } from '@heroui/react';

import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Qurbani Hat || Profile",
  };

const ProfilePage = async() => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const {name , image, email} = session?.user;
    
    return (
        <div className="my-12">
            <div className="bg-gray-200 w-10/12 md:w-6/12 lg:w-4/12 mx-auto shadow-sm rounded-xl p-10">
                <h2 className="text-center font-bold text-2xl my-3">My Profile</h2>
                <hr className="text-gray-300 my-6" />
                <div className='flex justify-center '>
                    <Image
                    className='rounded-full'
                    src={image}
                    alt={name}
                    width={100}
                    height={100}
                    />
                </div>
                <h2 className='text-center mt-5 font-semibold text-2xl'>{name}</h2>
                <h2 className='text-center my-5'>Email: {email}</h2>
                <Link className='flex justify-center' href={'/profile/update-profile'}><Button className='bg-blue-600'>Update Profile</Button></Link>
                
                
            </div>

        </div>
    );
};

export default ProfilePage;