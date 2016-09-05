var img = document.getElementsByTagName('img')[0];
var dollImg = document.getElementById('doll');

img.style.left = 0;
img.style.right = 0;
$('#doll').css('float', 'right');
dollImg.style.top = "300px";
img.style.top = "300px";
var newleft = 0;
var maxWidth = window.innerWidth - 296; //296 is the length od the cat
var newRight = maxWidth;
var animateright;

var catWalk = function() {
    newleft += 10;
    img.style.left = newleft + 'px';
    if (parseInt(img.style.left) >= maxWidth) {
        // clearInterval(animate);
        img.style.webkitTransform = "scaleX(-1)";
        img.style.msTransform = "scaleX(-1)";
        img.style.transform = "scaleX(-1)";
        $('#doll').css('float', 'left');
        animateright = setInterval(walkBack, 100);
        clearInterval(animate);
    }

};

var walkBack = function() {

    $('#container').css('background-image', 'url(floor2.jpg)');
    newleft = newleft - 10;
    img.style.left = newleft + 'px';
    if (parseInt(img.style.left) === 0) {
        clearInterval(animateright);
        clearInterval(animate);

        $('#baby').css('opacity', '0');
        $('#container').css('background-image', 'url(floor3.png)');
        $('#doll').css('margin-left', '500px');
        $('#doll').css('margin-top', '10px');
        $('#doll').css('height', '270px');

    }
};
var animate = setInterval(catWalk, 100);
// var animateright = setInterval(walkBack,30);
