function showPopOverscanvasConsonoStr(event){
  var canvasConsonoStr = document.getElementById("canvasConsonoCorner");
  var ctx = canvasConsonoStr.getContext('2d');

  const canvasConsonoStr_width = canvasConsonoStr.width = 1600;
  const canvasConsonoStr_heigh = canvasConsonoStr.height = 800;

/* сделать эту штуку вариативной из массива */

  var pinStitchesConsonoStr = new Image();
  pinStitchesConsonoStr.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinStitchesConsonoStr.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinStitchesConsonoStr, 280, 400, 50, 50);
  }
  var pinPillowConsonoStr = new Image();
  pinPillowConsonoStr.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPillowConsonoStr.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPillowConsonoStr, 370, 260, 50, 50);
  }
  var pinFrontConsonoStr = new Image();
  pinFrontConsonoStr.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinFrontConsonoStr.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinFrontConsonoStr, 760, 470, 50, 50);
  }
  var pinBackConsonoStr = new Image();
  pinBackConsonoStr.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinBackConsonoStr.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinBackConsonoStr, 890, 180, 50, 50);
  }
  var pinPawConsonoStr = new Image();
  pinPawConsonoStr.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPawConsonoStr.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPawConsonoStr, 1070, 620, 50, 50);
  }

  canvasConsonoStr.style.width = canvasConsonoStr.offsetWidth + 'px';
  canvasConsonoStr.style.height = canvasConsonoStr.offsetHeight + 'px';

  let popAboutStitchesConsonoStr = document.getElementById('popAboutStitchesConsonoStr');     
  let popAboutPillowConsonoStr = document.getElementById('popAboutPillowConsonoStr');
  let popAboutFrontConsonoStr = document.getElementById('popAboutFrontConsonoStr');
  let popAboutBackConsonoStr = document.getElementById('popAboutBackConsonoStr');
  let popAboutPawConsonoStr = document.getElementById('popAboutPawConsonoStr');

  const mouse = {
    x:0,
    y:0,
    left: false,
    right: false,
    over: false,
  }; 

  canvasConsonoStr.addEventListener('mousemove', function(e) {
    const rect = canvasConsonoStr.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    /*console.log(mouse.x, mouse.y);*/

    if (mouse.x >= 280 && mouse.x <= 330 && mouse.y >= 400 && mouse.y <= 450) {
      popAboutStitchesConsonoStr.style.display = 'block';
    }
    else if (mouse.x >= 370 && mouse.x <= 430 && mouse.y >= 260 && mouse.y <= 310) {
      popAboutPillowConsonoStr.style.display = 'block';
    }
    else if (mouse.x >= 760 && mouse.x <= 810 && mouse.y >= 470 && mouse.y <= 520) {
      popAboutFrontConsonoStr.style.display = 'block';
    }
    else if (mouse.x >= 890 && mouse.x <= 940 && mouse.y >= 180 && mouse.y <= 230) {
      popAboutBackConsonoStr.style.display = 'block';
    }
    else if (mouse.x >= 1070 && mouse.x <= 1120 && mouse.y >= 620 && mouse.y <= 670) {
      popAboutPawConsonoStr.style.display = 'block';
    }

    else {
      popAboutStitchesConsonoStr.style.display = 'none';
      popAboutPillowConsonoStr.style.display = 'none'; 
      popAboutFrontConsonoStr.style.display = 'none'; 
      popAboutFrontConsonoStr.style.display = 'none'; 
      popAboutBackConsonoStr.style.display = 'none'; 
      popAboutPawConsonoStr.style.display = 'none';   
    }
  });
}