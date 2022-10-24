//js/main.js

var slider_img = document.querySelector('.slider-img');
var images = ['leviathan_turtle.jpg', 'leviathan_whale.jpg', 'leviathan_treehouse.jpg', 'website_landing_page.jpg', 'valhalla_landingpage_sketches.jpg', 'magazine_cover_thumbnails_1.jpg', 'magazine_cover_thumbnails_2.jpg', 'capybara_soup game_3.jpg'];
var i = 0;

function prev()
{
	if(i <= 0) i =images.length;
	i--;
	return setImg();
}

function next()
{
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();
}

function setImg()
{
	return slider_img.setAttribute('src', 'images/Concept Art/' + images[i]);
}