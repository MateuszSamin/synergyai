import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/Logo.png'
import { BsPlus } from 'react-icons/bs'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Milestone from './Milestone'
import ScrollContainer from 'react-indiana-drag-scroll'

const Roadmap = () => {
  return (
    <div className='relative z-20 h-[50rem]'>
      <Container className='h-auto py-8 text-white flex flex-col '>
        <p className='text-green tracking-widest font-sora'>ROADMAP</p>
        <div className='flex lg:flex-row mt-4 w-full z-40 relative  flex-col '>
          <p className='text-white tracking-wide text-4xl z-10 font-semibold'>
            So, how are we{' '}
            <span className='text-green'>
              going to do all of this?
            </span>
          </p>
          <div className='flex flex-row lg:ml-auto'>
            <hr className='border-t-2 w-[5rem] rounded-3xl border-green mt-4 mr-4' />
            <hr className='mr-4 border-t-2 w-[2rem] rounded-3xl border-gray-500 mt-4' />
            <hr className='mr-4 border-t-2 w-[2rem] rounded-3xl border-gray-500 mt-4' />
            <hr className='mr-24 border-t-2 w-[2rem] rounded-3xl border-gray-500 mt-4' />
          </div>
        </div>
        <div>
          <ScrollContainer
            hideScrollbars={false}
            className='hideScroll  z-40 max-w-[100%]'>
            <div className='py-4 flex flex-row flex-nowrap space-x-8 z-40'>
              {milestones.map((subArray, j) => {
                return (
                  <Milestone
                    milestoneTasks={milestones[j]}
                    milestoneTitle={milestoneTitles[j]}
                    index={j + 1}
                    key={j}
                  />
                )
              })}
            </div>
          </ScrollContainer>
        </div>
      </Container>
    </div>
  )
}
let milestoneTitles = [
  'FUNDAMENTALS', 'FUNDRAISING', 'CUSTOMER-FACING PLATFORM', 'INITIAL DEVELOPMENT', 'BIG LAUNCH', 'GLOBAL OUTREACH', 'BUSINESS-FACING PLATFORM'
]

let milestones = [
  [

    {
      name: 'Vision',
      done: true,
    },
    {
      name: 'Team Assembly',
      done: true,
    },
    {
      name: 'Tokenomics',
      done: true,
    },
    {
      name: 'Website Design',
      done: true,
    },
    {
      name: 'Website Development',
      done: true,
    },
  ],
  [
    {
      name: '$SYNAI Smart Contract',
      done: false,
    },
    {
      name: 'Pitch Deck',
      done: false,
    },
    {
      name: 'Seed Fundraising',
      done: false,
    },
    {
      name: 'Building Social Media Outlets',
      done: false,
    },
    {
      name: 'Private Fundraising',
      done: false,
    },
    ,
  ],
  [
    {
      name: 'UX Mapping',
      done: false,
    },
    {
      name: 'UI Design',
      done: false,
    },
    {
      name: 'DeFi Explorer Capabilities',
      done: false,
    },
    {
      name: 'Synergy TOOLS Development',
      done: false,
    },
    {
      name: 'Synergy SAFU Development',
      done: false,
    },
    {
      name: 'Creating Marketing Plan',
      done: false,
    },
    {
      name: 'Customer Outreach',
      done: false,
    },
    {
      name: 'Start of Marketing Campaign',
      done: false,
    },
    {
      name: 'Synergy REAL YIELD Development',
      done: false,
    },
  ],
  [
    {
      name: 'Release of V1 Platform',
      done: false,
    },
    {
      name: 'DEX Listing',
      done: false,
    },
    {
      name: 'UX Analysis',
      done: false,
    },
    {
      name: 'Customer Behavior Adjustments',
      done: false,
    },
  ],
  [
    {
      name: 'Release of V1 Platform',
      done: false,
    },
    {
      name: 'DEX Listing',
      done: false,
    },
    {
      name: 'UX Analysis',
      done: false,
    },
    {
      name: 'Customer Behavior Adjustments',
      done: false,
    },
  ],
  [
    {
      name: 'Marketing Partnerships',
      done: false,
    },
    {
      name: 'Generating Recurring Revenue',
      done: false,
    },
    {
      name: 'Blockchain Event Sponsorships',
      done: false,
    },
    {
      name: 'Adjusting for Customer Feedback',
      done: false,
    },
  ],
  [
    {
      name: 'Release of API',
      done: false,
    },
    {
      name: 'Synergy AUDIT Development',
      done: false,
    },
    {
      name: 'Synergy MEME GEN Development',
      done: false,
    },
    {
      name: 'Synergy FRONTRUNNER Development',
      done: false,
    },
    {
      name: 'Prospecting',
      done: false,
    },
  ],
]

export default Roadmap
