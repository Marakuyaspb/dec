var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

const canvas_width = canvas.width = 400;
const canvas_heigh = canvas.height = 200;

const sofa = new Image();
sofa.src = "http://decona.ru/wp-content/uploads/2023/02/Portland_for-details-11.png";

const pinStitches = new Image();
pinStitches.src = "http://decona.ru/wp-content/uploads/2023/02/pop-point.png";
const pinPillow = new Image();
pinPillow.src = "http://decona.ru/wp-content/uploads/2023/02/pop-point.png";
const pinFront = new Image();
pinFront.src = "http://decona.ru/wp-content/uploads/2023/02/pop-point.png";
const pinBack = new Image();
pinBack.src = "http://decona.ru/wp-content/uploads/2023/02/pop-point.png";
const pinPaw = new Image();
pinPaw.src = "http://decona.ru/wp-content/uploads/2023/02/pop-point.png";






let popAboutStitches = document.getElementById('popAboutStitches');
let popAboutPillow = document.getElementById('popAboutPillow');
let popAboutFront = document.getElementById('popAboutFront');
let popAboutBack = document.getElementById('popAboutBack');
let popAboutPaw = document.getElementById('popAboutPaw');

/* Нитки прочные и турецкие */
function showStitches(){
  popAboutStitches.style.display = 'block';
}
function hidStitches(){
  popAboutStitches.style.display = 'none';
}

/* Подушка */
function showPillow(){
  popAboutPillow.style.display = 'block';
}
function hidPillow(){
  popAboutPillow.style.display = 'none';
}

/* Край дивана */
function showFront(){
    popAboutFront.style.display = 'block';
}
function hidFront(){
  popAboutFront.style.display = 'none';
}

/* Спинка дивана */
function showBack(){
  popAboutBack.style.display = 'block';
}
function hidBack(){
  popAboutBack.style.display = 'none';
}

/* Ножка дивана */
function showPaw(){
  popAboutPaw.style.display = 'block';
}
function hidPaw(){
  popAboutPaw.style.display = 'none';
}

