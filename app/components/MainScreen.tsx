import React from 'react'
import Image, { StaticImageData } from 'next/image'

import Logo from "../public/assets/Logo 1.png"

import OpenEye from "../public/assets/IconEyeOpen.png"
import LightingBolt from "../public/assets/LightingBolt.png"
import CrossCircled from "../public/assets/CrossCircled.png"
import DoubleArrow from "../public/assets/DoubleArrow.png"

interface MainScreenItemProps {
    icon: StaticImageData
    title: string
    text1: string
    text2: string
    text3: string
}

export default function MainScreen() {
  return (
    <div className='bg-[#021934] md:min-h-screen lg:py-0 py-10 flex flex-col justify-center md:justify-start items-center gap-10'>
        <div className='lg:w-1/5 w-1/2 flex pt-10 justify-center items-center'>
           <Image src={Logo} alt="logo" /> 
        </div>
        <div className='lg:w-7/12 w-11/12 flex md:flex-row flex-col justify-center lg:items-start gap-10'>
            <MainScreenItem
                icon={OpenEye}
                title={'Welcome'} 
                text1={'Synergy is an AI-powered smart contract scanner for Ethereum'} 
                text2={'Our mission is to make rug pulls impossible because of our contract analyzer'} 
                text3={'Just paste a contract address below and see the magic happen ✨'} 
            />
            <MainScreenItem
                icon={LightingBolt}
                title={'Features'} 
                text1={'Scans the compiled bytecode of the smart contract'} 
                text2={'Analyzes uncompiled EVM-compliant code'} 
                text3={'Explains smart contract code for humans'} 
            />
            <MainScreenItem
                icon={CrossCircled}
                title={'Limitations'} 
                text1={'May provide untrue infromation'} 
                text2={'May be inaccurate'} 
                text3={'May rebel against humanity'} 
            />
        </div>
        <div className='pt-10 pb-20 lg:w-7/12 w-11/12'>
            <div className='border-2 border-[#80E1EE] rounded-xl flex justify-center items-center bg-[#041E40]'>
                <input type="text" className='md:w-11/12 w-10/12 bg-[#041E40] py-5 outline-none text-[#456187] text-lg' placeholder='It starts with 0x...' />
                <button className='px-2'>
                    <Image src={DoubleArrow} alt="send" />
                </button>
            </div>
        </div>
    </div>
  )
}

const MainScreenItem = ({icon, title, text1, text2, text3}:MainScreenItemProps) =>{
    return(
        <div className='flex flex-col justify-center items-center md:w-1/3 gap-5'>
            <div className='flex flex-col justify-center items-center w-full h-20'>
                <Image src={icon} alt="open eye" />
                <h3 className='text-xl text-white'>{title}</h3>
            </div>
            <div className='bg-[#041E40] text-white p-5 rounded-xl flex justify-center items-center text-center w-full h-28'>
                {text1}
            </div>
            <div className='bg-[#041E40] text-white p-5 rounded-xl flex justify-center items-center text-center w-full h-28'>
                {text2}
            </div>
            <div className='bg-[#041E40] text-white p-5 rounded-xl flex justify-center items-center text-center w-full h-28'>
                {text3}
            </div>
        </div>
    )
}
