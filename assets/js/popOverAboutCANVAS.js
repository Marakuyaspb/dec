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

/*var Stitches = {x: 130, y: 200, w: 35, h: 35};
var Pillow = {x: 170, y: 130, w: 35, h: 35};
var Front = {x: 390, y: 220, w: 35, h: 35};
var Back = {x: 470, y: 90, w: 35, h: 35};
var Paw = {x: 560, y: 325, w: 35, h: 35};*/

canvas.addEventListener('mousemove', function(event, pinStitches) {
  let popAboutStitches = document.getElementById('popAboutStitches');


    let mouseX = event.clientX - canvas.offsetLeft;
    let mouseY = event.clientY - canvas.offsetTop;
  // Check whether point is inside circle
  if (ctx.isPointInPath(390, 220)) {
    console.log('yes');
    popAboutStitches.style.display = 'block';
  }
  else {
    console.log('no');
    popAboutStitches.style.display = 'none';   
  }
});


function windowToCanvas(canvas, x, y) {
    var bbox = canvas.getBoundingClientRect();
    return { x: x - bbox.left * (canvas.width / bbox.width),
        y: y - bbox.top * (canvas.height / bbox.height)
    };
}
canvas.onmousemove = function (e) {
    var loc = windowToCanvas(canvas, e.clientX, e.clientY);
    if (e.clientX < 390 && e.clientX > 425)
   
    {console.log('Hey?');}
};



/*


let popAboutStitches = document.getElementById('popAboutStitches');
let popAboutPillow = document.getElementById('popAboutPillow');
let popAboutFront = document.getElementById('popAboutFront');
let popAboutBack = document.getElementById('popAboutBack');
let popAboutPaw = document.getElementById('popAboutPaw');



function showStitches(){
  popAboutStitches.style.display = 'block';
}
function hidStitches(){
  popAboutStitches.style.display = 'none';
}



function showPillow(){
  popAboutPillow.style.display = 'block';
}
function hidPillow(){
  popAboutPillow.style.display = 'none';
}



function showFront(){
    popAboutFront.style.display = 'block';
}
function hidFront(){
  popAboutFront.style.display = 'none';
}



function showBack(){
  popAboutBack.style.display = 'block';
}
function hidBack(){
  popAboutBack.style.display = 'none';
}



function showPaw(){
  popAboutPaw.style.display = 'block';
}
function hidPaw(){
  popAboutPaw.style.display = 'none';
}

*/