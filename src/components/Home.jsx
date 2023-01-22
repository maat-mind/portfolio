import { Suspense } from 'react'
import Header from './Header.jsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './three/Box'

export default function Home() {
	return (
		<>
			<Header />
		</>
	)
}

/* export default function Home() {
	return (
		<>
			<Header />
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
	)
} */
