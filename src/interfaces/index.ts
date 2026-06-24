
export interface SearchCity {
    nameCity: string;
}

export interface UnitOptios {
    code: string;
    label: string;
}

export interface UnitCategory {
    category: 'temperature' | 'windspeed' | 'precipitation';
    label: string;
    options: UnitOptios[];
}

export interface Coordinates {
    lat: number;
    lon: number;
}

export interface Cities {
    id: number;
    name: string;
    country_code: string;
}
