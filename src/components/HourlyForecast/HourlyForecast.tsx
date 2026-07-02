import { useEffect, useState } from 'react'
import type { WeatherResponse } from '../../schema/weather'
import { WeatherCodeImage } from '../../data/data'
import { getDayName } from '../../utils/date'
import { getHourlyForecast } from '../../utils/weather'
import styles from './HourlyForecast.module.css'

interface HourlyForecastProps {
    weather: WeatherResponse | null
}

export default function HourlyForecast({ weather }: HourlyForecastProps) {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState<string | null>(null)

    useEffect(() => {
        setSelectedDate(null)
        setIsOpen(false)
    }, [weather])

    const activeDate = selectedDate ?? weather?.daily.time[0] ?? null
    const hourlyForecast = weather && activeDate ? getHourlyForecast(weather, activeDate) : []
    const selectedDay = activeDate ? getDayName(activeDate) : ''

    const handleSelectDay = (date: string) => {
        setSelectedDate(date)
        setIsOpen(false)
    }

    return (
        <div className={styles.hourly_forecast}>
            <div className={styles.forecast_weekday}>
                <h1>Hourly forecast</h1>
                <div className={styles.day_dropdown_wrapper}>
                    <button
                        type='button'
                        className={styles.day_dropdown}
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        {selectedDay}
                        <img src='/images/icon-dropdown.svg' alt='' className={styles.dropdown_icon} />
                    </button>
                    {isOpen && weather && (
                        <div className={styles.day_menu}>
                            {weather.daily.time.map((date) => (
                                <button
                                    type='button'
                                    key={date}
                                    className={`${styles.day_option} ${date === activeDate ? styles.day_option_selected : ''}`}
                                    onClick={() => handleSelectDay(date)}
                                >
                                    {getDayName(date)}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.hourly_container}>
                {hourlyForecast.map((item) => (
                    <div key={item.hour} className={styles.hourly_item}>
                        <div className={styles.hourly_item_info}>
                            <img
                                src={WeatherCodeImage[item.weatherCode] ?? '/images/icon-sunny.webp'}
                                alt='icon weather'
                                className={styles.hourly_icon}
                            />
                            <p className={styles.hourly_hour}>{item.hour}</p>
                        </div>
                        <p className={styles.hourly_temp}>{item.temp}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}
