"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import menuClose from '/public/icon-close-menu.svg'
import menu from '/public/icon-menu.svg'

const Navbar = () => {
  const[ativo, setAtivo] = useState(false)  
  return (
    <nav className='flex w-full fixed top-0 left-0 right-0 z-0 h-auto bg-violet-400  text-white justify-end'>
      <Link href="/"><h2 className='text-2xl text-cyan-600 font-bold p-6 md:pl-11'>Logo</h2></Link>
      <div className=' px-4 mx-auto lg:max-w-7xl  md:flex md:px-8 '>
      </div>
      
      <div className={`flex-1  justify-self-center  pb-3 md:block md:pb-0 md:mt-0 ${
      ativo ? 'p-12 md:p-8   ' : 'hidden'
    }`}>
      <ul className=' h-screen md:h-auto md:flex md:w-full md:justify-end  md:pt-3.5 md:items-center flex-grow items-center justify-center w-2/3 pt-10  '>
        <li className='pb-6 text-xl text-white py-2 md:px-6 text-center items-center justify-center border-b-2 md:border-b-0  hover:bg-purple-600'>
          <Link href="#about" onClick={() => setAtivo(!ativo)}>about</Link>
        </li>
        <li className='pb-6 text-xl text-white py-2 md:px-6 text-center items-center justify-center border-b-2 md:border-b-0 hover:bg-purple-600'>
          <Link href="#blog" onClick={() => setAtivo(!ativo)}>blog</Link>
        </li>
        <li className='pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 items-center justify-center md:border-b-0 hover:bg-purple-600'>
          <Link href="#contact" onClick={() => setAtivo(!ativo)}>contact</Link>
        </li>
        <li className='pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 items-center justify-center md:border-b-0 hover:bg-purple-600'>
          <Link href="#projects" onClick={() => setAtivo(!ativo)}>projects</Link>
        </li>
      </ul>
  
    </div>
      <div className="md:hidden  " >
        <button
         className='p-2 flex'
         onClick={() => setAtivo(!ativo)}>
        {
          ativo ? 
          (<Image src={menuClose}
            className='focus:border-none active:border-none'
            height={30}
            width={30}
            alt='menu-close'/>
            
) : (

          <Image src={menu}
            className='top-0'
            height={30} 
            width={30} 
            alt='menu'/>  
            )
        }
        </button>


        </div>

    
    </nav>

  )
}

export default Navbar