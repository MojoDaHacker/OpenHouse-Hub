export const getWeatherData = () => (
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=3abd9c2df6a249e8abcf4f812de0a627`)
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.log(err))
)