export const calculateAge = (birthDateString: string): number => {
  const birthDate = new Date(birthDateString)
  const today = new Date()

  return today.getFullYear() - birthDate.getFullYear()
}

export const formatDateToBrazilian = (dateString: string): string => {
  const [year, month, day] = dateString.split('-')
  return `${day}/${month}/${year}`
}
