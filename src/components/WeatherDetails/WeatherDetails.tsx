import styles from './WeatherDetails.module.css'

interface WeatherDetailsProps {
    label: string,
    value: string
}

export default function WeatherDetails({ label, value }: WeatherDetailsProps) {
  return (
    <div className={styles.details}>
        <div className={styles.details_info}>
            <p className={styles.details_title}>{label}</p>
            <p className={styles.details_text}>{value}</p>
        </div>
    </div>
  )
}


