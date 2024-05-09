import React, { useState } from 'react'
import { MdKeyboardArrowRight,MdKeyboardArrowDown } from "react-icons/md";
import { GoHome } from "react-icons/go";
import bulb from '../assests/bulb.png';
import speaker from '../assests/Speaker.png'
import Reload from '../assests/Reload.png';
import Left from '../assests/Left.png';
import Right from '../assests/Right.png';
import Zoom from '../assests/Zoom.png';
import  Hyggex from '../assests/Hyggex.png';
import  Plus from '../assests/Plus.png';

const Middle = () => {
  const [activeItem, setActiveItem] = useState('Relation and Function');

  const handleClick = (item) => {
      setActiveItem(item);
  };

  const [activeTab, setActiveTab] = useState('Study');

  const handleTabClick = (tabName) => {
      setActiveTab(tabName);
  };

  return (
    <div className='flex flex-col mt-10'>
    <div className='grid  sm:grid-flow-col auto-cols-max items-center gap-3'>
            <GoHome size={35} className={`text-gray-500 cursor-pointer ${activeItem === 'Home' ? 'text-blue-900' : ''}`} onClick={() => handleClick('Home')}/>
            <MdKeyboardArrowRight size={'25px'} className='text-[#06286E] hidden sm:flex'/>
            <MdKeyboardArrowDown size={'25px'} className='text-[#06286E] sm:hidden'/>
            <p className={`text-[#696671] font-medium text-lg cursor-pointer ${ activeItem === 'Flashcard' ? 'text-blue-900' : ''}`} onClick={() => handleClick('Flashcard')}>
                Flashcard
            </p>
            <MdKeyboardArrowRight size={'25px'} className='text-[#06286E] hidden sm:flex'/>
            <MdKeyboardArrowDown size={'25px'} className='text-[#06286E] sm:hidden'/>
            <p className={`text-[#696671] font-medium text-lg cursor-pointer ${ activeItem === 'Mathematics' ? 'text-blue-900' : '' }`} onClick={() => handleClick('Mathematics')} >
                Mathematics
            </p>
            <MdKeyboardArrowRight size={'25px'} className='text-[#06286E] hidden sm:flex'/>
            <MdKeyboardArrowDown size={'25px'} className='text-[#06286E] sm:hidden'/>
            <p className={`text-[#696671] font-medium text-lg cursor-pointer ${ activeItem === 'Relation and Function' ? 'text-blue-900' : '' }`} onClick={() => handleClick('Relation and Function')} >
                Relation and Function
            </p>
        </div>
    <p style={{background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent' }} className='font-bold text-2xl mt-14'>Relations and Functions ( Mathematics )</p>

    <div className='flex flex-col w-[100%] lg:w-[712px] h-[full] justify-center items-center mx-auto gap-5 mt-10'>
 

    <div className='flex justify-center items-center'>
            <div className="text-sm font-medium text-center border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                        <p
                            className={`inline-block p-4 ${
                                activeTab === 'Study'
                                    ? 'text-[#06286E] border-b-2 border-blue-900 rounded-t-lg active text-xl font-bold cursor-pointer'
                                    : 'border-b-2 border-transparent rounded-t-lg text-[#696671] hover:text-[#06286E] hover:border-blue-900 text-xl font-medium cursor-pointer'
                            }`}
                            onClick={() => handleTabClick('Study')}
                        >
                            Study
                        </p>
                    </li>
                    <li className="me-2">
                        <p
                            className={`inline-block p-4 ${
                                activeTab === 'Quiz'
                                    ? 'text-[#06286E] border-b-2 border-blue-900 rounded-t-lg active text-xl font-bold cursor-pointer'
                                    : 'border-b-2 border-transparent rounded-t-lg text-[#696671] hover:text-[#06286E] hover:border-blue-900 text-xl font-medium cursor-pointer'
                            }`}
                            onClick={() => handleTabClick('Quiz')}
                        >
                            Quiz
                        </p>
                    </li>
                    <li className="me-2">
                        <p
                            className={`inline-block p-4 ${
                                activeTab === 'Test'
                                    ? 'text-[#06286E] border-b-2 border-blue-900 rounded-t-lg active text-xl font-bold cursor-pointer'
                                    : 'border-b-2 border-transparent rounded-t-lg text-[#696671] hover:text-[#06286E] hover:border-blue-900 text-xl font-medium cursor-pointer'
                            }`}
                            onClick={() => handleTabClick('Test')}
                        >
                            Test
                        </p>
                    </li>
                    <li className="me-2">
                        <p
                            className={`inline-block p-4 ${
                                activeTab === 'Game'
                                    ? 'text-[#06286E] border-b-2 border-blue-900 rounded-t-lg active text-xl font-bold cursor-pointer'
                                    : 'border-b-2 border-transparent rounded-t-lg text-[#696671] hover:text-[#06286E] hover:border-blue-900 text-xl font-medium cursor-pointer'
                            }`}
                            onClick={() => handleTabClick('Game')}
                        >
                            Game
                        </p>
                    </li>
                    <li className="me-2">
                        <p
                            className={`inline-block p-4 ${
                                activeTab === 'Others'
                                    ? 'text-[#06286E] border-b-2 border-blue-900 rounded-t-lg active text-xl font-bold cursor-pointer'
                                    : 'border-b-2 border-transparent rounded-t-lg text-[#696671] hover:text-[#06286E] hover:border-blue-900 text-xl font-medium cursor-pointer'
                            }`}
                            onClick={() => handleTabClick('Others')}
                        >
                            Others
                        </p>
                    </li>
                </ul>
            </div>
        </div>

  <div className='w-full h-[393.19px] rounded-3xl' style={{ background: 'linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)',}}>
    <div className='flex items-center justify-between mt-4 mx-6'>
      <img src={bulb} alt='' />
      <img src={speaker} alt='' />
    </div>
    <p className='mt-[150px] text-center font-bold text-xl sm:text-3xl text-white'>9 + 6 + 7x - 2x - 3</p>
  </div>

  <div className='flex justify-between items-center w-[90%]'>
    <img src={Reload} alt='Reload' className='w-[20px] sm:w-[30px] cursor-pointer' />
    <div className='flex justify-between items-center gap-2 sm:gap-8'>
      <img src={Left} alt='Left' className='w-[20px] sm:w-[60px]  cursor-pointer' />
      <p className='text-[#202B37] font-bold text-sm sm:text-2xl'>01/10</p>
      <img src={Right} alt='Right' className='w-[20px] sm:w-[60px]  cursor-pointer'  cursor-pointer />
    </div>
    <img src={Zoom} alt='Zoom' className='w-[20px] sm:w-[30px]  cursor-pointer' />
   </div>
   </div>


    <div className='sm:flex justify-between items-center mt-8'>
      <img src={Hyggex} alt='Hyggex' className=' w-[150px] sm:w-[217px] -ml-5 sm:-ml-8'  />
      <div className='flex items-center gap-4 mt-4 sm:mt-0'>
      <img src={Plus} alt='Plus' className='w-[40px] sm:w-[50px]' />
      <p className=' text-lg sm:text-2xl font-semibold' style={{background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent' }}>Create Flashcard</p>
      </div>
    </div>

    </div>

  )
}

export default Middle




