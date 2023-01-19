import { Suspense } from 'react'
import Header from './Header.jsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './three/Box'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<section>
					<h1 className=''>
						My name is Oscar Bernal and I build things for web
					</h1>
				</section>
				<section>
					<Canvas style={{ height: '500px' }}>
						<OrbitControls enableZoom={false} />
						<ambientLight intensity={0.5} />
						<directionalLight position={[-2, 5, 2]} intensity={1} />
						<Suspense fallback={null}>
							<Box />
						</Suspense>
					</Canvas>
				</section>
			</main>
		</>
	)
}
