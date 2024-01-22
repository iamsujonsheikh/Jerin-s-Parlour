"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import logo from "/public/assets/logo.png";
import links from '@/app/lib/NavLinks';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import MaxWidthWrapper from '../../lib/MaxWidthWrapper';
import Pinkbtn from '../Pinkbtn';


const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-slate-100 w-full py-5 md:py-6">
            <MaxWidthWrapper>
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-white font-bold text-xl">
                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            alt='logo image'
                        />
                    </Link>

                    <div className="hidden sm:flex space-x-4">
                        {links.map((link) => (
                            <Link key={link.name} href={link.href}
                                className={clsx(
                                    "rounded-md font-medium hover:bg-pink-100 duration-300 hover:text-pink-500 md:flex-none md:justify-start md:p-2 md:px-3",
                                    {
                                        'bg-pink-200 text-pink-500': pathname === link.href,
                                    },
                                )}
                            >
                                <p className='text-lg text-slate-600'>{link.name}</p>
                            </Link>
                        ))}

                        <Pinkbtn label='Login' href='/login' />
                    </div>

                    <div className="sm:hidden">
                        <div
                            className="focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? <AiOutlineClose className='w-8 h-8' /> : <AiOutlineMenuUnfold className='w-8 h-8' />}
                        </div>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="w-full h-full absolute top-16 text-xl font-semibold px-20 bg-white p-2 space-y-2 right-2">
                            {links.map((link) => (
                                <Link key={link.name} href={link.href}>
                                    <p className='text-lg text-slate-500 text-center border-b-2 py-2 rounded hover:bg-pink-100 duration-300 hover:text-pink-500'>{link.name}</p>
                                </Link>
                            ))}

                            <div className='flex justify-center items-center'>
                                <Pinkbtn label="Login" href="/login" />
                            </div>
                        </div>
                    )}
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default NavBar;
