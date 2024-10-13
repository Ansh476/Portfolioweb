import React from 'react';
import { Link } from 'react-router-dom'; 
import Anshphoto from '../assets/anshfinalimg-modified.png';
import Contact from '../components/Contact';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div>
      <div id='home' className='relative h-screen bg-gradient-to-r from-homic to-black'>
        <div
          className='absolute flex justify-center items-center top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary w-3/4 
            max-w-[900px] h-[480px] py-7 px-3 rounded-cust'>
          <div
            className='relative flex justify-between items-center w-full p-10 h-[450px] 
              bg-gradient-to-r from-homic to-black text-white text-xl rounded-cust'>

            <div className='flex flex-col justify-center items-start gap-4'>
              <h1 className='text-5xl'>ANSH SARFARE</h1>
              <h1 className='text-4xl'>I AM A DEVELOPER</h1>

              <div className='mt-6 flex gap-4'>
                <a href='#contact'>
                  <div
                    className='px-5 py-3 rounded-full w-40 rounded-cust text-lg text-black text-center font-semibold 
                      bg-gradient-to-r from-[#FCA5F1] to-[#B5FFFF] hover:opacity-90'>
                    Contact Me
                  </div>
                </a>

                <a href='https://beige-myriam-20.tiiny.site' target='_blank' rel='noopener noreferrer'>
                  <div
                    className='px-5 py-3 w-40 rounded-cust text-lg text-black text-center font-semibold 
                      bg-gradient-to-r from-[#FCA5F1] to-[#B5FFFF] hover:opacity-90'>
                    Get Resume
                  </div>
                </a>
              </div>
            </div>

            <img
              src={Anshphoto}
              alt='Ansh Sarfare'
              className='sm:hidden md:block md:rounded-lg w-[350px] h-[350px]'
            />
          </div>
        </div>
      </div>

      <div id='about' className='h-screen bg-lime-100'>
        <About />
      </div>

      <div id='skills' className='h-screen bg-purple-400'>
        <Skills />
      </div>

      <div id='projects' className='h-screen bg-sky-500'>
        <Projects />
      </div>

      <div id='contact' className='h-screen bg-emerald-500'>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
