import { useState } from "react";
import { unitGroups } from "../../data/data";
import type { UnitCategory } from "../../interfaces";
import styles from './UnitDropdown.module.css'

interface Selections {
    temperature: string;
    windspeed: string;
    precipitation: string;
}

interface UnitDropdownProps {
    isMetric: boolean,
    onToggle: () => void
}

export default function UnitDropdown({ isMetric, onToggle }: UnitDropdownProps) {

    const [isOpen, setIsOpen] = useState(false)
    const [selections, setSelections] = useState<Selections>({
        temperature: 'C',
        windspeed: 'kmh',
        precipitation: 'mm'
    })

    const handleSelect = (category: UnitCategory['category'], code: string) => {
        setSelections(prev => ({
            ...prev,
            [category]: code
        }))
    }

    const handleToggle = () => {
        const nexMetric = !isMetric
        const newSelections = unitGroups.reduce((acc, group) => {
            acc[group.category] = nexMetric ? group.options[0].code : group.options[1].code
            return acc
        }, {} as Selections)

        setSelections(newSelections)
        onToggle()

    }

    return (
        <>
            <div className={styles.unit_dropdown}>
                <button
                    onClick={() => setIsOpen(prev => !prev)}
                    className={styles.dropdown}
                >
                    <img src="/images/icon-units.svg" alt="icon units" />
                        Units
                    <img src="/images/icon-dropdown.svg" alt="icon dropdown" />
                </button>
                {isOpen && (
                    <div className={styles.down_menu}>
                        <button
                            className={styles.down}
                            onClick={handleToggle}
                        >
                            {isMetric ? 'Switch to Imperial' : 'Switch to Metric'}
                        </button>
                        <div>
                            {unitGroups.map((gruop) => (
                                <div key={gruop.category}>
                                    <p className={styles.options}>{gruop.label}</p>
                                    {gruop.options.map((option) => (
                                        <div
                                            key={option.code}
                                            className={`${styles.option_row} ${selections[gruop.category] === option.code ? styles.option_row_selected : ''}`}
                                            onClick={() => handleSelect(gruop.category, option.code)}
                                        >
                                            <span className={styles.down}>{option.label}</span>
                                            {selections[gruop.category] === option.code && (
                                                <img src="/images/icon-checkmark.svg" alt="icon check" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )

}
