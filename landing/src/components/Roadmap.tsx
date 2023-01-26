import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/Logo.png'
import { BsPlus } from 'react-icons/bs'
import { FaLinkedinIn, FaTwitter } from 'react-icons/Fa'
import Milestone from './Milestone'
import ScrollContainer from 'react-indiana-drag-scroll'

const Roadmap = () => {





  return (
    <div className='w-full'>
      <Container className=' bg-background h-auto py-8  text-white  flex flex-col '>
        <p className='text-green tracking-widest'>ROADMAP</p>
        <div className='flex lg:flex-row mt-4 w-full  flex-col '>
          <p className='text-white tracking-wide text-4xl '>So, how are we <span className='text-green'>going to do all of this?</span></p>
          <div className='flex flex-row lg:ml-auto'>
            <hr className=' border-t-2 w-[5rem] rounded-3xl border-green mt-4 mr-4' />
            <hr className='mr-4 border-t-2 w-[2rem] rounded-3xl border-gray-500 mt-4' />
            <hr className='mr-4 border-t-2 w-[2rem] rounded-3xl border-gray-500 mt-4' />
            <hr className='mr-24 border-t-2 w-[2rem] rounded-3xl border-gray-500 mt-4' />
          </div>
        </div>
        <div className='overflow-x-scroll'>
          <ScrollContainer>
            <div className='w-[130rem] scrollBar  py-4 flex flex-row space-x-8'>
              {milestones.map((subArray, j) => {
                return (
                  <Milestone milestoneTasks={milestones[j]} index={j + 1} />)
              }
              )}
            </div>
          </ScrollContainer>
        </div>
      </Container>
    </div>
  )
}


let milestones = [

  [
    {
      name: "Task number 12",
      done: true,
    },
    {
      name: "Task number 12",
      done: true,
    },
    {
      name: "Doing homework",
      done: false,
    },
  ],
  [
    {
      name: "Task number 223",
      done: true,
    },
    {
      name: "Doing hask23r",
      done: false,
    },
    {
      name: "Task numb3rer 4",
      done: true,
    },
    {
      name: "Task num2ber 4",
      done: true,
    },
    ,],
  [
    {
      name: "Task number 3",
      done: true,
    },
    {
      name: "Doing homework",
      done: false,
    },
  ],
  [
    {
      name: "Task num34ber 4",
      done: true,
    },
    {
      name: "Doing hom2ework",
      done: false,
    },
  ],
  [
    {
      name: "Task nu234mber 4",
      done: true,
    },
    {
      name: "Doinafg homework",
      done: false,
    },
  ],
]




export default Roadmap