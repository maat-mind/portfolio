import { Suspense } from 'react'
import Header from './Header.jsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './three/Box'

export default function Home() {
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
			<section id='about' className='text-3xl text-center font-bold'>
				<h2>About</h2>
			</section>
			<section id='tech-stack' className='text-3xl text-center font-bold'>
				<h2>Tech Stack</h2>
			</section>
			<section id='projects' className='text-3xl text-center font-bold'>
				<h2>Projects</h2>
			</section>
			<section id='contact' className='text-3xl text-center font-bold'>
				<h2>Contact</h2>
			</section>
		</>
	)
}
