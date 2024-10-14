"use client";
import React, { useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import {AlignJustify} from 'lucide-react'
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("")
    console.log(pathname)
    const menuOptions = [
        {
            id: 1,
            name: 'Home',
            href: '/#home',
        },{
            id: 2,
            name: 'Sobre',
            href: '/#sobre',
        },{
            id: 3,
            name: 'Contato',
            href: '/#contato',
        }
    ]
  return (
    <div className='flex items-center justify-between bg-white dark:bg-slate-800  h-20  py-8 px-[110px]'>
        <img src='' className='h-8 w-8' alt='Logo' />
        <div className="flex">
        {menuOptions.map((options, index) => (
                <Link href={options.href} key={index} className={cn(
                    { "underline decoration-solid decoration-red-600" : options.href === activeSection}
                )} onClick={setActiveSection(`${options.name}`)}>
                    <h1 className="text-black dark:text-white font-semibold text-xl pr-8">{options.name}</h1>
                </Link>
            ))}
        </div>
        <div className="items-center hidden md:flex lg:flex">
            <ThemeSwitcher />
            <a href='#' className='text-black dark:text-white font-semibold text-xl'>CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar