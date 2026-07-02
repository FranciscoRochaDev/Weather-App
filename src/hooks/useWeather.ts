import axios from "axios";
import type { Coordinates } from "../interfaces"
import { WeatherResponseSchema, type WeatherResponse } from '../schema/weather';
import { useState } from "react";


export default function useWeather () {

    const [weather, setWeather] = useState<WeatherResponse | null>(null)
    const [loading, setLoading] = useState(false)

    const fetchWeather = async ({ lat, lon }: Coordinates, isMetric: boolean = true) => {

        setLoading(true)

        const apiUrl = import.meta.env.VITE_API_WATHER_FORECAST
        const temperatureUnit = isMetric ? 'celsius' : 'fahrenheit'
        const windSpeedUnit = isMetric ? 'kmh' : 'mph'
        const precipitationUnit = isMetric ? 'mm' : 'inch'

        try {
            const baseUrl = `${apiUrl}latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode,wind_speed_10m,apparent_temperature,relative_humidity_2m,wind_direction_10m,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto&temperature_unit=${temperatureUnit}&wind_speed_unit=${windSpeedUnit}&precipitation_unit=${precipitationUnit}`
            const data = await axios(baseUrl)
            const result = WeatherResponseSchema.safeParse(data.data)
            console.log(data.data)

            if(result.success){
                setWeather(result.data)
            } else {
                console.log('Respuesta mal formada')
            }

        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }

    }

    return {
        fetchWeather,
        weather,
        loading,
    }

}
