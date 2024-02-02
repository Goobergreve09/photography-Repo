

  var player;

  function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
	  height: '500',
	  width: '850',
	  videoId: 'ijJNygndrd0',
	  events: {
		'onReady': onPlayerReady
	  }
	});
  }
  
  function onPlayerReady(event) {
	event.target.playVideo();
  }


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






