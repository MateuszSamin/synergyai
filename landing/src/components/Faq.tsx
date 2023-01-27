import React, { useState } from 'react'
import Container from './Container'
import Logo from '../../public/bgLogo.png'
import Image from 'next/image'
import { Disclosure, Transition } from '@headlessui/react'
import { FiArrowUpCircle } from 'react-icons/fi'

const Faq = () => {
	return (
		<div className='bg-background text-white font-sora'>
			<Image
				className='absolute z-10 right-0 w-5/12 transform -scale-x-[1]'
				src={Logo}
				alt='logo'
				draggable={false}
			/>
			<Container>
				<label className='text-dark-green tracking-widest'>FAQ</label>
				<h1 className='mt-6 text-5xl font-semibold mb-10'>
					Do you have any questions?
				</h1>
				<FaqItem question='When will the platform be available?' answer='We are planning to ship alpha version of the platform in Q4 2023.' />
				<FaqItem question='Does the team have expercience in blockchain / AI?' answer='All members of the team have past experience in blockchain. The management has previosly founded a blockchain software development company. They also have expertise in AI, as they also have work experience in this field.' />
				<FaqItem question='Can I join you?' answer={`We're always happy to work with talented people. Contact us at contact@synergyai.io and let's talk!`} />
				<FaqItem question='Can I invest?' answer={`We are currently during our seed fundraising round. Contact us at contact@synergyai.io to learn about the $SYNAI token.`} />
				<FaqItem question='What blockchain are you using?' answer='We are working with the Ethereum blockchain, but choose to remain blockchain agnostic. We will later expand our platform to support other blockchains.' />
				<FaqItem question='How can I contact you?' answer='Email us at contact@synergyai.io or text CEO directly on Telegram @karolproksa.' />
			</Container>
		</div>
	)
}

interface FaqItemProps {
	question: string
	answer: string
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
	const [open, setOpen] = useState(false)

	return (
		<Disclosure>
			<Disclosure.Button
				onClick={() => setOpen((old) => !old)}
				className='py-2 font-sora relative z-20 mt-6'>
				<div className='flex items-center'>
					<FiArrowUpCircle
						className={`${
							open ? '' : 'rotate-180'
						} transition duration-300 ease-in-out w-10 h-10 shrink-0`}
						size={32}
					/>
					<p className='ml-8 text-left'>{question}</p>
				</div>
			</Disclosure.Button>
			<Transition
				enter='transition duration-100 ease-out'
				enterFrom='transform scale-95 opacity-0'
				enterTo='transform scale-100 opacity-100'
				leave='transition duration-75 ease-out'
				leaveFrom='transform scale-100 opacity-100'
				leaveTo='transform scale-95 opacity-0'>
				<Disclosure.Panel
					static
					className='font-sora text-paragraph ml-16 text-left'>
					{answer}
				</Disclosure.Panel>
			</Transition>
			<hr className='bg-[#C2CBDC] opacity-10 h-[1px] w-full border-0 mt-6' />
		</Disclosure>
	)
}

export default Faq
