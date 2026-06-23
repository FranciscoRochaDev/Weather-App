import axios from "axios";
import type { Coordinates } from "../interfaces"
import { WeatherResponseSchema, type WeatherResponse } from '../schema/weather';
import { useState } from "react";


export default function useWeather () {

    const [weather, setWeather] = useState<WeatherResponse | null>(null)
    const [loading, setLoading] = useState(false)
    const fetchWeather = async({ lat, lon } : Coordinates) => {

        setLoading(true)

        const apiUrl = import.meta.env.VITE_API_WATHER_FORECAST

        try {

            const baseUrl = `${apiUrl}latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
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
