import type { DailyForecastItem } from '../interfaces'
import type { WeatherResponse } from '../schema/weather'
import { getDayName } from './date'

// Get the index of the current hour in the hourly time array based on the weather timezone
const getCurrentHourIndex = (weather: WeatherResponse): number => {
    const localStr = new Date().toLocaleString('sv-SE', { timeZone: weather.timezone })
    const currentHour = localStr.slice(0, 13).replace(' ', 'T') + ':00'
    return weather.hourly.time.findIndex(time => time === currentHour)
}

// Get the current temparature based on the weather timezone
export const getCurrentTemp = (weather: WeatherResponse): string => {
    const index = getCurrentHourIndex(weather)
    if (index === -1) return '--'
    return `${weather.hourly.temperature_2m[index]}${weather.hourly_units.temperature_2m}`
}


// Get the current weather code based on the weather timezone
export const getCurrentWeatherCode = (weather: WeatherResponse): number | null => {
    const index = getCurrentHourIndex(weather)
    if (index === -1) return null
    return weather.hourly.weathercode?.[index] ?? null
}

// Format a raw temperature value to one decimal place
export const formatTemperature = (temperature: number) : string => {
    return temperature.toFixed(1)
}

// Get the current "feels like" temperature based on the weather timezone
export const getCurrentFeelsLike = (weather : WeatherResponse): string => {
    const index = getCurrentHourIndex(weather)
    if(index === -1) return '--'
    return `${weather.hourly.apparent_temperature[index]}°C`
}

// Get the current relative humidity based on the weather timezone
export const getCurrentHumidity = (weather: WeatherResponse): string => {
    const index = getCurrentHourIndex(weather)
    if(index === -1) return '0'
    return `${weather.hourly.relative_humidity_2m[index]}%`
}

// Get the current wind speed based on the weather timezone
export const getCurrentWind = (weather : WeatherResponse): string => {
    const index = getCurrentHourIndex(weather)
    if(index === -1) return '0'
    return `${weather.hourly.wind_speed_10m[index]}km/h`
}

// Get the current precipitation based on the weather timezone
export const getCurrentPrecipitation = (weather: WeatherResponse): string => {
    const index = getCurrentHourIndex(weather)
    if(index === -1) return '0'
    return `${weather.hourly.precipitation[index]}mm`
}

// Build the 7-day forecast list from the daily arrays,
// mapping each date to its day name, weather code and rounded max/min temperatures
export const getDailyForecast = (weather: WeatherResponse): DailyForecastItem[] => {
    return weather.daily.time.map((date, index) => ({
        date,
        day: getDayName(date),
        weatherCode: weather.daily.weathercode[index],
        maxTemp: Math.round(weather.daily.temperature_2m_max[index]),
        minTemp: Math.round(weather.daily.temperature_2m_min[index])
    }))
}
