
/**
 *  Llamado a la Api de Geocoding
 *  Donde accedemos a restult y de ahi obtenemos latitude Y longitude
 */

import { useState, type ChangeEvent } from "react"
import type { Cities, Coordinates, SearchCity } from "../interfaces"
import axios from "axios"


export default function useCitySearch(fetchWeather: (coords: Coordinates) => void) {

    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [cities, setCities] = useState<Cities[]>()
    const [selectedCity, setSelectedCity] = useState<Cities | null>(null)

    const handleSearch = (e : ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleSelectCity = (city: Cities) => {
        setSelectedCity(city)
        fetchWeather({ lat: city.latitude, lon: city.longitude })
        setCities(undefined)
        setText('')
    }

    const fetchCity = async(city: SearchCity) => {

        const appId = import.meta.env.VITE_API_GEOCODING

        setLoading(true)
        setError('')

        try {

            const baseUrl = `${appId}name=${city.nameCity}&count=10&language=en&format=json`
            const response = await axios(baseUrl)

            if (!response.data.results) {
                setError('Ciudad no encontrada')
                return
            }

            setCities(response.data.results)
            console.log(response.data.results)

            // const lat = response.data.results[0].latitude
            // const lon = response.data.results[0].longitude

            // await fetchWeather({ lat, lon })


        } catch {
            setError('Error al conectarse al servidor')
        } finally {
            setLoading(false)
        }

    }

    return {
        text,
        handleSearch,
        handleSelectCity,
        selectedCity,
        fetchCity,
        error,
        loading,
        cities,
    }
}
