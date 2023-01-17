import Header from './Header.jsx'
import '../assets/css/home.css'
import { Canvas } from '@react-three/fiber'
import Box from './three/Box'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<section>
					<h1>My name is Oscar Bernal and I build things for web</h1>
					<Canvas style={{ height: '350px' }}>
						<ambientLight intensity={0.5} />
						<directionalLight position={[-2, 5, 2]} intensity={1} />
						<Box />
					</Canvas>
				</section>
			</main>
		</>
	)
}
