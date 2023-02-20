import styles from './App.module.css'
import Heading from './Heading'

function App() {
  return (
    <>
      <h1>React app</h1>
      <h2 className={styles.red}>Still learning</h2>
      <Heading>Still learning</Heading>
      <Heading level={2}>With Fabio</Heading>
    </>
  )
}

export default App
