import { useEffect, useState } from 'react'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/mail.svg'
import Typewriter from './Typewriter'
import './styles.css'

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false)

	function handleClickLink() {
		setIsNavOpen(false)
	}

	return (
		<header className='flex items-center justify-between border-b border-gray-400 py-8 px-8 md:px-2'>
			<div className='w-1/3'>
				<a className='text-4xl'>Oscar </a>
				<a className='text-4xl font-bold'>Bernal</a>
			</div>

			<nav className='w-1/3'>
				{/* MOBILE-MENU */}
				<div className='flex xl:hidden justify-end'>
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
							onClick={handleClickLink}
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
								<a onClick={handleClickLink} href='#about'>
									About
								</a>
							</li>
							<li className='border-b border-gray-400 my-8 uppercase'>
								<a onClick={handleClickLink} href='#tech-stack'>
									Tech Stack
								</a>
							</li>
							<li className='border-b border-gray-400 my-8 uppercase'>
								<a onClick={handleClickLink} href='#projects'>
									Project
								</a>
							</li>
							<li className='border-b border-gray-400 my-8 uppercase'>
								<a onClick={handleClickLink} href='#contact'>
									Contact
								</a>
							</li>
							<li className='border-b border-gray-400 my-8 uppercase'>
								<a
									onClick={handleClickLink}
									href='https://github.com/maat-mind'
									target='_blank'
								>
									GitHub
								</a>
							</li>
							<li className='border-b border-gray-400 my-8 uppercase'>
								<a
									onClick={handleClickLink}
									href='https://linkedin.com/in/maat-mind'
									target='_blank'
								>
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
				</div>
				{/* DESKTOP-MENU */}
				<div className='hidden justify-start items-center space-x-14 xl:flex'>
					<a className='header-item' href='#about'>
						About
					</a>
					<a className='header-item' href='#tech-stack'>
						Tech Stack
					</a>
					<a className='header-item' href='#projects'>
						Projects
					</a>
					<a className='header-item' href='#contact'>
						Contact
					</a>
				</div>
			</nav>

			<div className='w-1/3 hidden space-x-12 xl:flex justify-center'>
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
					<h3 className='hidden 2xl:inline 2xl:mx-6 header-item'>GitHub</h3>
				</a>
				<a
					className='flex items-center'
					href='https://linkedin.com/in/maat-mind'
					target='_blank'
				>
					<img
						className='w-7 hover:opacity-[0.8]'
						src={linkedinIcon}
						alt='linkedIn logo icon'
					/>
					<h3 className='hidden 2xl:inline 2xl:mx-6 header-item'>LinkedIn</h3>
				</a>
				<a href='#'>
					<img
						className='w-7 hover:opacity-[0.8]'
						src={mailIcon}
						alt='email icon'
					/>
				</a>
			</div>
		</header>
	)
}
