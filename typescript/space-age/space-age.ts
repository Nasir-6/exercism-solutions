const ORBITAL_PERIODS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
} as const

type planet = keyof typeof ORBITAL_PERIODS;

export function age(planet: planet, seconds: number): number {
  // Convert seconds into earth years
  // 1 Earth year is 365.25 Earth days, or 31557600 seconds
  let earthYears = seconds/ 31557600

  // Now convert into new planet years - give to 2dp 
  return parseFloat((earthYears / ORBITAL_PERIODS[planet]).toFixed(2))
}
