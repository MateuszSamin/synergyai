import React from 'react'
import Image from 'next/image'

import LightingBolt from "../public/assets/LightingBolt.svg"
import QuestionMark from "../public/assets/QuestionMark.svg"

interface FunctionsItemProps {
    redBorder: boolean,
    text: string
}

export default function AnalisysSection() {
  return (
    <div className='bg-[#021934] py-24 flex flex-col items-center w-full'>
        <div className='lg:w-1/2 w-10/12'>
            <div className='font-sora flex flex-col gap-3 border-b-2 border-[#456187]'>
                <h4 className='text-[#01C38E]'>ANALYSIS FOR</h4>
                <div className='flex flex-row gap-2 justify-start items-center text-white lg:text-lg text-xs pb-5'>
                    <div className='md:block hidden'>
                        <Image src={LightingBolt} alt='bolt' />
                    </div>
                    <p>0x6131B5fae19EA4f9D964eAc0408E4408b66337b5</p>
                </div>
            </div>
            <div className='flex flex-row justify-between items-start gap-10 pt-10'>
                <div className='w-1/3'>
                    <h4 className='text-[#01C38E] pb-4 font-sora'>FUNCTIONS</h4>
                    <FunctionsItem redBorder={true} text={'Mint'} />
                    <FunctionsItem redBorder={true} text={'Ownership'} />
                    <FunctionsItem redBorder={false} text={'Change Tax'} />
                    <FunctionsItem redBorder={false} text={'Blacklist'} />
                    <FunctionsItem redBorder={false} text={'Whitelist'} />
                </div>
                <div className='font-sora w-2/3'>
                    <h4 className='text-[#01C38E] pb-4'>EXPLANATION</h4>
                    <p className='text-white'>
                        This smart contract defines a custom ERC20 token called "MyToken" (MTK) that inherits from three 
                        different contracts - ERC20, ERC20Burnable, and Ownable - all of which are imported from the OpenZeppelin library.
                        The ERC20 contract provides standard functionality for an ERC20 token, such as the ability to transfer 
                        tokens between addresses and to check balances. The ERC20Burnable contract adds the ability to burn
                        (i.e., destroy) tokens, while the Ownable contract provides functionality for ownership of the contract.
                    </p>
                </div>
            </div>
            <div>
                <h4 className='text-[#01C38E] pb-4 font-sora'>SMART CONTRACT</h4>
            </div>
        </div>
    </div>
  )
}


const FunctionsItem = ({redBorder, text}:FunctionsItemProps) =>{
    return(
        <div className={`w-full bg-[#041E40] ${redBorder? "border-2 border-[#DA3741]": ""} mt-2 py-3 rounded-xl text-white font-sora-light`}>
            <div className='flex flex-row justify-start items-center gap-2 ml-5'>
                <Image src={QuestionMark} alt='question mark' />
                <p>{text}</p>
            </div>
        </div>
    )
}