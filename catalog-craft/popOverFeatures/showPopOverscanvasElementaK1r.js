function showPopOverscanvasElementaK1r(event){
  var canvasElementaK1r = document.getElementById("canvasConsonoCorner");
  var ctx = canvasElementaK1r.getContext('2d');

  const canvasElementaK1r_width = canvasElementaK1r.width = 1600;
  const canvasElementaK1r_heigh = canvasElementaK1r.height = 800;

/* сделать эту штуку вариативной из массива */

  var pinStitchesElementaK1r = new Image();
  pinStitchesElementaK1r.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinStitchesElementaK1r.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinStitchesElementaK1r, 280, 400, 50, 50);
  }
  var pinPillowElementaK1r = new Image();
  pinPillowElementaK1r.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPillowElementaK1r.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPillowElementaK1r, 370, 260, 50, 50);
  }
  var pinFrontElementaK1r = new Image();
  pinFrontElementaK1r.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinFrontElementaK1r.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinFrontElementaK1r, 760, 470, 50, 50);
  }
  var pinBackElementaK1r = new Image();
  pinBackElementaK1r.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinBackElementaK1r.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinBackElementaK1r, 890, 180, 50, 50);
  }
  var pinPawElementaK1r = new Image();
  pinPawElementaK1r.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPawElementaK1r.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPawElementaK1r, 1070, 620, 50, 50);
  }

  canvasElementaK1r.style.width = canvasElementaK1r.offsetWidth + 'px';
  canvasElementaK1r.style.height = canvasElementaK1r.offsetHeight + 'px';

  let popAboutStitchesElementaK1r = document.getElementById('popAboutStitchesElementaK1r');     
  let popAboutPillowElementaK1r = document.getElementById('popAboutPillowElementaK1r');
  let popAboutFrontElementaK1r = document.getElementById('popAboutFrontElementaK1r');
  let popAboutBackElementaK1r = document.getElementById('popAboutBackElementaK1r');
  let popAboutPawElementaK1r = document.getElementById('popAboutPawElementaK1r');

  const mouse = {
    x:0,
    y:0,
    left: false,
    right: false,
    over: false,
  }; 

  canvasElementaK1r.addEventListener('mousemove', function(e) {
    const rect = canvasElementaK1r.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    /*console.log(mouse.x, mouse.y);*/

    if (mouse.x >= 280 && mouse.x <= 330 && mouse.y >= 400 && mouse.y <= 450) {
      popAboutStitchesElementaK1r.style.display = 'block';
    }
    else if (mouse.x >= 370 && mouse.x <= 430 && mouse.y >= 260 && mouse.y <= 310) {
      popAboutPillowElementaK1r.style.display = 'block';
    }
    else if (mouse.x >= 760 && mouse.x <= 810 && mouse.y >= 470 && mouse.y <= 520) {
      popAboutFrontElementaK1r.style.display = 'block';
    }
    else if (mouse.x >= 890 && mouse.x <= 940 && mouse.y >= 180 && mouse.y <= 230) {
      popAboutBackElementaK1r.style.display = 'block';
    }
    else if (mouse.x >= 1070 && mouse.x <= 1120 && mouse.y >= 620 && mouse.y <= 670) {
      popAboutPawElementaK1r.style.display = 'block';
    }

    else {
      popAboutStitchesElementaK1r.style.display = 'none';
      popAboutPillowElementaK1r.style.display = 'none'; 
      popAboutFrontElementaK1r.style.display = 'none'; 
      popAboutFrontElementaK1r.style.display = 'none'; 
      popAboutBackElementaK1r.style.display = 'none'; 
      popAboutPawElementaK1r.style.display = 'none';   
    }
  });
}