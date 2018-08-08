$(document).ready(function () {
var count=1;
var idInterval;

karusel(3000);

function karusel(t){
    idInterval=setInterval(function () {


switch(count){
    case 1: $("#Images_main").attr("src","Images/1.jpg");count++;break;
    case 2: $("#Images_main").attr("src","Images/2.jpg");count++;break;
    case 3: $("#Images_main").attr("src","Images/3.jpg");count++;break;
    case 4: $("#Images_main").attr("src","Images/4.jpg");count++;break;
    case 5: $("#Images_main").attr("src","Images/5.jpg");count++;break;
    case 6: $("#Images_main").attr("src","Images/6.jpg");count=1;break;
}
    },t)
}
});
/**
 * Created by Jesus Christos on 06.08.2018.
 */
