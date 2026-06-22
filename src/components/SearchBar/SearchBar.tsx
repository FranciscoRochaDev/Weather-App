import type { MouseEvent } from 'react'
import useCitySearch from '../../hooks/useCitySearch'
import styles from './SearchBar.module.css'

export default function SearchBar() {

    const { text, handleSearch, fetchCity } = useCitySearch()

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        fetchCity({ nameCity: text })
    }

    return (
        <div className={styles.search_bar}>
            <div className={styles.search_wrapper}>
                <img src="/images/icon-search.svg" alt="icon search"/>
                <input
                    placeholder="Search for a place.."
                    type="text"
                    value={text}
                    onChange={handleSearch}
                />
            </div>
            <button
                className={styles.button_search}
                onClick={handleClick}
            >
                Search
            </button>
        </div>
    )

}
