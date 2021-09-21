//Initialize News params, Source = NEWSAPI
let language;
let today = new Date().toDateString();
const api_key = '0f2486d181aa41acb2ffaa660e7429f1';
let url;

const englishDivBtn = document.getElementById('englishDivBtn');
const germanDivBtn = document.getElementById('germanDivBtn');
const englishNewsDiv = document.getElementById('englishNewsDiv');
const germanNewsDiv = document.getElementById('germanNewsDiv');

let newsEnglish = document.getElementById('newsEnglish');
let headingEnglish = document.getElementById('headingEnglish');

let newsGerman = document.getElementById('newsGerman');
let headingGerman = document.getElementById('headingGerman');

// let popUpForm = document.getElementById('myForm');
let popUpForm = document.getElementsByClassName('form-popup');


function myhref()
{
  window.location.href = "./mainPage.html";
}

function indexPage()
{
  window.location.href = "./index.html";
}

function showEngDiv()
{
  englishNewsDiv.style.display = 'block';
  germanNewsDiv.style.display = 'none';
  language = englishDivBtn.value;
}

function showGermanDiv()
{
  germanNewsDiv.style.display = 'block';
  englishNewsDiv.style.display = 'none';
  language = germanDivBtn.value;
}

// Navbar Functions
function greetUsers()
{
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
}

function clock()
{
  let date = new Date().toLocaleDateString();
  let timeNow = new Date().toLocaleTimeString();
  let secondsClockHTML = document.getElementById('secondsClock');
  secondsClockHTML.innerHTML = `It's ${timeNow} !`;
}


setInterval(clock, 1000);
setInterval(greetUsers, 1000);
//fetchData('en');

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
      console.error(err);
    });
}
//fetchWeather();

function poloRimChange()
{
  let newImage = "./Car Images/Polo/Orange/volkswagen-polo-r-line-2018-3d-model-max-obj-mtl-3ds-fbx.jpg";
  let cardImg = document.getElementById('card-img');
  cardImg.src = newImage;
  document.getElementById('cart').innerHTML =
    `<p> Part Name : Rim<br>
  Cost : 20000<br>
  <hr>
  Total Cost : 7.2 Lakhs
</p>
<a href="poloRimCart.html" class="btn btn-primary">Shop The Look</a>`;
}

function poloDecalChange()
{
  let newImage = "./Car Images/Polo/Orange/R.jfif";
  let cardImg = document.getElementById('card-img');
  cardImg.src = newImage;
  document.getElementById('cart').innerHTML =
    `<p> Part Name : Rim<br>
  Cost : 10000<br>
  <hr>
  Total Cost : 7.1 Lakhs
</p>
<a href="poloDecalCart.html" class="btn btn-primary">Shop The Look</a>`;
}


function ventoRimChange()
{
  let newImage = "./Car Images/Vento/Red/GLI2.jpg";
  let cardImg = document.getElementById('card-img');
  cardImg.src = newImage;
  document.getElementById('cart').innerHTML =
    `<p> Part Name : Rim<br>
  Cost : 40000<br>
  <hr>
  Total Cost : 10.4 Lakhs
</p>
<a href="ventoRimCart.html" class="btn btn-primary">Shop The Look</a>`;
}

function unavialblePopup()
{
  alert('Sorry, This part is currently unaviable !');
}

function storeUnavialblePopup()
{
  alert('Sorry, This product is unaviable at your selected Store !');
}

function storeAvialblePopup()
{
  alert('Hurray, Item is available at your selected Store !');
}

function noDeliveryPopup()
{
  alert('Sorry, This product is not deliverable for Safety Reasons !');
}

function openForm()
{
  document.getElementById("myForm").style.display = "block";
}

function closeForm()
{
  document.getElementById("myForm").style.display = "none";
  document.getElementById("englishNewsDiv").style.display = "block";
  document.getElementById("form-check").style.display = "block";
}