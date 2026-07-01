import type { Cities } from '../../interfaces'
import type { WeatherResponse } from '../../schema/weather'
import { WeatherCodeImage } from '../../data/data'
import { getFormatDate } from '../../utils/date'
import { getCurrentFeelsLike, getCurrentHumidity, getCurrentPrecipitation, getCurrentTemp, getCurrentWeatherCode, getCurrentWind, getDailyForecast } from '../../utils/weather'
import styles from './ContainerWeather.module.css'
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import DailyForecast from '../DailyForecast/DailyForecast'

interface ContainerWeatherProps {
    selectedCity: Cities | null
    weather: WeatherResponse | null
}

export default function ContainerWeather({ selectedCity, weather }: ContainerWeatherProps) {

    const weatherCode = weather ? getCurrentWeatherCode(weather) : null
    const dailyForecast = weather ? getDailyForecast(weather) : []

    const details = weather ? [
        { label: 'Feels liks', value: getCurrentFeelsLike(weather) },
        { label: 'Humidity', value: getCurrentHumidity(weather) },
        { label: 'Wind', value: getCurrentWind(weather) },
        { label: 'Precipitation', value: getCurrentPrecipitation(weather) }
    ] : []

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
                <div className={styles.details_container}>
                    { details.map(({label, value}) => (
                        <WeatherDetails
                            key={label}
                            label={label}
                            value={value}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.daily_forecast}>
                <p className={styles.daily_title}>Daily forecast</p>
                <div className={styles.daily_container}>
                    {dailyForecast.map((day) => (
                        <DailyForecast
                            key={day.date}
                            day={day.day}
                            icon={WeatherCodeImage[day.weatherCode] ?? '/images/icon-sunny.webp'}
                            maxTemp={day.maxTemp}
                            minTemp={day.minTemp}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
