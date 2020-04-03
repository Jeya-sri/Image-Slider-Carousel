var slider_content = document.getElementById('box');

// contain images in an array
var image = [
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers3c9095c4.jpg",
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers3c9095c4.jpg",
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers2f856ebb.jpg",
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers40b07bc7.jpg",
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers51fd2ccc.jpg"
];

var i = image.length;


// function for next slide 

function nextImage() {
    if (i < image.length) {
        i = i + 1;
    } else {
        i = 1;
    }
    slider_content.innerHTML = "<img class='images' src=" + image[i - 1] + ">";
}


// function for prew slide

function prevImage() {

    if (i < image.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = image.length;
    }
    slider_content.innerHTML = "<img class='immages' src=" + image[i - 1] + ">";

}


// script for auto image slider

setInterval(nextImage, 4000);