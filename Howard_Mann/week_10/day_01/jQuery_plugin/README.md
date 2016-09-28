# Simple Slider

## Features
- Simple jQuery image slider plugin
- Autoplay cycle of chosen images
- Infinite looping
- Customise carousel window style
- Set image cycle interval

## Instructions
#### Install and require
Copy ```slider.js``` file and require after latest version of jQuery and before your main JavaScript file
```html
<!-- Example script load in HTML file -->
<script src="js/jquery.js"></script>
<script src="js/slider.js"></script>
<script src="js/main.js"></script>
```

#### Nest HTML images and customise CSS
Nest images within any two custom containers. Recommend duplicating first image at the end for smooth carousel UX.
```html
<div class="window">
  <div class="container">
    <img src="http://unsplash.it/g/300/200">
    <img src="http://unsplash.it/150/200/?image=0">
    <img src="http://unsplash.it/400/200/?image=100">
    <img src="http://unsplash.it/100/200/?image=200">
    <img src="http://unsplash.it/700/200/?image=30">
    <img src="http://unsplash.it/300/200/?image=400">
    <img src="http://unsplash.it/g/300/200">
  </div>
</div>
```
Set window container width and any desired CSS styling.
```css
.window {
  width: 300px;
}
```

#### Call slider plugin in JavaScript file
Select the jQuery container element and call .slider() to initialize. Slider function takes one argument, being the image sliding interval in milliseconds.  

```javascript
$(document).ready(function(){
  $('.window').slider(3000);
});
```


## Author
Howie_Burger (Sep 2016)...call me
