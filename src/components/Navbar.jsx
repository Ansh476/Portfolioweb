// Navbar.jsx
import React from 'react'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='fixed bottom-2 w-full overflow-hidden z-50' >
      <div className='container mx-auto'>
        <div className='w-full bg-black/30 h-[85px] backdrop-blur-2xl rounded-cust max-w-[460px] mx-auto px-5 flex 
            justify-between items-center text-2xl text-white/50'>
          <ScrollLink 
            to="home" 
            activeClass='active'
            spy={true} 
            smooth={true} 
            duration={500}
            className='cursor-pointer flex items-center justify-center'>
            <BiHomeAlt />
          </ScrollLink>

          <ScrollLink 
            to="about" 
            activeClass='active'
            spy={true} 
            duration={500}
            smooth={true} 
            className='cursor-pointer'>
            <BiUser />
          </ScrollLink>

          <ScrollLink 
            to="skills" 
            activeClass='active'
            spy={true} 
            duration={500}
            smooth={true} 
            className='cursor-pointer'>
            <BsClipboardData />
          </ScrollLink>

          <ScrollLink 
            to="projects" 
            activeClass='active'
            spy={true} 
            duration={500}
            smooth={true} 
            className='cursor-pointer'>
            <BsBriefcase />
          </ScrollLink>

          <ScrollLink 
            to="contact" 
            activeClass='active'
            spy={true} 
            duration={500}
            smooth={true} 
            className='cursor-pointer'>
            <BsChatSquare />
          </ScrollLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
