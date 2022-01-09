// Slideshow Javascript

var slider_img = document.querySelector('.slider-img');
var img = [
"zwaan1.jpeg", 
"landschap2.jpg",
"olinda3.jpg",
"paleisstraat4.jpg",
"melkmeisje5.jpeg"
];


// De 1ste afbeelding van de index
var i = 0;

// Functie knop "vorige"
function prev(){
	if(i <= 0) i = img.length;	
	i--;
	setImg();		 
}

// Functie knop "volgende" 
function next(){
	if(i >= img.length-1) i = -1;
	i++;
	setImg();			 
}

// Houdt de element up to date uit de img var.
function setImg(){
    slider_img.setAttribute("src", "img/" + img[i]);
	
}
