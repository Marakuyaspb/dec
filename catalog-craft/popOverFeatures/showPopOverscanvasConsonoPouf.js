function showPopOverscanvasConsonoPouf(event){
  var canvasPouf = document.getElementById("canvasConsonoCorner");
  var ctx = canvasPouf.getContext('2d');

  const canvasPouf_width = canvasPouf.width = 1600;
  const canvasPouf_heigh = canvasPouf.height = 800;

/* сделать эту штуку вариативной из массива */

  var pinStitchesPouf = new Image();
  pinStitchesPouf.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinStitchesPouf.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinStitchesPouf, 280, 400, 50, 50);
  }
  var pinPillowPouf = new Image();
  pinPillowPouf.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPillowPouf.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPillowPouf, 370, 260, 50, 50);
  }
  var pinFrontPouf = new Image();
  pinFrontPouf.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinFrontPouf.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinFrontPouf, 760, 470, 50, 50);
  }
  var pinBackPouf = new Image();
  pinBackPouf.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinBackPouf.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinBackPouf, 890, 180, 50, 50);
  }
  var pinPawPouf = new Image();
  pinPawPouf.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPawPouf.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPawPouf, 1070, 620, 50, 50);
  }

  canvasPouf.style.width = canvasPouf.offsetWidth + 'px';
  canvasPouf.style.height = canvasPouf.offsetHeight + 'px';

  let popAboutStitchesPouf = document.getElementById('popAboutStitchesPouf');     
  let popAboutPillowPouf = document.getElementById('popAboutPillowPouf');
  let popAboutFrontPouf = document.getElementById('popAboutFrontPouf');
  let popAboutBackPouf = document.getElementById('popAboutBackPouf');
  let popAboutPawPouf = document.getElementById('popAboutPawPouf');

  const mouse = {
    x:0,
    y:0,
    left: false,
    right: false,
    over: false,
  }; 

  canvasPouf.addEventListener('mousemove', function(e) {
    const rect = canvasPouf.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    /*console.log(mouse.x, mouse.y);*/

    if (mouse.x >= 280 && mouse.x <= 330 && mouse.y >= 400 && mouse.y <= 450) {
      popAboutStitchesPouf.style.display = 'block';
    }
    else if (mouse.x >= 370 && mouse.x <= 430 && mouse.y >= 260 && mouse.y <= 310) {
      popAboutPillowPouf.style.display = 'block';
    }
    else if (mouse.x >= 760 && mouse.x <= 810 && mouse.y >= 470 && mouse.y <= 520) {
      popAboutFrontPouf.style.display = 'block';
    }
    else if (mouse.x >= 890 && mouse.x <= 940 && mouse.y >= 180 && mouse.y <= 230) {
      popAboutBackPouf.style.display = 'block';
    }
    else if (mouse.x >= 1070 && mouse.x <= 1120 && mouse.y >= 620 && mouse.y <= 670) {
      popAboutPawPouf.style.display = 'block';
    }

    else {
      popAboutStitchesPouf.style.display = 'none';
      popAboutPillowPouf.style.display = 'none'; 
      popAboutFrontPouf.style.display = 'none'; 
      popAboutFrontPouf.style.display = 'none'; 
      popAboutBackPouf.style.display = 'none'; 
      popAboutPawPouf.style.display = 'none';   
    }
  });
}