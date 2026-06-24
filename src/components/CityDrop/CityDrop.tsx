import styles from './CityDrop.module.css'
import type { Cities } from "../../interfaces"

interface CityDropProps {
    cities: Cities[]
}

export default function CityDrop({cities} : CityDropProps) {

    return (
        <div className={styles.search_drop}>
            {cities.map((city) => (
                <div
                    key={city.id}
                    className={styles.cities_option}
                >
                    <p>{city.name}</p>
                    <p>{city.country_code}</p>
                </div>
            ))}
        </div>
    )

}
