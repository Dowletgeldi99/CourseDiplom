var mainsMenuLink = document.getElementById('a_mains');
var mainsMenu = document.getElementById('tabs-1-1');
var dessertsMenuLink = document.getElementById('a_desserts');
var dessertsMenu = document.getElementById('tabs-1-2');
var drinksMenuLink = document.getElementById('a_drinks');
var drinksMenu = document.getElementById('tabs-1-3');

 
mainsMenuLink.addEventListener("click", function(){
    mainsMenuLink.classList.add('active');
    mainsMenu.classList.add('show');    
    drinksMenuLink.classList.remove('active');
    dessertsMenuLink.classList.remove('active');
    dessertsMenu.classList.remove('show');
    drinksMenu.classList.remove('show');
    console.log(mainsMenu);
});
dessertsMenuLink.addEventListener("click", function(){
    dessertsMenuLink.classList.add('active');
    dessertsMenu.classList.add('show');
    mainsMenuLink.classList.remove('active');
    drinksMenuLink.classList.remove('active');
    mainsMenu.classList.remove('show');
    drinksMenu.classList.remove('show');
    console.log(dessertsMenu);
});
drinksMenuLink.addEventListener("click", function(){
    drinksMenuLink.classList.add('active');
    mainsMenuLink.classList.add('active');
    drinksMenu.classList.add('show');
    dessertsMenuLink.classList.remove('active');
    mainsMenuLink.classList.remove('active');
    dessertsMenu.classList.remove('show');
    mainsMenu.classList.remove('show');
    console.log(drinksMenu);
});

var hamburger = document.querySelector('.hamburger');
var navMenu = document.querySelector('.hamburger-nav');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});





$(document).ready(function() {

  $('#offersColumn').on('hover', function() {
    $('#offersButton').show();
  });
});