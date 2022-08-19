export interface WeatherData {
  lat: number
  lon: number
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  humidity: number
  name: string
  dt: number
  country: string
  sunrise: number
  sunset: number
  details: string
  speed: number
  description: string
  icon: string
  currentDate: string
  currentTime: string
  sunRiseTime: string
  sunSetTime: string
  timezone: string
  daily: Forecast[]
  hourly: Forecast[]
}

export interface Forecast {
  title: string
  temp: number
  icon: string
}