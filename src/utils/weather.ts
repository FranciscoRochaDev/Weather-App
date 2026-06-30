import type { WeatherResponse } from '../schema/weather'

const getCurrentHourIndex = (weather: WeatherResponse): number => {
    const localStr = new Date().toLocaleString('sv-SE', { timeZone: weather.timezone })
    const currentHour = localStr.slice(0, 13).replace(' ', 'T') + ':00'
    return weather.hourly.time.findIndex(time => time === currentHour)
}

export const getCurrentTemp = (weather: WeatherResponse): string => {
    const index = getCurrentHourIndex(weather)
    if (index === -1) return '--'
    return `${weather.hourly.temperature_2m[index]}${weather.hourly_units.temperature_2m}`
}

export const getCurrentWeatherCode = (weather: WeatherResponse): number | null => {
    const index = getCurrentHourIndex(weather)
    if (index === -1) return null
    return weather.hourly.weathercode?.[index] ?? null
}

export const formatTemperature = (temperature: number) : string => {
    return temperature.toFixed(1)
}

