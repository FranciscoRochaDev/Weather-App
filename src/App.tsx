import Header from "./components/Header/Header"
import styles from './App.module.css'
import SearchBar from "./components/SearchBar/SearchBar"
import ContainerWeather from "./components/ContainerWeather/ContainerWeather"
import useCitySearch from "./hooks/useCitySearch"
import useWeather from "./hooks/useWeather"

function App() {

  const { fetchWeather, weather } = useWeather()
  const { text, handleSearch, fetchCity, handleSelectCity, selectedCity, cities, loading } = useCitySearch(fetchWeather)

  return (
    <div className={styles.container}>
        <Header />
        <h1 className={styles.title}>
              How’s the <br className={styles.br_mobile} />
              sky <br className={styles.br_tablet} />
              looking <br className={styles.br_mobile} />today?
        </h1>
        <main className={styles.info_weather}>
            <SearchBar
                text={text}
                loading={loading}
                cities={cities}
                onSearch={handleSearch}
                onFetch={fetchCity}
                onSelect={handleSelectCity}
            />
            <ContainerWeather
                selectedCity={selectedCity}
                weather={weather}
            />
        </main>
    </div>
  )
}

export default App
