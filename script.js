//Initialize News params

let country = 'in';
const api_key = '0f2486d181aa41acb2ffaa660e7429f1';
let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}`;

function greetUsers() {
  // Testing if greetMsg is correct as per time
  //let dayTime = new Date(2021, 08, 30, 11, 59, 40).getHours();
  let dayTime = new Date().getHours();
  return (greetMsg =
    dayTime < 12
      ? 'Good Morning'
      : dayTime < 16
      ? 'Good Afternoon'
      : dayTime < 22
      ? 'Good Evening'
      : 'Good Night');
}

function clock() {
  let date = new Date().toLocaleDateString();
  let timeNow = new Date().toLocaleTimeString();
  let secondsClockHTML = document.getElementById('secondsClock');
  greetUsers();
  secondsClockHTML.innerHTML = `${greetMsg}, It's ${timeNow} !`;
}

setInterval(clock, 1000);

// Using fetch api
function fetchData() {
  fetch(url)
    .then(Response => {
      return Response.json();
    })
    .then(data => {
      console.log(data.articles);
    });
}

//fetchData();

//Weather Data
fetch(
  'https://community-open-weather-map.p.rapidapi.com/weather?q=India&lat=0&lon=0&lang=English&units=metric',
  {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': '51c31b79f4msh59e4c116ba08549p169b50jsnefc854f74f7b',
    },
  }
)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
