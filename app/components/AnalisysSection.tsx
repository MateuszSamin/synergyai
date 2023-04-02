import React from 'react'
import Image from 'next/image'

import LightingBolt from "../public/assets/LightingBolt.svg"

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
            <div className='flex flex-row justify-between items-center gap-10'>
                <div>
                    <h4 className='text-[#01C38E] pb-4'>FUNCTIONS</h4>
                </div>
                <div className='font-sora'>
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
        </div>
    </div>
  )
}
