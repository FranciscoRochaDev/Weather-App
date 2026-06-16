import styles from './Header.module.css'

export default function Header() {

    return (
        <header className={styles.container}>
            <img src="/images/logo.svg" alt="logo" />
            <p>Units</p>
        </header>
    )

}
