import { Suspense } from 'react'
import Header from './Header.jsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './three/Box'

export default function Home() {
	return (
		<>
			<Header />
			<main className='flex flex-col xl:flex-row items-center mt-14 p-4'>
				<section className='w-screen xl:w-3/5'>
					<div className='flex flex-col w-3/4 m-auto p-6 gap-y-6'>
						<p className='text-3xl font-bold'>
							<button className='rounded-full bg-yellow-400 dark:bg-yellow-400 w-20 h-10 text-end px-2 py-1 font-bold text-2xl font-sans mx-4 drop-shadow-lg'>
								JS
							</button>
							fullstack developer
						</p>
						<h3 className='text-5xl font-bold'>
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
				</section>
				<section className='w-full xl:w-2/5'>
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
