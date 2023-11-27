// var apiKey = "b9a398ec2d26558cd2d6b5d504f27538";
// const geocodingUrl = `https://api.openweathermap.org/data/2.5/weather?q=Gatlinburg&limit=50&appid=${apiKey}`;

// function allData() {
//   fetch(geocodingUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);

//       const gatlinburg = data.name;
//       const temperature = "Temperature: " + Math.round(1.8 * (data.main.temp - 273) + 32) + " °F";
//       const feelsLike = "Feels like: " + Math.round(1.8 * (data.main.feels_like - 273) + 32) + " °F";
//       const humidity = "Humidity: " + data.main.humidity + "%";
//       const windSpeed = "Wind Speed: " + data.wind.speed + " mph";
//       const imgCode = data.weather[0].icon;

//       createCard(gatlinburg, temperature, feelsLike, humidity, windSpeed, imgCode);
//     });
// }

// function createCard(gatlinburg, temperature, feelsLike, humidity, windSpeed, imgCode) {
//   const weatherConditions = [ temperature, feelsLike, humidity, windSpeed];

//   const leconteCard = document.getElementById("leconteCard")

//  const ulEl = document.createElement('ul');
//  ulEl.style.listStyle = 'none';
//  ulEl.style.textAlign = 'center';
//  ulEl.style.fontFamily = 'Spectral, serif';
//  ulEl.style.position = 'absolute';
// ulEl.style.top = '50px';  
// ulEl.style.left = '180px'; 
// ulEl.style.borderRadius = '10px';
// ulEl.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';



//   const city = gatlinburg;
//  const h2El = document.createElement ('h2');
//  h2El.style.color = 'white';
//  h2El.textContent = "Current Weather in " + city + " ,TN";
//  h2El.style.textAlign = 'center';
// h2El.style.fontFamily = 'Spectral, serif';
// h2El.style.fontSize = '24px';
// h2El.style.paddingTop = '10px';


// const image = document.createElement('img')
// image.setAttribute("src", `https://openweathermap.org/img/wn/${imgCode}@2x.png`)
// image.setAttribute("width", "150px"); 
// image.setAttribute("height", "150px");
// image.style.position = 'absolute';
// image.style.top = '25px'; // 


// const pEl = document.createElement ('p');
// pEl.style.color = 'white';
// pEl.style.fontFamily = 'Spectral, serif';
// pEl.style.fontSize = '16px';
// pEl.style.position = 'absolute';
// pEl.style.top = '150px';
// pEl.style.left = '30px';

// ifskiesShow (imgCode, pEl, image);




//  const weathercardgatDiv = document.createElement('div');
//  weathercardgatDiv.id = 'weatherContainer';
//  weathercardgatDiv.style.position = 'absolute';
//  weathercardgatDiv.style.top = '365px';  
//  weathercardgatDiv.style.left = '1175px'; 
//  weathercardgatDiv.style.zIndex = '2';
//  weathercardgatDiv.style.background = 'url(Images/DownSouth/DSC_0277.jpg)';
//  weathercardgatDiv.style.backgroundRepeat = 'no repeat';
//  weathercardgatDiv.style.backgroundSize = 'cover';
//  weathercardgatDiv.style.width = '400px';
//  weathercardgatDiv.style.height = '215px';
//  weathercardgatDiv.style.borderRadius = '25px';
//  weathercardgatDiv.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
 
 

//   for (let i = 0; i < weatherConditions.length; i++) {
//     const liEl = document.createElement('li');
//     liEl.textContent = weatherConditions[i];
//     liEl.style.color = 'white';
//     liEl.style.paddingTop ='10px';
//     console.log(weatherConditions[i]);
//     liEl.style.width = '150px';
   
    
  

//     ulEl.appendChild(liEl);
//   }

 
  

//   weathercardgatDiv.appendChild(h2El);
//   weathercardgatDiv.appendChild(image);
//   weathercardgatDiv.appendChild(pEl);
//   weathercardgatDiv.appendChild(ulEl);
//  leconteCard.appendChild(weathercardgatDiv);
// }


// function ifskiesShow(imgCode, pEl,image) {
//   if (imgCode === "13d" || imgCode === "13n") {
//     pEl.textContent = "// Expect sleet or snow";

//     image.setAttribute ( "src", "Images/DownSouth/weatherIcons/snowIcon.png")
//     image.style.height = '100px';
//     image.style.top = '40px';
//     image.style.left = '15px';

// } else if (imgCode === "11d" || imgCode === "11n") {
//     pEl.textContent = "// Thunderstorm incoming!";

//     image.setAttribute ( "src", "Images/DownSouth/weatherIcons/thunderstormIcon.png")
//     image.style.height = '100px';
//     image.style.top = '40px';
//     image.style.left = '15px';


// } else if (imgCode === "09d" || imgCode === "09n") {
//     pEl.textContent = "// Expect a drizzle";

//     image.setAttribute ( "src", "Images/DownSouth/weatherIcons/rainIcon.png")
//     image.style.height = '100px';
//     image.style.top = '40px';
//     image.style.left = '15px';

// } else if (imgCode === "10d" || imgCode === "10n") {
//     pEl.textContent = "// Heavy Rain Showers";

//     image.setAttribute ( "src", "Images/DownSouth/weatherIcons/rainIcon.png")
//     image.style.height = '100px';
//     image.style.top = '40px';
//     image.style.left = '15px';

// } else if (imgCode === "50d" || imgCode === "50n") {
//     pEl.textContent = "Visibility low";

//     image.setAttribute ( "src", "Images/DownSouth/weatherIcons/lowVis.png")
//     image.style.height = '100px';
//     image.style.top = '40px';
//     image.style.left = '15px';

// } else if (imgCode === "01d" || imgCode === "01n") {
//     pEl.textContent = "// Clear Skies";

//     image.setAttribute ( "src", "Images/DownSouth/weatherIcons/sun.png")
//     image.style.height = '100px';
//     image.style.width = 'auto';
//     image.style.top = '40px';
//     image.style.left = '40px';

// } else if (imgCode === "02d" || imgCode === "02n") {
//     pEl.textContent = "// Expect a few clouds";

//     image.setAttribute ( "src", "Images/DownSouth/weatherIcons/fewcloudsIcon.png")
//     image.style.height = '100px';
//     image.style.width = 'auto';
//     image.style.top = '40px';
//     image.style.left = '50px';

// } else if (imgCode === "03d" || imgCode === "03n") {
//     pEl.textContent = "// Scattered Clouds";

//     image.setAttribute ( "src", "Images/DownSouth/weatherIcons/scatteredCloudicon.png")
//     image.style.height = '100px';
//     image.style.top = '40px';
//     image.style.left = '15px';

// } else if (imgCode === "04d" || imgCode === "04n") {
//     pEl.textContent = "// Overcast";

//     image.setAttribute ( "src", "Images/DownSouth/weatherIcons/overcastIcon.webp")
//     image.style.height = '100px';
//     image.style.top = '40px';
//     image.style.left = '15px';

// }
// }

// createCard();
// allData();


var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 3000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}




