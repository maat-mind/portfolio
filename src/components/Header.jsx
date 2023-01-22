import { useEffect, useState } from 'react'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/mail.svg'
import Typewriter from './Typewriter'
import './styles.css'

export default function Header() {
	/* 	return (
		<nav className='container flex items-center justify-around px-4 py-8 mx-auto'>
			<div className='w-1/3'>
				<a className='text-4xl'>Oscar </a>
				<a className='text-4xl font-bold'>Bernal</a>
			</div>
			<div className='w-1/3 hidden justify-start space-x-12 lg:flex'>
				<a href='#'>About</a>
				<a href='#'>Tech Stack</a>
				<a href='#'>Projects</a>
				<a href='#'>Contact</a>
			</div>
			<div className='w-1/3 hidden space-x-12 lg:flex justify-center'>
				<a
					className='flex items-center'
					href='https://github.com/maat-mind'
					target='_blank'
				>
					<img
						className='w-7 hover:opacity-[0.8] mx-6'
						src={githubIcon}
						alt='github logo icon'
					/>
					GitHub
				</a>
				<a
					className='flex items-center'
					href='https://linkedin.com/in/maat-mind'
					target='_blank'
				>
					<img
						className='w-7 hover:opacity-[0.8] mx-6'
						src={linkedinIcon}
						alt='github logo icon'
					/>
					LinkedIn
				</a>
				<a href='#'>
					<img
						className='w-7 hover:opacity-[0.8]'
						src={mailIcon}
						alt='email icon'
					/>
				</a>
			</div>
			<div className='flex lg:hidden'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='w-6 h-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</div>
		</nav>
	) */

	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<header className='flex items-center justify-between border-b border-gray-400 py-8 px-8 md:px-2'>
			<div className='w-1/3'>
				<a className='text-4xl'>Oscar </a>
				<a className='text-4xl font-bold'>Bernal</a>
			</div>
			<nav className='w-1/3'>
				<section className='MOBILE-MENU flex xl:hidden justify-end'>
					<div
						className='HAMBURGER-ICON space-y-2'
						onClick={() => setIsNavOpen((prev) => !prev)}
					>
						<span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
						<span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
						<span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
					</div>

					<div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
						<div
							className='absolute top-0 right-0 px-8 py-8'
							onClick={() => setIsNavOpen(false)}
						>
							<svg
								className='h-8 w-8 text-gray-600'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<line x1='18' y1='6' x2='6' y2='18' />
								<line x1='6' y1='6' x2='18' y2='18' />
							</svg>
						</div>

						<ul className='flex flex-col items-center justify-between min-h-[250px]'>
							<li className='border-b border-gray-400 my-8 uppercase'>
								<a href='/about'>About</a>
							</li>
							<li className='border-b border-gray-400 my-8 uppercase'>
								<a href='/portfolio'>Tech Stack</a>
							</li>
							<li className='border-b border-gray-400 my-8 uppercase'>
								<a href='/contact'>Project</a>
							</li>
							<li className='border-b border-gray-400 my-8 uppercase'>
								<a href='/contact'>Contact</a>
							</li>
							<li className='border-b border-gray-400 my-8 uppercase'>
								<a href='https://github.com/maat-mind' target='_blank'>
									GitHub
								</a>
							</li>
							<li className='border-b border-gray-400 my-8 uppercase'>
								<a href='https://linkedin.com/in/maat-mind' target='_blank'>
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
				</section>

				<div className='hidden justify-start items-center space-x-14 xl:flex'>
					<a href='#'>About</a>
					<a href='#'>Tech Stack</a>
					<a href='#'>Projects</a>
					<a href='#'>Contact</a>
				</div>
			</nav>

			<section className='w-1/3 hidden space-x-12 xl:flex justify-center'>
				<a
					className='flex items-center'
					href='https://github.com/maat-mind'
					target='_blank'
				>
					<img
						className='w-7 hover:opacity-[0.8]'
						src={githubIcon}
						alt='github logo icon'
					/>
					<h3 className='hidden 2xl:inline 2xl:mx-6'>GitHub</h3>
				</a>
				<a
					className='flex items-center'
					href='https://linkedin.com/in/maat-mind'
					target='_blank'
				>
					<img
						className='w-7 hover:opacity-[0.8]'
						src={linkedinIcon}
						alt='github logo icon'
					/>
					<h3 className='hidden 2xl:inline 2xl:mx-6'>LinkedIn</h3>
				</a>
				<a href='#'>
					<img
						className='w-7 hover:opacity-[0.8]'
						src={mailIcon}
						alt='email icon'
					/>
				</a>
			</section>
		</header>
	)
}

/* export default function Header() {
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
} */
