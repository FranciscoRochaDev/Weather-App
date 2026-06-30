import { z } from "zod";

export const WeatherResponseSchema = z.object({

    latitude: z.number(),
    longitude: z.number(),
    timezone: z.string(),
    hourly_units: z.object({
        time: z.string(),
        temperature_2m: z.string()
    }),

    hourly: z.object({
        time: z.array(z.string()),
        temperature_2m: z.array(z.number()),
        weathercode: z.array(z.number()),
    })

})

export type WeatherResponse = z.infer<typeof WeatherResponseSchema>
