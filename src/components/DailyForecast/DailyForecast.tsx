import styles from './DailyForecast.module.css'

interface DailyForecastProps {
    day: string;
    icon: string;
    maxTemp: number;
    minTemp: number;
}

export default function DailyForecast({ day, icon, maxTemp, minTemp } : DailyForecastProps) {

    return (
        <div className={styles.daily_item}>
            <p className={styles.daylings}>{day}</p>
            <img
                src={icon}
                alt="icon weather"
            />
            <div className={styles.temperatures}>
                <p className={styles.first_tem}>{maxTemp}°</p>
                <p className={styles.second_tem}>{minTemp}°</p>
            </div>
        </div>
    );

}
