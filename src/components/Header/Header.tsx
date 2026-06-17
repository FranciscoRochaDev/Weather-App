import { useState } from 'react'
import UnitDropdown from '../UnitDropdown/UnitDropdown'
import styles from './Header.module.css'

export default function Header() {

    const [isMetric, setIsMetric] = useState(true)

    return (
        <header className={styles.container}>
            <img src="/images/logo.svg" alt="logo" />
            <UnitDropdown
                isMetric={isMetric}
                onToggle={() => setIsMetric(prev => !prev)}
            />
        </header>
    )

}
