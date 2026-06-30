import type { Cities } from '../../interfaces'
import type { WeatherResponse } from '../../schema/weather'
import { WeatherCodeImage } from '../../data/data'
import { getFormatDate } from '../../utils/date'
import { getCurrentTemp, getCurrentWeatherCode } from '../../utils/weather'
import styles from './ContainerWeather.module.css'

interface ContainerWeatherProps {
    selectedCity: Cities | null
    weather: WeatherResponse | null
}

export default function ContainerWeather({ selectedCity, weather }: ContainerWeatherProps) {

    const weatherCode = weather ? getCurrentWeatherCode(weather) : null

    return (
        <div className={styles.weather_info}>
            <div className={styles.info_weather}>
                <picture>
                    <source media='(min-width: 768px)' srcSet='/images/bg-today-large.svg' />
                    <img src='/images/bg-today-small.svg' alt='background' className={styles.image_bg} />
                </picture>
                <div className={styles.content}>
                    {selectedCity &&
                        <div className={styles.city_info}>
                            <p className={styles.name_citys}>{selectedCity?.name}, {selectedCity.country_code}</p>
                            <p className={styles.date_weather}>{getFormatDate()}</p>
                        </div>
                    }
                    <div className={styles.weather_data}>
                        {weatherCode !== null &&
                            <img
                                src={WeatherCodeImage[weatherCode] ?? '/images/icon-sunny.webp'}
                                className={styles.weather_icon}
                                alt='Weather Icon'
                            />
                        }
                        {weather && (
                            <p className={styles.temperature}>{getCurrentTemp(weather)}</p>
                        )}
                    </div>
                </div>
            </div>
            <div>
                Hourly forecast
            </div>
        </div>
    )
}
