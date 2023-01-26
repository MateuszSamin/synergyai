import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/Logo.png'
import { BsPlus } from 'react-icons/bs'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'



const Navbar = (props: any) => {

    const links = [
        { subpage: "Product", link: "/" },
        { subpage: "Team", link: "/" },
        { subpage: "Doc.", link: "/" },
        { subpage: "Contact", link: "/" }
    ]

    return (
        <div className='w-full'>
            <Container className='justify-between bg-background lg:h-32 py-4 space-y-6 lg:space-y-0 text-white items-center flex flex-col lg:flex-row'>
                <Image src={Logo} alt='logo' className='w-[15rem]' />
                <div className='flex flex-row mx-auto space-x-8 text-sm'>
                    {links.map((index) =>
                        <Link href={index.link} >
                            {index.subpage}
                        </Link>
                    )}
                </div>
                <div className='flex flex-row items-center w-[15rem]  space-x-5'>
                    <a href="https://google.com" target="_blank">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="https://google.com" target="_blank">
                        <FaTwitter size={20} />
                    </a>
                    <div className="h-12 w-[10rem] cursor-pointer rounded-3xl bg-gradient-to-bl from-green  to-blue p-[2px]">
                        <div className="flex h-full w-full mx-auto items-center justify-center rounded-3xl bg-background back">
                            <p className="text-sm text-white">Launch App</p>
                            <BsPlus size={30} className='ml-2' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar