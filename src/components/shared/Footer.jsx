import img from '@/asset/Eid-Al-Adha-Navbar.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <div className='bg-[#474948] pt-15 pb-7'>
            <div className='w-11/12 lg:max-w-7xl mx-auto'>
                <div className='flex justify-center mb-10'>
                    <Image

                        src={img}
                        alt='Logo'
                        width={200}
                        height={50}
                        className='rounded-xl opacity-40'
                    />
                </div>
                {/* <div className='text-center mb-10 space-y-2'>
                        <h1 className='font-bold  text-4xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>QURBANI HAT</h1>
                        <p className='text-blue-300 text-2xl font-medium'>Livestock Booking Platform</p>
                </div> */}

                <div className='text-center md:text-left lg:text-left flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between'>
                    <div>
                        <h2 className='mb-4 font-semibold text-lg text-[#FFFFFF]'>About Section</h2>
                        <p className=' text-[#FFFFFF]/70'>We make Qurbani easy and trustworthy <br /> by connecting you with reliable services, <br /> ensuring proper and caring sacrifice.</p>

                    </div>
                    <div>
                        <h2 className='mb-4 font-semibold text-lg text-[#FFFFFF]'>Contact Info</h2>
                        <p className=' text-[#FFFFFF]/70'>Level-14, 14, Tower Centre, Jhenaidah <br /> Email: qurbani@hat.com <br /> Available : 10:00am to 07:00pm</p>

                    </div>
                    
                    <div>
                        <h2 className='mb-4 font-semibold text-lg text-[#FFFFFF]'>Social Links</h2>
                        <div className='flex justify-center items-center gap-2'>
                            <Image
                                src='/instagram.png'
                                alt='Instagram-Logo'
                                width={40}
                                height={40}
                            />
                            <Image
                                src='/facebook.png'
                                alt='Facebook-Logo'
                                width={40}
                                height={40}
                            />
                            <Image
                                src='/twitter.png'
                                alt='Twitter-Logo'
                                width={40}
                                height={40}
                            />

                        </div>
                    </div>
                </div>
                <div className='mt-16 flex justify-between pt-7 border-t border-[#1A8862]/40'>
                    <p className='text-[#FAFAFA]/50'>© 2026 Qurbani Hat. All rights reserved.</p>
                    <div className='flex gap-5'>
                        <p className='text-[#FAFAFA]/50'>Privacy Policy   </p>
                        <p className='text-[#FAFAFA]/50'>Terms of Service </p>
                        <p className='text-[#FAFAFA]/50'>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;