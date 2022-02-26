const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]
months.unshift(null)

export const monthName = (monthNumber) => {
  if( monthNumber > months.length -1 || monthNumber < 1) {
    return null
  } else {
    return months[monthNumber]
  }
}
