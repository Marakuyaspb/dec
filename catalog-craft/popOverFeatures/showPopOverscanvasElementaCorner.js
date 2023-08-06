function showPopOverscanvasElementaCorner(event){
  var canvasElementaCorner = document.getElementById("canvasConsonoCorner");
  var ctx = canvasElementaCorner.getContext('2d');

  const canvasElementaCorner_width = canvasElementaCorner.width = 1600;
  const canvasElementaCorner_heigh = canvasElementaCorner.height = 800;

/* сделать эту штуку вариативной из массива */

  var pinStitchesElementaCorner = new Image();
  pinStitchesElementaCorner.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinStitchesElementaCorner.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinStitchesElementaCorner, 280, 400, 50, 50);
  }
  var pinPillowElementaCorner = new Image();
  pinPillowElementaCorner.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPillowElementaCorner.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPillowElementaCorner, 370, 260, 50, 50);
  }
  var pinFrontElementaCorner = new Image();
  pinFrontElementaCorner.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinFrontElementaCorner.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinFrontElementaCorner, 760, 470, 50, 50);
  }
  var pinBackElementaCorner = new Image();
  pinBackElementaCorner.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinBackElementaCorner.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinBackElementaCorner, 890, 180, 50, 50);
  }
  var pinPawElementaCorner = new Image();
  pinPawElementaCorner.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPawElementaCorner.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPawElementaCorner, 1070, 620, 50, 50);
  }

  canvasElementaCorner.style.width = canvasElementaCorner.offsetWidth + 'px';
  canvasElementaCorner.style.height = canvasElementaCorner.offsetHeight + 'px';

  let popAboutStitchesElementaCorner = document.getElementById('popAboutStitchesElementaCorner');     
  let popAboutPillowElementaCorner = document.getElementById('popAboutPillowElementaCorner');
  let popAboutFrontElementaCorner = document.getElementById('popAboutFrontElementaCorner');
  let popAboutBackElementaCorner = document.getElementById('popAboutBackElementaCorner');
  let popAboutPawElementaCorner = document.getElementById('popAboutPawElementaCorner');

  const mouse = {
    x:0,
    y:0,
    left: false,
    right: false,
    over: false,
  }; 

  canvasElementaCorner.addEventListener('mousemove', function(e) {
    const rect = canvasElementaCorner.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    /*console.log(mouse.x, mouse.y);*/

    if (mouse.x >= 280 && mouse.x <= 330 && mouse.y >= 400 && mouse.y <= 450) {
      popAboutStitchesElementaCorner.style.display = 'block';
    }
    else if (mouse.x >= 370 && mouse.x <= 430 && mouse.y >= 260 && mouse.y <= 310) {
      popAboutPillowElementaCorner.style.display = 'block';
    }
    else if (mouse.x >= 760 && mouse.x <= 810 && mouse.y >= 470 && mouse.y <= 520) {
      popAboutFrontElementaCorner.style.display = 'block';
    }
    else if (mouse.x >= 890 && mouse.x <= 940 && mouse.y >= 180 && mouse.y <= 230) {
      popAboutBackElementaCorner.style.display = 'block';
    }
    else if (mouse.x >= 1070 && mouse.x <= 1120 && mouse.y >= 620 && mouse.y <= 670) {
      popAboutPawElementaCorner.style.display = 'block';
    }

    else {
      popAboutStitchesElementaCorner.style.display = 'none';
      popAboutPillowElementaCorner.style.display = 'none'; 
      popAboutFrontElementaCorner.style.display = 'none'; 
      popAboutFrontElementaCorner.style.display = 'none'; 
      popAboutBackElementaCorner.style.display = 'none'; 
      popAboutPawElementaCorner.style.display = 'none';   
    }
  });
}