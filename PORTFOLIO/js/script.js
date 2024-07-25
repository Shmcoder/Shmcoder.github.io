// htmlcss progress circular bar 
// HTML progress circular bar
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlEndValue = 70;

htmlValue.textContent = `${htmlEndValue}%`;
htmlProgress.style.background = `conic-gradient(#fca61f ${htmlEndValue * 3.6}deg, #ededed 0deg)`;

// JavaScript progress circular bar
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptEndValue = 75;

javascriptValue.textContent = `${javascriptEndValue}%`;
javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptEndValue * 3.6}deg, #ededed 0deg)`;

// PHP progress circular bar
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpEndValue = 80;

phpValue.textContent = `${phpEndValue}%`;
phpProgress.style.background = `conic-gradient(#20c997 ${phpEndValue * 3.6}deg, #ededed 0deg)`;

// ReactJS progress circular bar
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactEndValue = 30;

reactValue.textContent = `${reactEndValue}%`;
reactProgress.style.background = `conic-gradient(#3f396d ${reactEndValue * 3.6}deg, #ededed 0deg)`;



// javascript for sticky navbar even if u scroll the navbar will be fixed
// document.addEventListener("DOMContentLoaded", function(){
//   window.addEventListener('scroll', function() {
//       if (window.scrollY > 50) {
//         document.getElementById('navbar-top').classList.add('fixed-top');
//         // add padding top to show content behind navbar
//         navbar_height = document.querySelector('.navbar').offsetHeight;
//         document.body.style.paddingTop = navbar_height + 'px';
//       } else {
//         document.getElementById('navbar-top').classList.remove('fixed-top');
//          // remove padding top from body
//         document.body.style.paddingTop = '0';
//       } 
//   });
// }); 


// adding funtionality to back to top button 

//Get the button
