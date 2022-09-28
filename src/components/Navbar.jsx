import React, { useEffect, } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider';
import { FiShoppingCart } from 'react-icons/fi';


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
      <TooltipComponent content={title} position="BottomCenter">
          <button type="button" onClick={customFunc} style={{ color }}
          className="relative text-xl rounded-none px-10 pb-0"
          >
              <span style={{ background: dotColor }}
             className="absolute inline-flex h-4 w-4 right-1 top-2" 
              >
              {icon}
              </span>
          </button>
      </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, 
    isClicked, setIsClicked, handleClick, screenSize, setScreenSize
  } = useStateContext();

  useEffect(() => {
     const handleResize = () => setScreenSize
       (window.innerWidth)   
    window.addEventListener('resize', handleResize)
    handleResize()
    
     return () => window.removeEventListener
     ('resize', handleResize);
  }, []);


  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true)
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between pr-10 py-0	md:mx-6 relative'>
      <NavButton  title="Menu" customFunc={() =>
      setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
      color="#E82F42" 
      icon={<AiOutlineMenu />} /> 
      <div className="flex">

      <NavButton  
        title="Chat" 
        // dotColor="blue"
        customFunc={() => handleClick('Chat')} 
        color="black" 
        icon={<BsChatLeft />} /> 

        <NavButton  
        title="Notifications" 
        // dotColor="blue"
        customFunc={() => handleClick('Notification')} 
        color="black"
        icon={<RiNotification3Line />} /> 

        <TooltipComponent 
        content="Profile" 
        position="BottomCenter"
        > 
        <div className="flex items-center gap-2 cusrsor-pointer p-1
         hover:bg-light-gray rounded-lg"
         onClick={() => handleClick('userProfile')}>
            <img className="rounded-full w-87 h-12" 
            src={avatar}/>
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {''}
              <span  className="text-gray-400 text-14 font-bold ml-1">Castro</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
        </TooltipComponent>
        {isClicked.chat &&  <Chat />}
        {isClicked.notification &&  <Notification />}
        {isClicked.userProfile &&  <userProfile />}
      </div>
    </div>
  )
}

export default Navbar
