import React from 'react';
import { FaFootballBall, FaLaptopCode, FaBrain } from 'react-icons/fa'; 
import { IoMdSchool } from 'react-icons/io'; 

const About = () => {
  return (
    <div className='relative h-full bg-gradient-to-r from-homic to-black text-white'>
      <div
        className='absolute top-[50px] left-1/2 transform -translate-x-1/2 translate-y-[-50%] px-8 py-4 bg-clip-text 
        text-transparent bg-gradient-to-r from-primary to-secondary font-bold rounded-full text-3xl'>
        About Me
      </div>

      <div className='flex justify-center items-center h-full'>
        <div className='w-3/4 max-w-[900px] p-8 bg-gradient-to-r from-primary to-secondary rounded-cust shadow-lg'>
          <h2 className='text-3xl font-bold mb-4'>My Journey</h2>
          <ul className='list-none timeline mb-6'>
            <li className='mb-4'>
              <strong>2020:</strong> Completed School with a score of 92%.
            </li>
            <li className='mb-4'>
              <strong>2022:</strong> Completed High School from BSJC and scored 88% .
            </li>
            <li className='mb-4'>
              <strong>2022:</strong> Joined VESIT pursuing Information Technology.
            </li>
            <li className='mb-4'>
              <strong>2024:</strong> BuilDING full-stack applications in MERN stack.
            </li>
          </ul>

          <h2 className='text-3xl font-bold mb-4'>Achievements</h2>
          <div className='flex items-center gap-4 mb-6'>
            <IoMdSchool className='text-4xl' />
            <span className='gap-3'>
            <p className='text-lg'>
              Avg pointer upto 4 semesters = 8.71
            </p>
            <p className='text-lg'>
              1x VPL Champion , 2x VFL Champion
            </p>
            </span>
          </div>

          <h2 className='text-3xl font-bold mb-4'>Interests</h2>
          <div className='flex gap-8'>
            <div className='text-center'>
              <FaLaptopCode className='text-4xl mb-2' />
              <p>Web Development</p>
            </div>
            <div className='text-center'>
              <FaFootballBall className='text-4xl mb-2' />
              <p>Football</p>
            </div>
            <div className='text-center'>
              <FaBrain className='text-4xl mb-2' />
              <p>AI & ML</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
