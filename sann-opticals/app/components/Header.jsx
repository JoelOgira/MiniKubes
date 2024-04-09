"use client"

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdLocalPhone } from 'react-icons/md'

export default function Header() {

    const [ isOpen, setIsOpen ] = useState(true);
    const [ isHidden, setIsHidden ] = useState(true);
    const [ isAboutClosed, setIsAboutClosed ] = useState(true);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleHidden = () => {
        setIsHidden(!isHidden);
    }

    const handleAbout = () => {
        setIsAboutClosed(!isAboutClosed)
    }

    return (
        <nav className={`${isOpen ? '' : 'sticky'} bg-white z-30 w-full top-0 px-4 py-2 md:py-5 md:bg-transparent lg:px-12`}>
            <div className="flex items-center space-x-10 justify-between">
                <Link href="/">
                    <Image src={logo} alt="Site Icon" className='w-[6rem] h-[2.5rem]  md:w-[8rem] md:h-[4rem]' />
                </Link>

                <div className="hidden [&>a]:font-semibold [&>div>div>span]:font-semibold [&>div>div>div>a]:font-semibold [&>div>div>div>a]:text-lg md:flex md:flex-wrap md:items-center md:justify-center space-x-5">
                    <Link href="/" className="hover:text-lightBlue">Home</Link>
                    <Link href="/services" className="hover:text-lightBlue">Services</Link>
                    {/* <Link href="/about" className="hover:text-lightBlue">About</Link> */}
                    {/* <div onMouseEnter={handleAbout} onMouseLeave={handleAbout} onClick={handleAbout} className="cursor-pointer z-30">
                        <div className="hover:text-lightBlue flex items-center space-x-1">
                            <span>Branches</span>
                            <span>{isAboutClosed ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}</span>
                        </div>
                        {isAboutClosed ? '' :
                            <div className="z-50">
                                <div className="bg-white absolute pr-9 pl-3 py-3 flex flex-col space-y-3 shadow-md hover:[&>a]:text-lightBlue">
                                    <Link onClick={handleAbout} href="/branches/mombasa" >Mombasa Branch</Link>
                                    <Link onClick={handleAbout} href="/branches/taveta" >Taveta Branch</Link>
                                    <Link onClick={handleAbout} href="/branches/kilifi" >Kilifi Branch</Link>
                                    <Link onClick={handleAbout} href="/branches/hola" >Hola Branch</Link>
                                    <Link onClick={handleAbout} href="/branches/voi" >Voi Branch</Link>
                                    <Link onClick={handleAbout} href="/branches/mpeketoni" >Mpeketoni Branch</Link>
                                </div>
                            </div>}
                    </div> */}
                    <Link href="/contact" className="hover:text-lightBlue">Contact Us</Link>
                </div>

                <div className="hidden md:flex md:space-x-2 md:items-center border rounded-md p-1">
                    <div className='text-2xl text-lightRed' ><MdLocalPhone /></div>
                    <div className='flex flex-col space-y-1'>
                        <p><span className='text-lightRed'>Need Help? </span>Call Us</p>
                        <p className='font-semibold text-xl'>+254721520641</p>
                    </div>
                </div>

                <button
                    onClick={() => { handleOpen(); handleHidden() }}
                    aria-label='Hamburger Menu'
                    className={`hamburger ${isOpen ? '' : 'open'} block md:hidden focus:outline-none hover:text-[#ec4949]`}
                >
                    <div>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </div>
                </button>
            </div>

            <div className="md:hidden">
                <div id="menu" className={`flex-col ${isHidden ? 'hidden' : 'flex'} absolute place-items-start self-end py-8 bg-white bg-opacity-95 sm:w-auto sm:self-center left-0 right-0 drop-shadow-md`}>
                    <div className="mr-auto flex flex-col space-y-6 pl-4">
                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/">Home</Link>
                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/services">Services</Link>
                        {/* <Link onClick={() => { handleOpen(); handleHidden() }} href="/about">About</Link> */}
                        {/* <div onClick={handleAbout} className="cursor-pointer">
                            <div className="flex items-center space-x-1">
                                <span>Branches</span>
                                <span>{isAboutClosed ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}</span>
                            </div>
                            {isAboutClosed ? '' :
                                <div className="z-50">
                                    <div className="relative shadow-md pt-2 flex flex-col space-y-4 [&>a]:border-b [&>a]:pb-2 hover:[&>a]:border-lightBlue">
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/branches/mombasa" >Mombasa Branch</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/branches/taveta" >Taveta Branch</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/branches/kilifi" >Kilifi Branch</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/branches/hola" >Hola Branch</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/branches/voi" >Voi Branch</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/branches/mpeketoni" >Mpeketoni Branch</Link>
                                    </div>
                                </div>
                            }
                        </div> */}
                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/contact">Contact Us</Link>

                        <div className="md:hidden flex space-x-1 items-center border rounded-md p-1">
                            <div className='text-xl text-lightRed' ><MdLocalPhone /></div>
                            <div className='flex flex-col space-y-[0.125rem] text-sm'>
                                <p><span className='text-lightRed'>Need Help? </span>Call Us</p>
                                <p className='font-semibold text-xl'>+254721520641</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
