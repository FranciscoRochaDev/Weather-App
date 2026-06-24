import Header from "./components/Header/Header"
import styles from './App.module.css'
import SearchBar from "./components/SearchBar/SearchBar"
import ContainerWeather from "./components/ContainerWeather/ContainerWeather"

function App() {

  return (
    <div className={styles.container}>
        <Header />
        <h1 className={styles.title}>
            How’s the <br className={styles.br_mobile} />sky <br className={styles.br_tablet} />looking <br className={styles.br_mobile} />today?
        </h1>
        <main className={styles.info_weather}>
            <SearchBar />
            <ContainerWeather />
        </main>
    </div>
  )
}

export default App
