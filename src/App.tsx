import Header from "./components/Header/Header"
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.container}>
        <Header />
        <h1 className={styles.title}>
            How’s the <br className={styles.br_mobile} />sky <br className={styles.br_tablet} />looking <br className={styles.br_mobile} />today?
        </h1>
    </div>
  )
}

export default App
