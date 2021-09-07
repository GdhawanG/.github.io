//Initialize News params, Source = NEWSAPI
let language;
let today = new Date().toDateString();
const api_key = '0f2486d181aa41acb2ffaa660e7429f1';
let url;
let articles;

const englishDivBtn = document.getElementById('englishDivBtn');
const germanDivBtn = document.getElementById('germanDivBtn');
const englishNewsDiv = document.getElementById('englishNewsDiv');
const germanNewsDiv = document.getElementById('germanNewsDiv');

let newsEnglish = document.getElementById('newsEnglish');
let headingEnglish = document.getElementById('headingEnglish');

let newsGerman = document.getElementById('newsGerman');
let headingGerman = document.getElementById('headingGerman');

function showEngDiv()
{
  englishNewsDiv.style.display = 'block';
  germanNewsDiv.style.display = 'none';
  language = englishDivBtn.value;
  fetchData(language);
};

function showGermanDiv()
{
  germanNewsDiv.style.display = 'block';
  englishNewsDiv.style.display = 'none';
  language = germanDivBtn.value;
  fetchData(language);
};

// Navbar Functions
function greetUsers()
{
  // Testing if greetMsg is correct as per time
  // let dayTime = new Date(2021, 08, 30, 11, 59, 40).getHours();
  // let dayTime = 'Morning';

  let dayTime = new Date().getHours();
  dayTime =
    dayTime >= 5 && dayTime < 12
      ? 'Morning'
      : dayTime >= 12 && dayTime < 16
        ? 'Afternoon'
        : dayTime >= 16 && dayTime < 22
          ? 'Evening'
          : 'Night';

  let greetingHTML = document.getElementById('greeting');
  greetingHTML.innerHTML = `Good ${dayTime}  `;
  var img = document.createElement('img');
  img.src = `DayTimeIcons/${dayTime}.png`;
  document.getElementById('greeting').appendChild(img);
};

function clock()
{
  let date = new Date().toLocaleDateString();
  let timeNow = new Date().toLocaleTimeString();
  let secondsClockHTML = document.getElementById('secondsClock');
  secondsClockHTML.innerHTML = `It's ${timeNow} !`;
};

//Using fetch api
function fetchData(language)
{
  url = `https://newsapi.org/v2/everything?q=volkswagen&sortBy=relevancy&from=${today}&language=${language}&apiKey=${api_key}`;
  fetch(url)
    .then(Response =>
    {
      return Response.json();
    })
    .then(data =>
    {
      let newsHtml = '';
      articles = data.articles;
      articles.forEach(function (elem, ind)
      {
        if (language == 'en') {
          let news = `<div class="card">
                        <div class="card-header" id="heading${ind}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${ind}"
                                aria-expanded="false" aria-controls="collapse${ind}">
                               ${elem['title']}
                            </button>
                            </h2>
                        </div>
                        <div id="collapse${ind}" class="collapse" aria-labelledby="heading${ind}" data-parent="#englishNewsAccordion">
                            <div class="card-body"> ${elem['content']}. <a href="${elem['url']}" target="_blank" >Read more here</a>  </div>
                        </div>
                    </div>`;
          newsHtml += news;
          englishNewsAccordion.innerHTML = newsHtml;
        } else {
          let news = `<div class="card">
                        <div class="card-header" id="heading${ind}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${ind}"
                                aria-expanded="false" aria-controls="collapse${ind}">
                               ${elem['title']}
                            </button>
                            </h2>
                        </div>
                        <div id="collapse${ind}" class="collapse" aria-labelledby="heading${ind}" data-parent="#germanNewsAccordion">
                            <div class="card-body"> ${elem['content']}. <a href="${elem['url']}" target="_blank" >Read more here</a>  </div>
                        </div>
                    </div>`;
          newsHtml += news;
          germanNewsAccordion.innerHTML = newsHtml;
        }
      });
    })
    .catch(err =>
    {
      console.error(err);
    });
};

setInterval(clock, 1000);
setInterval(greetUsers, 1000);
fetchData('en');

//Weather Data
function fetchWeather()
{
  fetch(
    'https://community-open-weather-map.p.rapidapi.com/weather?q=Pune&lang=English&units=metric&rapidapi-key=51c31b79f4msh59e4c116ba08549p169b50jsnefc854f74f7b'
  )
    .then(response => response.json())
    .then(
      data =>
        (document.getElementById('temp').innerHTML = `${data.main.temp}°C`)
    )
    .catch(err =>
    {
      console.log(err);
    });
};
fetchWeather();

function AutoRefresh(mSec)
{
  setTimeout('location.reload(true);', mSec);
};
