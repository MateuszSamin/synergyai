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
				<FaqItem question='KUPA DUPA' answer='askdaskljd' />
				<FaqItem question='KUPA DUPA' answer='askdaskljd' />
				<FaqItem question='KUPA DUPA' answer='askdaskljd' />
				<FaqItem question='KUPA DUPA' answer='askdaskljd' />
				<FaqItem question='KUPA DUPA' answer='askdaskljd' />
				<FaqItem question='KUPA DUPA' answer='askdaskljd' />
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
						} transition duration-300`}
						size={32}
					/>
					<p className='ml-8'>{question}</p>
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
					className='font-sora text-paragraph ml-16'>
					{answer}
				</Disclosure.Panel>
			</Transition>
			<hr className='bg-[#C2CBDC] opacity-10 h-[1px] w-full border-0 mt-6' />
		</Disclosure>
	)
}

export default Faq
