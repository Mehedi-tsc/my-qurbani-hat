import React from 'react';

const TipsSection = () => {
    return (
        <div className='my-10 w-11/12 lg:max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-3.5'>Qurbani Tips and Top Breeds</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className="bg-base-100 shadow-sm p-5">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-center">Qurbani Tips</h2>
                    
                        <ul className='pl-3 space-y-1'>
                            <li className='list-disc'>Make your intention solely for Allah</li>
                            <li className='list-disc'>Choose a healthy and eligible animal</li>
                            <li className='list-disc'>Ensure humane and proper slaughter</li>
                            <li className='list-disc'>Share the meat with family, friends, and the poor</li>
                        </ul>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">View All Tips</button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 shadow-sm p-5">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-center">Top Breeds</h2>
                    
                        <ul className='pl-3 space-y-1'>
                            <li className='list-disc'><span className='font-medium'>Cow:</span> Sahiwal, Brahman </li>
                            <li className='list-disc'><span className='font-medium'>Goat:</span>Black Bengal, Jamunapari  </li>
                            <li className='list-disc'><span className='font-medium'>Buffalo:</span> Murrah, Jafarabadi </li>
                            <li className='list-disc'><span className='font-medium'>Sheep:</span>Local breeds  </li>
                            
                        </ul>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">View Animals</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default TipsSection;