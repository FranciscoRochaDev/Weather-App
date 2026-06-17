
export interface UnitOptios {
    code: string;
    label: string;
}

export interface UnitCategory {
    category: 'temperature' | 'windspeed' | 'precipitation'
    label: string
    options: UnitOptios[]
}
