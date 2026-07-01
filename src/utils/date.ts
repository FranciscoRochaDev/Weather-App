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
