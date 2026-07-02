import { useState } from "react"
import Header from "./components/Header/Header"
import styles from './App.module.css'
import SearchBar from "./components/SearchBar/SearchBar"
import ContainerWeather from "./components/ContainerWeather/ContainerWeather"
import useCitySearch from "./hooks/useCitySearch"
import useWeather from "./hooks/useWeather"
import HourlyForecast from "./components/HourlyForecast/HourlyForecast"
import type { Coordinates } from "./interfaces"

function App() {

  const [isMetric, setIsMetric] = useState(true)
  const { fetchWeather, weather } = useWeather()
  const handleFetchWeather = (coords: Coordinates) => fetchWeather(coords, isMetric)
  const { text, handleSearch, fetchCity, handleSelectCity, selectedCity, cities, loading } = useCitySearch(handleFetchWeather)

  const handleToggleUnits = () => {
    const nextIsMetric = !isMetric
    setIsMetric(nextIsMetric)
    if (selectedCity) {
      fetchWeather({ lat: selectedCity.latitude, lon: selectedCity.longitude }, nextIsMetric)
    }
  }

  return (
    <div className={styles.container}>
        <Header isMetric={isMetric} onToggle={handleToggleUnits} />
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
            <div className={styles.weather_container}>
                { weather &&
                    <ContainerWeather
                        selectedCity={selectedCity}
                        weather={weather}
                    />
                }
                { weather && <HourlyForecast weather={weather} /> }
            </div>
        </main>
    </div>
  )
}

export default App
