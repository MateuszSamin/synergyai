import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Flare from '../../public/flare.png'
import BgLogo from '../../public/bgLogo.png'
import Dots1 from '../../public/dots/1.png'
import Dots2 from '../../public/dots/2.png'

export default function Home() {
	return (
		<>
			<Head>
				<title>SynergyAI</title>
				<meta
					name='description'
					content='Never get rugged again. The AI toolkit for DeFi.'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<main className='bg-background font-sora overflow-hidden w-full h-screen flex flex-col justify-center items-center text-white gap-1'>
				<Image
					draggable={false}
					className='z-10 absolute w-11/12 md:w-8/12'
					src={BgLogo}
					alt={'bglogo'}
				/>
				<Image
					draggable={false}
					className='z-10 mix-blend-color-dodge absolute w-full top-0 left-0'
					src={Flare}
					alt={'flare'}
				/>
				<Image className='absolute w-24 -ml-[60vw] md:-ml-[35rem] mt-32 z-10' src={Dots1} alt='dots' />
				<Image className='absolute w-24 ml-[60vw] md:ml-[30rem] -mt-[22rem]' src={Dots2} alt='dots' />
				<h1 className='relative z-20 text-5xl md:text-7xl font-semibold text-center'>
					Never get <br />{' '}
					<span className='text-light-green'>rugged</span> again.
				</h1>
				<p className='relative z-20 w-8/12 md:w-1/2 text-center mt-8 leading-loose text-paragraph'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consectetur nam, aliquid voluptatum sint praesentium
					architecto delectus!
				</p>
				<div className='px-4 flex gap-6 md:gap-10 relative z-20 mt-8'>
					<button className='text-base md:text-lg text-black rounded-full px-10 py-4 border-[1px] border-light-green bg-gradient-to-br from-white via-white to-light-green'>
						Whitepaper
					</button>
					<button className='text-base md:text-lg text-white rounded-full px-10 py-4 border-[1px] border-light-green backdrop-blur-sm bg-white/10'>
						Play Video
					</button>
				</div>
			</main>
		</>
	)
}
