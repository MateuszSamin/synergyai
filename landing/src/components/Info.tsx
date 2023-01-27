import React from 'react'
import Container from './Container'
import Image from 'next/image'
import DotGalaxy from '../../public/DotGalaxy.png'
import Tech from '../../public/Showcase.png'
import { BiBriefcaseAlt } from 'react-icons/bi'
import GreenFlare from '../../public/greenFlare.png'

const Info = () => {

    return (
        <div className='w-full bg-background relative flex-col z-30 font-sora  '>
            <Image src={GreenFlare} alt='flare' className='absolute top-0 h-[90rem]'/>
            <Container className=' h-auto py-8  relative text-white  flex flex-col '>
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='space-y-6 flex-row' >
                        <p className='text-green tracking-widest text-sm text-center lg:text-left'>ZUPA DUPA</p>
                        <p className='text-white tracking-wide text-4xl  text-center lg:text-left'>We bring everything that{"'"}s  <br /> required to  <span className='text-green'>build apps</span></p>
                        <p className='text-white tracking-widest text-sm  text-center lg:text-left'>We specialize in creating visual identities for products and <br /> brands in your company</p>
                    </div>
                    <div className='w-full lg:w-[40rem] mx-auto lg:ml-auto relative lg:mt-0 hidden lg:block '>
                        <Image src={DotGalaxy} alt='galaxy' />
                        <p className='w-fit px-8 h-12 text-lg absolute bottom-20  bg-white text-black items-center flex rounded-3xl '>Be sincere</p>
                        <p className='w-fit px-8 h-12 text-lg absolute bottom-48 left-24 bg-white text-black items-center flex rounded-3xl'>Stronger Together</p>
                        <p className='w-fit px-8 h-12 text-lg absolute bottom-52 left-80 bg-white text-black items-center flex rounded-3xl'>Keep it simple</p>
                        <p className='w-fit px-8 h-12 text-lg absolute bottom-72 left-64 bg-white text-black items-center rounded-3xl flex '>Be sincere</p>
                        <p className='w-fit px-8 h-12 text-lg absolute bottom-16 left-64 bg-white text-black items-center flex rounded-3xl'>Take intelligent risks</p>
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center mt-16 lg:mt-0'>
                    <Image src={Tech} alt='tech' className='w-[20rem] 2xl:w-[30rem] mt-10  lg:mt-0 lg:mr-auto relative ' />

                    <div className='space-y-6  flex flex-col' >
                        <p className='text-white tracking-wide text-4xl  text-center lg:text-left'>So how are we   <span className='text-green'>going to do <br /> all of this?</span></p>
                        <div className='grid grid-cols-1 md:grid-cols-2   gap-8 lg:grid-cols-2  w-full lg:w-[35rem] justify-center 2xl:w-[40rem] lg:gap-4 2xl:gap-6'>
                            <div className='w-[15rem] mx-auto lg:mx-0 lg:mr-auto'>
                                <div className='flex flex-row items-center lg:justify-start justify-center space-x-2 ' >
                                    <BiBriefcaseAlt size={25} /> <p>Set up Wallet</p>
                                </div>
                                <p className='lg:w-2/3 mt-2 justify-center text-center lg:text-left'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. s.
                                </p>
                            </div>
                            <div className='w-[15rem]  mx-auto lg:mx-0 lg:mr-auto'>
                                <div className='flex flex-row justify-center lg:justify-start nitems-center space-x-2 ' >
                                    <BiBriefcaseAlt size={25} /> <p>Set up Wallet</p>
                                </div>
                                <p className='lg:w-2/3 mt-2 justify-center text-center lg:text-left'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,  voluptates.
                                </p>
                            </div>
                            <div className='w-[15rem]  mx-auto lg:mx-0 lg:mr-auto'>
                                <div className='flex flex-row justify-center lg:justify-start items-center space-x-2 ' >
                                    <BiBriefcaseAlt size={25} /> <p>Set up Wallet</p>
                                </div>
                                <p className='lg:w-2/3 mt-2 justify-center text-center lg:text-left'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,  voluptates.
                                </p>
                            </div>
                            <div className='w-[15rem]  mx-auto lg:mx-0 lg:mr-aut'>
                                <div className='flex flex-row justify-center lg:justify-start items-center space-x-2 ' >
                                    <BiBriefcaseAlt size={25} /> <p>Set up Wallet</p>
                                </div>
                                <p className='lg:w-2/3 mt-2 text-center lg:text-left'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,  voluptates.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
          
            </Container>
        </div>
    )
}

export default Info