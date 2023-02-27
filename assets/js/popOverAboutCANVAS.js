var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

const canvas_width = canvas.width = 800;
const canvas_heigh = canvas.height = 400;

/* сделать эту штуку вариативной из массива */
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

/*
var Stitches = {x: 130, y: 200, w: 35, h: 35};
var Pillow = {x: 170, y: 130, w: 35, h: 35};
var Front = {x: 390, y: 220, w: 35, h: 35};
var Back = {x: 470, y: 90, w: 35, h: 35};
var Paw = {x: 560, y: 325, w: 35, h: 35};
*/
canvas.style.width = canvas.offsetWidth + 'px';
canvas.style.height = canvas.offsetHeight + 'px';


let popAboutStitches = document.getElementById('popAboutStitches');     
let popAboutPillow = document.getElementById('popAboutPillow');
let popAboutFront = document.getElementById('popAboutFront');
let popAboutBack = document.getElementById('popAboutBack');
let popAboutPaw = document.getElementById('popAboutPaw');


const mouse = {
  x:0,
  y:0,
  left: false,
  right: false,
  over: false,
}; 

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
});