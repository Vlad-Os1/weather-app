fetch(
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kyiv?unitGroup=us&key=5YGSJ2NCM4BT5D27GDDUSKBNM&contentType=json'
)
  .then((resp) => resp.json())
  .then((data) => console.log(data));

async function getWeather() {
  let response = await fetch(
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kyiv?unitGroup=us&key=5YGSJ2NCM4BT5D27GDDUSKBNM&contentType=json'
  );
  let data = await response.json();
  console.log(data);
}

// getWeather();
