export default function Box() {
	return (
		<mesh rotation={[90, 0, 20]}>
			<icosahedronBufferGeometry attach='geometry' args={[1, 0]} />
			<meshLambertMaterial attach='material' color='blue' />
		</mesh>
	)
}
