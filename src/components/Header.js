// import React, { useState } from 'react';
// import CompanyIcon from '../assests/CompanyIcon.png';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoCloseSharp } from "react-icons/io5";

// const Header = () => {
//     const [showMobileDrawer, setShowMobileDrawer] = useState(false);

//     const toggleMobileDrawer = () => {
//         setShowMobileDrawer(!showMobileDrawer);
//     };

//     return (
//         <div className='flex justify-between py-5 items-center'>
//             <img src={CompanyIcon} alt='' className='w-[191px] h-[39px] cursor-pointer' />

//             <div className='md:hidden'>
//                 { showMobileDrawer ? "":<button onClick={toggleMobileDrawer} className='text-[#3A3740] text-lg font-normal cursor-pointer'>
//                 <GiHamburgerMenu  size={"25px"}/>
//                 </button>}
//             </div>
            
//             <div className='hidden md:flex gap-10 items-center'>
//                 <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline'>Home</p>
//                 <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline'>Flashcard</p>
//                 <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline'>Contact</p>
//                 <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline'>FAQ</p>
//                 <button className='bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-2 rounded-full'>Login</button>
//             </div>

//             {/* Mobile Navigation Drawer */}
//             {showMobileDrawer && (
//                 <div className='md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-50'>
//                     <div className='flex flex-col items-end h-full p-8'>
//                        { showMobileDrawer? <button onClick={toggleMobileDrawer} className='text-[#3A3740] text-lg font-normal cursor-pointer absolute top-5 right-4'>
//                         <IoCloseSharp  size={'30px'}/>
//                         </button>: ""}
//                         <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline my-2 mt-10'>Home</p>
//                         <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline my-2'>Flashcard</p>
//                         <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline my-2'>Contact</p>
//                         <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline my-2'>FAQ</p>
//                         <button className='bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-2 rounded-full my-2'>Login</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Header;

import React, { useState } from 'react';
import CompanyIcon from '../assests/CompanyIcon.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';

const Header = () => {
    const [showMobileDrawer, setShowMobileDrawer] = useState(false);

    const toggleMobileDrawer = () => {
        setShowMobileDrawer(!showMobileDrawer);
    };

    return (
        <div className='flex justify-between py-5 items-center'>
            <img src={CompanyIcon} alt='' className='w-[191px] h-[39px] cursor-pointer' />

            <div className='md:hidden'>
                {showMobileDrawer ? (
                    ''
                ) : (
                    <button onClick={toggleMobileDrawer} className='text-[#3A3740] text-lg font-normal cursor-pointer'>
                        <GiHamburgerMenu size={'25px'} />
                    </button>
                )}
            </div>

            <div className='hidden md:flex gap-10 items-center'>
                <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline'>Home</p>
                <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline'>Flashcard</p>
                <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline'>Contact</p>
                <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline'>FAQ</p>
                <button className='bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-2 rounded-full'>Login</button>
            </div>

            {/* Mobile Navigation Drawer */}
            {showMobileDrawer && (
                <div className='md:hidden fixed inset-0 z-50'>
                    <div className='flex flex-col items-end h-full p-8' style={{ backgroundColor: 'white', width: '150px' }}>
                        <button onClick={toggleMobileDrawer} className='text-[#3A3740] text-lg font-normal cursor-pointer absolute top-5 right-4'>
                            <IoCloseSharp size={'30px'} />
                        </button>
                        <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline my-2 mt-10'>Home</p>
                        <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline my-2'>Flashcard</p>
                        <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline my-2'>Contact</p>
                        <p className='text-[#3A3740] text-lg font-normal cursor-pointer hover:text-blue-900 hover:underline my-2'>FAQ</p>
                        <button className='bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-2 rounded-full my-2'>Login</button>
                    </div>
                    <div className='fixed inset-0 bg-black bg-opacity-25' onClick={toggleMobileDrawer}></div>
                </div>
            )}
        </div>
    );
};

export default Header;

