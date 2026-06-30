import type { UnitCategory } from "../interfaces";

export const unitGroups: UnitCategory[] = [
    {
        category: 'temperature',
        label: 'Temperature',
        options: [
            { code: 'C', label: 'Celsius (°C)'},
            { code: 'F', label: 'Fahrenheit (°F)'}
        ]
    },
    {
        category: 'windspeed',
        label: 'Wind Speed',
        options: [
            { code: 'kmh', label: 'km/h'},
            { code: 'mph', label: 'mph'}
        ]
    },
    {
        category: 'precipitation',
        label: 'Precipitation',
        options: [
            { code: 'mm', label: 'Millimeters (mm)'},
            { code: 'in', label: 'Inches (in)'}
        ]
    }
]

export const WeatherCodeImage: Record<number, string> = {
    // Despejado
       0: '/images/icon-sunny.webp',
       1: '/images/icon-sunny.webp',
       // Parcialmente nublado
       2: '/images/icon-partly-cloudy.webp',
       // Nublado / cubierto
       3: '/images/icon-overcast.webp',
       // Niebla
       45: '/images/icon-fog.webp',
       48: '/images/icon-fog.webp',
       // Llovizna
       51: '/images/icon-drizzle.webp',
       53: '/images/icon-drizzle.webp',
       55: '/images/icon-drizzle.webp',
       56: '/images/icon-drizzle.webp',
       57: '/images/icon-drizzle.webp',
       // Lluvia
       61: '/images/icon-rain.webp',
       63: '/images/icon-rain.webp',
       65: '/images/icon-rain.webp',
       66: '/images/icon-rain.webp',
       67: '/images/icon-rain.webp',
       80: '/images/icon-rain.webp',
       81: '/images/icon-rain.webp',
       82: '/images/icon-rain.webp',
       // Nieve
       71: '/images/icon-snow.webp',
       73: '/images/icon-snow.webp',
       75: '/images/icon-snow.webp',
       77: '/images/icon-snow.webp',
       85: '/images/icon-snow.webp',
       86: '/images/icon-snow.webp',
       // Tormenta
       95: '/images/icon-storm.webp',
       96: '/images/icon-storm.webp',
       99: '/images/icon-storm.webp',
}
