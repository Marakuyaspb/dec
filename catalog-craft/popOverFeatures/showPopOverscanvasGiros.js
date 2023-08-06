function showPopOverscanvasGiros(event){
  var canvasGiros = document.getElementById("canvasConsonoCorner");
  var ctx = canvasGiros.getContext('2d');

  const canvasGiros_width = canvasGiros.width = 1600;
  const canvasGiros_heigh = canvasGiros.height = 800;

/* сделать эту штуку вариативной из массива */

  var pinStitchesGiros = new Image();
  pinStitchesGiros.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinStitchesGiros.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinStitchesGiros, 280, 400, 50, 50);
  }
  var pinPillowGiros = new Image();
  pinPillowGiros.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPillowGiros.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPillowGiros, 370, 260, 50, 50);
  }
  var pinFrontGiros = new Image();
  pinFrontGiros.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinFrontGiros.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinFrontGiros, 760, 470, 50, 50);
  }
  var pinBackGiros = new Image();
  pinBackGiros.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinBackGiros.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinBackGiros, 890, 180, 50, 50);
  }
  var pinPawGiros = new Image();
  pinPawGiros.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPawGiros.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPawGiros, 1070, 620, 50, 50);
  }

  canvasGiros.style.width = canvasGiros.offsetWidth + 'px';
  canvasGiros.style.height = canvasGiros.offsetHeight + 'px';

  let popAboutStitchesGiros = document.getElementById('popAboutStitchesGiros');     
  let popAboutPillowGiros = document.getElementById('popAboutPillowGiros');
  let popAboutFrontGiros = document.getElementById('popAboutFrontGiros');
  let popAboutBackGiros = document.getElementById('popAboutBackGiros');
  let popAboutPawGiros = document.getElementById('popAboutPawGiros');

  const mouse = {
    x:0,
    y:0,
    left: false,
    right: false,
    over: false,
  }; 

  canvasGiros.addEventListener('mousemove', function(e) {
    const rect = canvasGiros.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    /*console.log(mouse.x, mouse.y);*/

    if (mouse.x >= 280 && mouse.x <= 330 && mouse.y >= 400 && mouse.y <= 450) {
      popAboutStitchesGiros.style.display = 'block';
    }
    else if (mouse.x >= 370 && mouse.x <= 430 && mouse.y >= 260 && mouse.y <= 310) {
      popAboutPillowGiros.style.display = 'block';
    }
    else if (mouse.x >= 760 && mouse.x <= 810 && mouse.y >= 470 && mouse.y <= 520) {
      popAboutFrontGiros.style.display = 'block';
    }
    else if (mouse.x >= 890 && mouse.x <= 940 && mouse.y >= 180 && mouse.y <= 230) {
      popAboutBackGiros.style.display = 'block';
    }
    else if (mouse.x >= 1070 && mouse.x <= 1120 && mouse.y >= 620 && mouse.y <= 670) {
      popAboutPawGiros.style.display = 'block';
    }

    else {
      popAboutStitchesGiros.style.display = 'none';
      popAboutPillowGiros.style.display = 'none'; 
      popAboutFrontGiros.style.display = 'none'; 
      popAboutFrontGiros.style.display = 'none'; 
      popAboutBackGiros.style.display = 'none'; 
      popAboutPawGiros.style.display = 'none';   
    }
  });
}