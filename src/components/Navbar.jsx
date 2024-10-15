"use client";
import React from 'react'
import ThemeSwitcher from './switchers/ThemeSwitcher'
import Link from 'next/link';


const Navbar = () => {


    const menuOptions = [
        {
            id: 1,
            name: 'home',
            href: '#home',
        },{
            id: 2,
            name: 'sobre',
            href: '#sobre',
        },{
            id: 3,
            name: 'contato',
            href: '#contato',
        }
    ]
  return (
    <div className='flex items-center justify-between text-black dark:text-white   border-[rgba(54,11,89,0.8)] border-2 h-20  py-2 px-8 mx-[60px] my-4 border-dotted rounded-full'>

        <div className="flex">
            <a href='#' className='font-semibold text-xl pr-[80px]'>Thiago Silva Andrade</a> 
                {menuOptions.map((options, index) => (
                <Link href={options.href} key={index}  >
                    <h1 className="  font-semibold text-lg pr-8">{options.name}</h1>
                </Link>
            ))}
        </div>
        <div className="items-center hidden md:flex lg:flex">
            <ThemeSwitcher />
            <a href='#' className=' font-semibold text-lg bg-[rgba(54,11,89,0.6)] rounded-full px-5 py-2'>Fale comigo</a>
        </div>
    </div>
  )
}

export default Navbar