var canvasBig = document.getElementById("canvasBig");
var ctx = canvasBig.getContext('2d');

const canvasBig_width = canvasBig.width = 1600;
const canvasBig_heigh = canvasBig.height = 800;


/* сделать эту штуку вариативной из массива */
const sofaBig = new Image();
sofaBig.src = "http://decona.ru/wp-content/uploads/2023/02/Portland_for-details-11.png";


var pinStitchesBig = new Image();
pinStitchesBig.src = 'http://decona.ru/wp-content/uploads/2023/02/pin.svg';
pinStitchesBig.onload = function(){
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(pinStitchesBig, 280, 400, 50, 50);
      }
var pinPillowBig = new Image();
pinPillowBig.src = 'http://decona.ru/wp-content/uploads/2023/02/pin.svg';
pinPillowBig.onload = function(){
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(pinPillowBig, 370, 260, 50, 50);
}
var pinFrontBig = new Image();
pinFrontBig.src = 'http://decona.ru/wp-content/uploads/2023/02/pin.svg';
pinFrontBig.onload = function(){
  ctx.imageSmoothingEnabled = false;
        ctx.drawImage(pinFrontBig, 760, 470, 50, 50);
      }
var pinBackBig = new Image();
pinBackBig.src = 'http://decona.ru/wp-content/uploads/2023/02/pin.svg';
pinBackBig.onload = function(){
  ctx.imageSmoothingEnabled = false;
        ctx.drawImage(pinBackBig, 890, 180, 50, 50);
      }
var pinPawBig = new Image();
pinPawBig.src = 'http://decona.ru/wp-content/uploads/2023/02/pin.svg';
pinPawBig.onload = function(){
  ctx.imageSmoothingEnabled = false;
        ctx.drawImage(pinPawBig, 1070, 620, 50, 50);
      }


canvasBig.style.width = canvasBig.offsetWidth + 'px';
canvasBig.style.height = canvasBig.offsetHeight + 'px';


let popAboutStitchesBig = document.getElementById('popAboutStitchesBig');     
let popAboutPillowBig = document.getElementById('popAboutPillowBig');
let popAboutFrontBig = document.getElementById('popAboutFrontBig');
let popAboutBackBig = document.getElementById('popAboutBackBig');
let popAboutPawBig = document.getElementById('popAboutPawBig');


const mouse = {
  x:0,
  y:0,
  left: false,
  right: false,
  over: false,
}; 

canvasBig.addEventListener('mousemove', function(e) {
  const rect = canvasBig.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
  console.log(mouse.x, mouse.y);
  

  if (mouse.x >= 280 && mouse.x <= 330 && mouse.y >= 400 && mouse.y <= 450) {
    popAboutStitchesBig.style.display = 'block';
  }
  else if (mouse.x >= 370 && mouse.x <= 430 && mouse.y >= 260 && mouse.y <= 310) {
    popAboutPillowBig.style.display = 'block';
  }
  else if (mouse.x >= 760 && mouse.x <= 810 && mouse.y >= 470 && mouse.y <= 520) {
    popAboutFrontBig.style.display = 'block';
  }
  else if (mouse.x >= 890 && mouse.x <= 940 && mouse.y >= 180 && mouse.y <= 230) {
    popAboutBackBig.style.display = 'block';
  }
  else if (mouse.x >= 1070 && mouse.x <= 1120 && mouse.y >= 620 && mouse.y <= 670) {
    popAboutPawBig.style.display = 'block';
  }

  else {
    popAboutStitchesBig.style.display = 'none';
    popAboutPillowBig.style.display = 'none'; 
    popAboutFrontBig.style.display = 'none'; 
    popAboutFrontBig.style.display = 'none'; 
    popAboutBackBig.style.display = 'none'; 
    popAboutPawBig.style.display = 'none';   
  }
});






/* TABLET */

/*var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

const canvas_width = canvas.width = 800;
const canvas_heigh = canvas.height = 400;


const sofa = new Image();
sofa.src = "http://decona.ru/wp-content/uploads/2023/02/Portland_for-details-11.png";


var pinStitches = new Image();
pinStitches.src = 'http://decona.ru/wp-content/uploads/2023/02/pin.svg';
pinStitches.onload = function(){
        ctx.drawImage(pinStitches, 130, 200, 35, 35);
      }
var pinPillow = new Image();
pinPillow.src = 'http://decona.ru/wp-content/uploads/2023/02/pin.svg';
pinPillow.onload = function(){
        ctx.drawImage(pinPillow, 170, 130, 35, 35);
      }
var pinFront = new Image();
pinFront.src = 'http://decona.ru/wp-content/uploads/2023/02/pin.svg';
pinFront.onload = function(){
        ctx.drawImage(pinFront, 390, 220, 35, 35);
      }
var pinBack = new Image();
pinBack.src = 'http://decona.ru/wp-content/uploads/2023/02/pin.svg';
pinBack.onload = function(){
        ctx.drawImage(pinBack, 470, 90, 35, 35);
      }
var pinPaw = new Image();
pinPaw.src = 'http://decona.ru/wp-content/uploads/2023/02/pin.svg';
pinPaw.onload = function(){
        ctx.drawImage(pinPaw, 560, 325, 35, 35);
      }


canvas.style.width = canvas.offsetWidth + 'px';
canvas.style.height = canvas.offsetHeight + 'px';


let popAboutStitches = document.getElementById('popAboutStitches');     
let popAboutPillow = document.getElementById('popAboutPillow');
let popAboutFront = document.getElementById('popAboutFront');
let popAboutBack = document.getElementById('popAboutBack');
let popAboutPaw = document.getElementById('popAboutPaw');



canvas.addEventListener('mousemove', function(e) {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
  console.log(mouse.x, mouse.y);
  

  if (mouse.x >= 130 && mouse.x <= 165 && mouse.y >= 200 && mouse.y <= 235) {
    popAboutStitches.style.display = 'block';
  }
  else if (mouse.x >= 170 && mouse.x <= 205 && mouse.y >= 130 && mouse.y <= 165) {
    popAboutPillow.style.display = 'block';
  }
  else if (mouse.x >= 390 && mouse.x <= 425 && mouse.y >= 220 && mouse.y <= 255) {
    popAboutFront.style.display = 'block';
  }
  else if (mouse.x >= 470 && mouse.x <= 505 && mouse.y >= 90 && mouse.y <= 125) {
    popAboutBack.style.display = 'block';
  }
  else if (mouse.x >= 560 && mouse.x <= 595 && mouse.y >= 325 && mouse.y <= 360) {
    popAboutPaw.style.display = 'block';
  }

  else {
    popAboutStitches.style.display = 'none';
    popAboutPillow.style.display = 'none'; 
    popAboutFront.style.display = 'none'; 
    popAboutFront.style.display = 'none'; 
    popAboutBack.style.display = 'none'; 
    popAboutPaw.style.display = 'none';   
  }
});*/