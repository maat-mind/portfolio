import { useEffect, useState } from 'react'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import Typewriter from './Typewriter'

export default function Header() {
	const [time, setTime] = useState('')

	useEffect(() => {
		const myInterval = setInterval(() => {
			setTime(new Date().toLocaleTimeString('en-GB'))
		}, 1000)

		return () => {
			clearInterval(myInterval)
		}
	}, [])

	const user = 'maat-mind/portfolio'

	return (
		<header className='flex items-center justify-end my-8  md:w-full'>
			<div className='w-1/3'>
				<span className='flex'>
					<p className='text-gray-600 text-3xl mx-2'>[{time}]</p>
					<p className='text-3xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
						{time && <Typewriter srcString={user} />}
					</p>
					<span className='animate-pulse mx-2 text-3xl'>_</span>
				</span>
			</div>
			<div className='flex w-2/3'>
				<section className='w-5/6'>
					<ul className='flex justify-evenly text-2xl mx-4 text-gray-400'>
						<li className='mx-2 hover:text-gray-100 cursor-pointer'>
							<a href='#'>Home </a>
						</li>
						<li className='mx-2 hover:text-gray-100 cursor-pointer'>
							<a href='#about'>About</a>
						</li>
						<li className='mx-2 hover:text-gray-100 cursor-pointer'>
							<a href='#tech-stack'>Tech Stack</a>
						</li>
						<li className='mx-2 hover:text-gray-100 cursor-pointer'>
							<a href='#projects'>Projects</a>
						</li>
						<li className='mx-2 hover:text-gray-100 cursor-pointer'>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
				</section>
				<section className='w-1/6'>
					<ul className='flex justify-center'>
						<li className='mx-4'>
							<a href='https://github.com/maat-mind' target='_blank'>
								<img
									className='hover:opacity-[0.8]'
									src={githubIcon}
									alt='github logo icon'
								/>
							</a>
						</li>
						<li className='mx-4'>
							<a href='https://linkedin.com/in/maat-mind' target='_blank'>
								<img
									className='hover:opacity-[0.8]'
									src={linkedinIcon}
									alt='github logo icon'
								/>
							</a>
						</li>
					</ul>
				</section>
			</div>
		</header>
	)
}
