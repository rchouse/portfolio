"use strict";
var $ = function (id) { return document.getElementById(id); };
//This is the timer for the image change
var imageCache = [];
var imageCounter = 0;
var timer;

var runSlideShow = function() {
    imageCounter = (imageCounter + 1) % imageCache.length;
    var image = imageCache[imageCounter];
    $("image").src = image.src;
    $("caption").firstChild.nodeValue = image.title;
};

window.onload = function () {
    var listNode = $("image_list");
    var links = listNode.getElementsByTagName("a");
	var i, link, image;
    for ( i = 0; i < links.length; i++ ) {
        link = links[i];
        image = new Image();
        image.src = link.getAttribute("href");
        image.title = link.getAttribute("title");
        imageCache[imageCache.length] = image;
    }

    $("start").onclick = function() {
        //Make my slide change every 5 seconds
        runSlideShow();
        timer = setInterval(runSlideShow, 5000);
        $("start").setAttribute("disabled", "true");
        $("pause").removeAttribute("disabled");
    };
    $("pause").onclick = function() {
        clearInterval(timer);
        $("start").removeAttribute("disabled");
        $("pause").setAttribute("disabled", "true");
    };
};