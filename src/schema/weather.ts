import { z } from "zod";

// Shape of the Open-Meteo forecast response, validated at runtime with Zod
export const WeatherResponseSchema = z.object({

    latitude: z.number(),
    longitude: z.number(),
    timezone: z.string(),

    // Unit labels (e.g. "°C") for each field in `hourly`, they change based on the requested unit system
    hourly_units: z.object({
        time: z.string(),
        temperature_2m: z.string(),
        apparent_temperature: z.string(),
        wind_speed_10m: z.string(),
        precipitation: z.string()
    }),

    // Hour-by-hour data used to read the current conditions
    hourly: z.object({
        time: z.array(z.string()),
        temperature_2m: z.array(z.number()),
        weathercode: z.array(z.number()),
        wind_speed_10m: z.array(z.number()),
        apparent_temperature: z.array(z.number()),
        relative_humidity_2m: z.array(z.number()),
        wind_direction_10m: z.array(z.number()),
        precipitation: z.array(z.number())
    }),

    // Unit labels (e.g. "°C") for each field in `daily`
    daily_units: z.object({
        time: z.string(),
        weathercode: z.string(),
        temperature_2m_max: z.string(),
        temperature_2m_min: z.string()
    }),

    // Day-by-day data (parallel arrays, same index = same day) used to build the 7-day forecast
    daily: z.object({
        time: z.array(z.string()),
        weathercode: z.array(z.number()),
        temperature_2m_max: z.array(z.number()),
        temperature_2m_min: z.array(z.number())
    })

})

export type WeatherResponse = z.infer<typeof WeatherResponseSchema>
