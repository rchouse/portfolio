"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var image1 = $("image1");           
    var image2 = $("image2");           
    
    //Ge tthe images you need here
    var links = $("image_list").getElementsByTagName("a");
    var i, link, image;
    for ( i = 0; i < links.length; i++ ) {
        link = links[i];
        image = new Image();
        image.src = link.href;
    };

    image1.onmouseover = function() {
        image1.src = "images/release.jpg";
    };
    image1.onmouseout = function() {
        image1.src = "images/hero.jpg";
    };
    
    image2.onmouseover = function() {
        image2.src = "images/deer.jpg";
    };
    image2.onmouseout = function() {
        image2.src = "images/bison.jpg";
    };
};
