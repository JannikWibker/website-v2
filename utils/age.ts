export const age = (birthday: Date, today = new Date()) => {
  const age = today.getFullYear() - birthday.getFullYear()
  const months = today.getMonth() - birthday.getMonth()
  return months < 0 || (months === 0 && today.getDate() < birthday.getDate()) ? age - 1 : age
}
