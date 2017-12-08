//google map ali
function initMap() {
  let paris = {lat:48.851211 , lng: 2.306281};
  let et = {lat: 48.8584, lng: 2.2945};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: paris
  });

  // these set different markers you want to show on your map
  let markerbb = new google.maps.Marker({
    position: et,
    map: map,
    
  });
    
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }

    var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
}
}