import styles from './CityDrop.module.css'
import type { Cities } from "../../interfaces"

interface CityDropProps {
    cities: Cities[],
    onSelect: (city: Cities) => void
}

export default function CityDrop({ cities, onSelect }: CityDropProps) {

    return (
        <div className={styles.search_drop}>
            {cities.map((city) => (
                <div
                    key={city.id}
                    className={styles.cities_option}
                    onClick={() => onSelect(city)}
                >
                    <p>{city.name}</p>
                    <p>{city.country_code}</p>
                </div>
            ))}
        </div>
    )

}
