// Get the curren date in the format 'Weekdat, Month Day, Year'
// Example: 'Monday, Janaury 1, 2026
export const getFormatDate = () :string => {
    return new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

// Get the day name from a date string in the format 'YYYY-MM-DD'
export const getDayName = (dateStr: string): string => {
    return new Date(`${dateStr}T00:00:00`).toLocaleDateString('en-US', { weekday: 'short' })
}

// Get a 12-hour label (e.g. '3 AM') from an ISO time string ('YYYY-MM-DDTHH:mm')
// Parsed directly from the string (not via Date) so it stays in the weather's local time
export const getHourLabel = (timeStr: string): string => {
    const hour = Number(timeStr.slice(11, 13))
    const period = hour >= 12 ? 'PM' : 'AM'
    const hour12 = hour % 12 === 0 ? 12 : hour % 12
    return `${hour12} ${period}`
}
