import { useLoader, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { TextureLoader } from 'three'
import texture from '../../assets/pink-bg.jpg'
import mundi from '../../assets/blue-mundi.jpg'

export default function Box() {
	const sphereRef = useRef()
	const colorMap = useLoader(TextureLoader, mundi)
	useFrame(() => {
		sphereRef.current.rotation.x += 0.00012
		sphereRef.current.rotation.y -= 0.0015
	})

	return (
		<mesh rotation={[-0.5, 3, 0]} ref={sphereRef}>
			<dodecahedronBufferGeometry attach='geometry' args={[3, 10]} />
			<meshStandardMaterial map={colorMap} />
		</mesh>
	)
}
