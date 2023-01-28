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
		<div className='relative z-20 pt-64 sm:pt-0'>
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
						className='hideScroll z-40 max-w-[100%]'>
						<div className='py-4 flex flex-row flex-nowrap space-x-8 z-40'>
							{milestones.map((subArray, j) => {
								return (
									<Milestone
										milestoneTasks={milestones[j]}
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

let milestones = [
	[
		
		{
			name: 'Project conceptualization',
			done: true,
		},
		{
			name: 'Team assembly',
			done: true,
		},
		{
			name: 'Tokenization and funding plan',
			done: true,
		},
	],
	[
		{
			name: 'Landing page creation',
			done: true,
		},
		{
			name: 'Advisors and Partners assembly',
			done: true,
		},

		{
			name: 'Launch of token',
			done: false,
		},
		{
			name: 'Seed Round',
			done: false,
		},
		,
	],
	[
		{
			name: 'Social media launch',
			done: false,
		},
		{
			name: 'Desiging the look and feel of the platform',
			done: false,
		},
		{
			name: 'Designing gamification processes',
			done: false,
		},

		{
			name: 'Gathering feedback from organic community',
			done: false,
		},
	],
	[
		{
			name: 'Synergy TOOLS launch',
			done: false,
		},
		{
			name: 'Synergy SAFU launch',
			done: false,
		},
		{
			name: 'Synergy REAL YIELD launch',
			done: false,
		},
		{
			name: 'Broad marketing campaign',
			done: false,
		},
		{
			name: 'Q&A and feedback session with the core team',
			done: false,
		},
	],
	[
		{
			name: 'Updating the platform accordingly to community feedback round',
			done: false,
		},
		{
			name: 'Synergy MEME GEN launch',
			done: false,
		},
		{
			name: 'Synergy FRONTRUNNER launch',
			done: false,
		},
		{
			name: 'Synergy AUDIT launch',
			done: false,
		},
	],
]

export default Roadmap
