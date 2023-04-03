import React, { useState } from 'react'
import Image from 'next/image'
import SyntaxHighlighter from 'react-syntax-highlighter';

import LightingBolt from "../public/assets/LightingBolt.svg"
import QuestionMark from "../public/assets/QuestionMark.svg"
import Line from "../public/assets/Line3.svg"
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface FunctionsItemProps {
    redBorder: boolean,
    text: string
}

export default function AnalisysSection() {

      const [visibility, setVisibility] = useState(false)
      const [visibility2, setVisibility2] = useState(false)

      const codeStringPragma = `pragma solidity ^0.8.0;`;

      const codeStringInterface = `
        interface IERC20 {
        function totalSupply() external view returns (uint256);
        function balanceOf(address account) external view returns (uint256);
        function allowance(address owner, address spender) external view returns (uint256);
        function transfer(address recipient, uint256 amount) external returns (bool);
        function approve(address spender, uint256 amount) external returns (bool);
        function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
        event Transfer(address indexed from, address indexed to, uint256 value);
        event Approval(address indexed owner, address indexed spender, uint256 value);
        }`;

        const codeStringContract = `
        contract ERC20Basic is IERC20 {
        string public constant name = "ERC20Basic";
        string public constant symbol = "ERC";
        uint8 public constant decimals = 18;
        mapping(address => uint256) balances;
        mapping(address => mapping (address => uint256)) allowed;
        uint256 totalSupply_ = 10 ether;`;

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
            <div className='flex md:flex-row flex-col justify-between items-start gap-10 pt-10'>
                <div className='md:w-1/3 w-10/12'>
                    <h4 className='text-[#01C38E] pb-4 font-sora'>FUNCTIONS</h4>
                    <FunctionsItem redBorder={true} text={'Mint'} />
                    <FunctionsItem redBorder={true} text={'Ownership'} />
                    <FunctionsItem redBorder={false} text={'Change Tax'} />
                    <FunctionsItem redBorder={false} text={'Blacklist'} />
                    <FunctionsItem redBorder={false} text={'Whitelist'} />
                </div>
                <div className='font-sora md:w-2/3 w-10/12'>
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
            <div className='pt-10'>
                <h4 className='text-[#01C38E] pb-4 font-sora'>SMART CONTRACT</h4>
                <div className='rounded-2xl bg-[#061526] p-5 mb-5'>
                    <SyntaxHighlighter language="solidity" style={nightOwl}>
                        {codeStringPragma}
                    </SyntaxHighlighter>
                </div>
                <div className='rounded-2xl bg-[#061526] p-5 mb-5 flex flex-row items-center' onMouseEnter={() => setVisibility(true)} onMouseLeave={() => setVisibility(false)}>
                    <SyntaxHighlighter language="solidity" style={nightOwl}>
                        {codeStringInterface}
                    </SyntaxHighlighter>
                    <div className={`text-white ${visibility? "flex flex-col w-1/4  absolute right-0 bg-inherit": "hidden"}`}>
                        <Image src={Line} />
                        <div className='flex flex-row items-end gap-1 px-5 pt-5 pb-2'>
                            <h5 className='font-sora'>Secure</h5>
                            <p className='text-[#01C38E] font-sora-light text-xs'>99.02% Certainty</p>
                        </div>
                        <p className='font-sora px-5 text-sm pb-10'>
                            This part of the smart contract is the ERC20 interface. Nothing malicious here.
                        </p>
                        <Image src={Line} />
                    </div>
                </div>
                <div className='rounded-2xl bg-[#061526] p-5 mb-5 flex flex-row items-center' onMouseEnter={() => setVisibility2(true)} onMouseLeave={() => setVisibility2(false)}>
                    <SyntaxHighlighter language="solidity" style={nightOwl}>
                        {codeStringContract}
                    </SyntaxHighlighter>
                    <div className={`text-white ${visibility2? "flex flex-col w-1/4  absolute right-0 bg-inherit": "hidden"}`}>
                        <Image src={Line} />
                        <div className='flex flex-row items-end gap-1 px-5 pt-5 pb-2'>
                            <h5 className='font-sora'>Secure</h5>
                            <p className='text-[#01C38E] font-sora-light text-xs'>99.02% Certainty</p>
                        </div>
                        <p className='font-sora px-5 text-sm pb-10'>
                            This part of the smart contract is the ERC20 interface. Nothing malicious here.
                        </p>
                        <Image src={Line} />
                    </div>
                </div>
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

{/*const CodeBlock = ({ code, language }) => {
    useEffect(() => {
      Prism.highlightAll();
    }, []);
    return (
      <pre>
        <code children={code} className={`language-${language}`} />
      </pre>
    );
  };*/}
