import { useLoader, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { TextureLoader } from 'three'
import texture from '../../assets/pink-bg2.jpg'

export default function Box() {
	const sphereRef = useRef()
	const colorMap = useLoader(TextureLoader, texture)
	useFrame(() => {
		sphereRef.current.rotation.y -= 0.00125
	})

	return (
		<mesh rotation={[-0.5, 3, 0]} ref={sphereRef}>
			<dodecahedronBufferGeometry attach='geometry' args={[3, 10]} />
			<meshStandardMaterial map={colorMap} />
		</mesh>
	)
}
