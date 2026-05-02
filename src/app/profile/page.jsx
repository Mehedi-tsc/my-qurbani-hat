import { auth } from '@/lib/auth';
import UpdateModal from '@/ui/UpdateModal';

import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

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
                <UpdateModal></UpdateModal>
                
                
            </div>

        </div>
    );
};

export default ProfilePage;