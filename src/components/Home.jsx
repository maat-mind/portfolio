import { Suspense } from 'react'
import Header from './Header.jsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import linkedinIcon from '../assets/linkedin.svg'
import Box from './three/Box'
import Timeline from './Timeline.jsx'

export default function Home() {
	return (
		<>
			<Header />
			<main className='flex flex-col xl:flex-row items-center mt-14 p-4'>
				<div className=' xl:w-3/5'>
					<div
						className='flex flex-col w-5/6 lg:w-3/4 m-auto p-0 p-6
					px-0 pb-8 md:px-14 gap-y-6'
					>
						<p className='flex items-center text-3xl font-bold'>
							<button className='rounded-full bg-yellow-400 dark:bg-yellow-400 w-20 h-10 text-end px-2 py-1 font-bold text-2xl font-sans mx-4 drop-shadow-lg'>
								JS
							</button>
							<a>fullstack developer</a>
						</p>
						<h3 className='text-5xl text-center md:text-left font-bold'>
							I design and <br />
							code for the web
						</h3>
						<p className='text-xl'>
							I have a solid understanding of modern JavaScript technologies
							such as React, Node.js and Express. My experience includes
							developing applications with microservices architecture, which
							allows me to create scalable and adaptable solutions to business
							needs.
						</p>
					</div>
				</div>
				<div className='w-full xl:w-2/5'>
					<Canvas className='transform-gpu' style={{ height: '500px' }}>
						<OrbitControls enableZoom={false} />
						<ambientLight intensity={0.5} />
						<directionalLight position={[-2, 5, 2]} intensity={1} />
						<Suspense fallback={null}>
							<Box />
						</Suspense>
					</Canvas>
				</div>
			</main>
			<section id='about' className='mt-16'>
				<h2 className='text-3xl text-center font-bold'>About</h2>
				<p className='text-xl text-gray-400 text-center mt-2'>
					Professional experience and education
				</p>
				<hr class='w-52 h-1 mx-auto bg-[#1d3557] border-0 rounded my-8'></hr>

				<Timeline />
				<span className='flex items-center justify-evenly w-1/2 lg:w-1/4 m-auto mt-8 gap-x-2'>
					<a
						className='text-end header-item'
						href='https://www.linkedin.com/in/maat-mind'
						target='_blank'
					>
						Click to see more
					</a>
					<button className='rounded-full bg-blue-600 text-blue-50 dark:bg-blue-600 w-12 h-12 pb-1 font-bold text-2xl font-sans  drop-shadow-lg'>
						<a href='https://www.linkedin.com/in/maat-mind' target='_blank'>
							in
						</a>
					</button>
				</span>
			</section>
			<section id='tech-stack' className='mt-16'>
				<h2 className='text-3xl text-center font-bold'>Tech Stack</h2>
				<p className='text-xl text-gray-400 text-center mt-2'>
					Technologies I've been working with recently
				</p>
			</section>
			<section id='projects' className='mt-16'>
				<h2 className='text-3xl text-center font-bold'>Projects</h2>
				<p className='text-xl text-gray-400 text-center mt-2'>
					Projects I've built so far
				</p>
			</section>
			<section id='contact' className='mt-16'>
				<h2 className='text-3xl text-center font-bold'>Contact me</h2>
				<p className='text-xl text-gray-400 text-center mt-2'></p>
			</section>
		</>
	)
}

/* 
			<main className='flex items-center mt-14 p-4'>
				<section className='w-3/5'>
					<span className='text-5xl'>
						<h1>
							Hi👋, <br />
							My name is <br />
						</h1>
						<a className='font-bold bg-gradient-to-r from-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
							{' '}
							Oscar Bernal
						</a>{' '}
						<br />
						<h1>and I build things for web</h1>
					</span>
				</section>
				<section className='w-2/3'>
					<Canvas className='transform-gpu' style={{ height: '500px' }}>
						<OrbitControls enableZoom={false} />
						<ambientLight intensity={0.5} />
						<directionalLight position={[-2, 5, 2]} intensity={1} />
						<Suspense fallback={null}>
							<Box />
						</Suspense>
					</Canvas>
				</section>
			</main>
			<section id='about' className='mt-16'>
				<h2 className='text-3xl text-center font-bold'>About</h2>
				<p className='text-xl text-gray-400 text-center mt-2'>
					This section is about me
				</p>
			</section>
			<section id='tech-stack'>
				<h2 className='text-3xl text-center font-bold'>Tech Stack</h2>
				<p className='text-xl text-gray-400 text-center mt-2'>
					Technologies I've been working with recently
				</p>
			</section>
			<section id='projects'>
				<h2 className='text-3xl text-center font-bold'>Projects</h2>
				<p className='text-xl text-gray-400 text-center mt-2'>
					Projects I've built so far
				</p>
			</section>
			<section id='contact'>
				<h2 className='text-3xl text-center font-bold'>Contact me</h2>
				<p className='text-xl text-gray-400 text-center mt-2'></p>
			</section>
		</>
 */
