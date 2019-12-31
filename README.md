# GRE Image Slider (JS)
![](https://lh3.googleusercontent.com/E7jYw1ML30w3JGfU5S6Mm7JXUd2-gLSHL4iZ_6r5yLyuyMKpFLDweN1dcfSfIWKHBgN4a8SfR2Vh4IwNc3zS=w1600-h789)
<br><br>

## Description
This project made especially for making image slider feature easier. By giving a lightweight plugin for developers to customize almost any image slider they want.

<br>

## Features

- Support all browsers and devices.
- SEO-Friendly.
- Left & Right navigation arrows.
- Responsive.
- Very simple to setup and configure (no dependencies).
- Multiple animations.
- Multiple themes.
- Full control of colors, sizes themes and animations.
- Lightweight (31 KB).

<br>

## Requirements
- Jquery

<br>

## Get Started
All you need to install this plugin is to include **Jquery** and **gre-slider.min.js**, before the closing of **body** tag of the page (`</body>`) as shown below:

````html5
<script src="js/jquery.js"></script>
<script src="js/gre-slider.min.js"></script>
````

then we will add our slider code and place it anywhere we want, the stracture of the code should be as following:

````html5
<div id="gre-slider">
    <div id="per-gre-slider" data-img="images/golden-gate-bridge.jpg"></div>
    <div id="per-gre-slider" data-img="images/utah.jpg"></div>
    <div id="per-gre-slider" data-img="images/road.jpg"></div>
    <div id="per-gre-slider" data-img="images/sky.jpg"></div>
    <div id="per-gre-slider" data-img="images/dawn.jpg"></div>
</div>
````

you can add images as you like but you've to change the **"data-img"** to the image link.
<br>

After completing all the previous steps, let's add this code before the end of the body tag of our page as following:

````javascript
$(document).ready(() => {
	$('#gre-slider').greSlider({
		fullscreen: false,
		width: 700,
		height: 400,
		autoPlay: true
	});
});
````
Now the slider is ready to run on your page!

<br>

## Options
You can use the following options as you need:

| Option  | Type | Default Value  | Description |
|:------------|:------------:|:---------------:|:-----|
| fullscreen | Boolean | true | Let the slider take the full width of the container |
| width | Int | 700 | The width of the slider (in pixles). <br></br(if>(if **fullscreen** is **true** this option will be ignored). |
| height | Int | 500 | The height of the slider (in pixles). |
| borderRadius | Int | 3 | The **border-radius** of the slider |
| animation | String | 'fadeIn' | The animation of slider.<br>  You can use these animations:<br> (none, fadeIn, slideTop, slideBottom, slideLeft, slideRight, ripple, rotation, theater, slideTheater, triangle). |
| delay | Int | 1000 | Time (in millisecons) to wait before changing to the next slide. |
| dots | Boolean | true | Show the pagination over the slider. |
| dotsColor | String | '#ccc' | Change the color of pagination.  |
| dotsStyle | String | 'circle' | The dot shape style.<br>You can set one of the following:<br>(circle, dash, square)  |
| dotsPosition | String | 'bottomLeft' | The position of the pagination of the slider.<br>You can set one of the following:<br>(topLeft, topRight, bottomRight, bottomLeft, middleTop, middleBottom)  |
| selectedDotsColor | String | '#9e9e9e' | Change the color of the current slide dot. |
| arrowColor | String | '#ccc' | Change the color of left & right arrows. |
| arrowsPosition | String | 'middleSides' | The position of navigation arrows of the slider.<br>You can set one of the following:<br>(topSides, middleSides, bottomSides, topLeft, topRight, bottomLeft, bottomRight) |
| rippleColor | String | '#FFF' | Change the color of the **ripple** animation (it will be ignored if your animation is not **ripple**). |
| keyboard | Boolean | false | Enable left & right arrows of the keyboard to change the sliders. |
| autoPlay | Boolean | false | If you set this option to **true** the slider will start navigating automatically |
| onLoad | Function | null | You can set a function for this option to let you know when the slider has fully loaded. |
<br>

## Browsers
GRE Slider has been tested on the following browsers:
- Google Chrome
- Mozilla Firefox
- UC Browser


<br>

## Credits
GRE Slider was made by [Ghadeer R. Majeed](https://github.com/ghadeerraad "Ghadeer R. Majeed") from [GRE Development](https://www.gredev.net/en "GRE Development") under [MIT License](https://github.com/gre-dev/gre-slider/blob/master/LICENSE "MIT License").
