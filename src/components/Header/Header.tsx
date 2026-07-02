import UnitDropdown from '../UnitDropdown/UnitDropdown'
import styles from './Header.module.css'

interface HeaderProps {
    isMetric: boolean
    onToggle: () => void
}

export default function Header({ isMetric, onToggle }: HeaderProps) {

    return (
        <header className={styles.container}>
            <img src="/images/logo.svg" alt="logo" />
            <UnitDropdown
                isMetric={isMetric}
                onToggle={onToggle}
            />
        </header>
    )

}
