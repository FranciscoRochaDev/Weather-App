import type { ChangeEvent, MouseEvent } from 'react'
import type { Cities, SearchCity } from '../../interfaces'
import Loading from '../Loading/Loading'
import CityDrop from '../CityDrop/CityDrop'
import styles from './SearchBar.module.css'

interface SearchBarProps {
    text: string
    loading: boolean
    cities: Cities[] | undefined
    onSearch: (e: ChangeEvent<HTMLInputElement>) => void
    onFetch: (city: SearchCity) => void
    onSelect: (city: Cities) => void
}

export default function SearchBar({ text, loading, cities, onSearch, onFetch, onSelect }: SearchBarProps) {

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        onFetch({ nameCity: text })
    }

    return (
        <>
            <div className={styles.search_bar}>
                <div className={styles.search_wrapper}>
                    <img src="/images/icon-search.svg" alt="icon search"/>
                    <input
                        placeholder="Search for a place.."
                        type="text"
                        value={text}
                        onChange={onSearch}
                    />
                </div>
                <button
                    className={styles.button_search}
                    onClick={handleClick}
                >
                    Search
                </button>
            </div>
            { loading &&
                <div className={styles.loading}>
                    <Loading />
                    <p className={styles.loading_text}>Search in progress</p>
                </div>
            }
            { cities &&
                <CityDrop
                    cities={cities}
                    onSelect={onSelect}
                />
            }
        </>
    )

}
