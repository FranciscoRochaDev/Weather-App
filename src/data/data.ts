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
