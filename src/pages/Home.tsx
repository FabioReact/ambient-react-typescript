import React from 'react'
import Heading from '../Heading'

const Home = () => {
	return (
		<section>
			<h1>React app</h1>
			{/* <h2 className={styles.red}>Still learning</h2> */}
			<Heading>Still learning</Heading>
			<Heading level={2}>With Fabio</Heading>
			<Heading level={3} />
		</section>
	)
}

export default Home