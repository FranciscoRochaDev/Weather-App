
/**
 *  Llamado a la Api de Geocoding
 *  Donde accedemos a restult y de ahi obtenemos latitude Y longitude
 */


import { useEffect, useState, type ChangeEvent } from "react"
import { useDebounce } from "use-debounce"
import type { SearchCity } from "../interfaces"
import axios from "axios"
import useWeather from "./useWeather";


export default function useCitySearch() {

    const { fetchWeather } = useWeather()

    const [text, setText] = useState('')
    const [debounceText] = useDebounce(text, 300)

    useEffect(() => {
        console.log('Consultando....')
    }, [debounceText])

    const handleSearch = (e : ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const fetchCity = async(city: SearchCity) => {

        const appId = import.meta.env.VITE_API_GEOCODING

        try {

            const baseUrl = `${appId}name=${city.nameCity}&count=10&language=en&format=json`
            const response = await axios(baseUrl)
            console.log(response.data)

            // Validar que exista
            if (!response.data.results) {
                throw new Error('Ciudad no encontrada')
            }

            const lat = response.data.results[0].latitude
            const lon = response.data.results[0].longitude

            console.log(fetchWeather({ lat, lon }))

        } catch (error) {
            console.log(error)
        }

    }

    return {
        text,
        handleSearch,
        fetchCity
    }
}
