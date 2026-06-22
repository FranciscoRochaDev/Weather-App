import type { Coordinates } from "../interfaces"

export default function useWeather () {

    const fetchWeather = async({ lat, lon } : Coordinates) => {

        const apiUrl = import.meta.env.VITE_API_WATHER_FORECAST

        try {

            const baseUrl = `${apiUrl}latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
            console.log(baseUrl)

        } catch (error) {
            console.error(error)
        }

    }

    return {
        fetchWeather
    }

}
