unction showPopOverscanvasElementaStr(event){
  var canvasElementaStr = document.getElementById("canvasConsonoCorner");
  var ctx = canvasElementaStr.getContext('2d');

  const canvasElementaStr_width = canvasElementaStr.width = 1600;
  const canvasElementaStr_heigh = canvasElementaStr.height = 800;

/* сделать эту штуку вариативной из массива */

  var pinStitchesElementaStr = new Image();
  pinStitchesElementaStr.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinStitchesElementaStr.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinStitchesElementaStr, 280, 400, 50, 50);
  }
  var pinPillowElementaStr = new Image();
  pinPillowElementaStr.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPillowElementaStr.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPillowElementaStr, 370, 260, 50, 50);
  }
  var pinFrontElementaStr = new Image();
  pinFrontElementaStr.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinFrontElementaStr.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinFrontElementaStr, 760, 470, 50, 50);
  }
  var pinBackElementaStr = new Image();
  pinBackElementaStr.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinBackElementaStr.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinBackElementaStr, 890, 180, 50, 50);
  }
  var pinPawElementaStr = new Image();
  pinPawElementaStr.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPawElementaStr.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPawElementaStr, 1070, 620, 50, 50);
  }

  canvasElementaStr.style.width = canvasElementaStr.offsetWidth + 'px';
  canvasElementaStr.style.height = canvasElementaStr.offsetHeight + 'px';

  let popAboutStitchesElementaStr = document.getElementById('popAboutStitchesElementaStr');     
  let popAboutPillowElementaStr = document.getElementById('popAboutPillowElementaStr');
  let popAboutFrontElementaStr = document.getElementById('popAboutFrontElementaStr');
  let popAboutBackElementaStr = document.getElementById('popAboutBackElementaStr');
  let popAboutPawElementaStr = document.getElementById('popAboutPawElementaStr');

  const mouse = {
    x:0,
    y:0,
    left: false,
    right: false,
    over: false,
  }; 

  canvasElementaStr.addEventListener('mousemove', function(e) {
    const rect = canvasElementaStr.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    /*console.log(mouse.x, mouse.y);*/

    if (mouse.x >= 280 && mouse.x <= 330 && mouse.y >= 400 && mouse.y <= 450) {
      popAboutStitchesElementaStr.style.display = 'block';
    }
    else if (mouse.x >= 370 && mouse.x <= 430 && mouse.y >= 260 && mouse.y <= 310) {
      popAboutPillowElementaStr.style.display = 'block';
    }
    else if (mouse.x >= 760 && mouse.x <= 810 && mouse.y >= 470 && mouse.y <= 520) {
      popAboutFrontElementaStr.style.display = 'block';
    }
    else if (mouse.x >= 890 && mouse.x <= 940 && mouse.y >= 180 && mouse.y <= 230) {
      popAboutBackElementaStr.style.display = 'block';
    }
    else if (mouse.x >= 1070 && mouse.x <= 1120 && mouse.y >= 620 && mouse.y <= 670) {
      popAboutPawElementaStr.style.display = 'block';
    }

    else {
      popAboutStitchesElementaStr.style.display = 'none';
      popAboutPillowElementaStr.style.display = 'none'; 
      popAboutFrontElementaStr.style.display = 'none'; 
      popAboutFrontElementaStr.style.display = 'none'; 
      popAboutBackElementaStr.style.display = 'none'; 
      popAboutPawElementaStr.style.display = 'none';   
    }
  });
}