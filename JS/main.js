var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function myFunction() {
  var x = document.getElementById("navbar");      //gets the elemenet with the id="navbar"
  if (x.className === "topnav") {                 //if the element has a class="topnav"
    x.className += " responsive";                 //we add the class responsive
  } else {
    x.className = "topnav";                      //if not, we just erase the class and add topnav
  }
}



