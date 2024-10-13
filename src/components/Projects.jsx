import React from 'react'
import tribe from '../assets/tribevibepg.png';
import food from '../assets/Foodhaven.png';
import med from '../assets/medisync.png';
import news from '../assets/globenews.png';


const Projects = () => {
  return (
    <div className='relative h-full bg-gradient-to-r from-homic to-black text-white'>
      <div
        className='absolute top-[50px] left-1/2 transform -translate-x-1/2 translate-y-[-50%] px-8 py-4 bg-clip-text 
        text-transparent bg-gradient-to-r from-primary to-secondary font-bold rounded-full text-3xl'>
        Projects
      </div>
      <div className='grid grid-cols-2 gap-x-4 gap-y-2 pt-16 pl-24'>
        <div className='mr-24 p-4'>
        <img src={tribe} alt="" className='w-full h-48 transform transition-transform duration-300 hover:scale-125 rounded-cust' />
          <p className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-lg font-bold'> A community-focused platform that connects people by allowing them to join or create communities. Features include chatrooms, announcements, feedback sections, and more, promoting active engagement and collaboration within groups.</p>
        </div>
        <div className=' mr-24 p-4'>
          <img src={food} alt="" className='w-full h-48 transform transition-transform duration-300 hover:scale-125 rounded-cust'/>
          <p className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-lg font-bold'> A fully functional clone of Swiggy which fetches restuarents by real time api, mimicking the food ordering platform with features like browsing restaurants, adding items in cart and many more .</p>
        </div>
        <div className='mr-24 p-4'>
          <img src={med} alt="" className='w-full h-48 transform transition-transform duration-300 hover:scale-125 rounded-cust'/>
          <p className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-lg font-bold'> A Python-based website designed to help users manage their healthcare needs. It tracks medicine reminders, counts medicine inventory, includes a period tracker, and stores medical reports for easy access.</p>
        </div>
        <div className='mr-24 p-4'>
          <img src={news} alt="" className='w-full h-48 transform transition-transform duration-300 hover:scale-125 rounded-cust'/>
          <p className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-lg font-bold'> A simple and intuitive app that fetches and displays the latest news articles from various sources, keeping users up-to-date on current events.</p>
        </div>

      </div>
     
    </div>
  );
};

export default Projects