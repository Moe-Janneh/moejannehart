//js/personalwork.js

var slider_img = document.querySelector('.slider-img');
var images = ['agency.jpg', 'colorfight.jpg', 'Jackie.jpg', 'woomy.jpg', 'fall.jpg', 'multiversusmains_wide.jpg', 'crumble1.jpg', 'crumble2.jpg', 'crumble3.jpg', 'crumble4.jpg', 'ad_storyboard.jpg', 'Kiki_wide.jpg', 'liv_wide.jpg', 'lucy_wide.jpg', 'sprinkle.jpg'];
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
	return slider_img.setAttribute('src', 'images/Personal Work/' + images[i]);
}