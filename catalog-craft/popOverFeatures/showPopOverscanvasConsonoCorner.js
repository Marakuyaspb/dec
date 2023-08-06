function showPopOverscanvasConsonoCorner(event){
  var canvasConsonoCorner = document.getElementById("canvasConsonoCorner");
  var ctx = canvasConsonoCorner.getContext('2d');

  const canvasConsonoCorner_width = canvasConsonoCorner.width = 1600;
  const canvasConsonoCorner_heigh = canvasConsonoCorner.height = 800;

/* сделать эту штуку вариативной из массива */

  var pinStitchesConsonoCorner = new Image();
  pinStitchesConsonoCorner.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinStitchesConsonoCorner.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinStitchesConsonoCorner, 280, 400, 50, 50);
  }
  var pinPillowConsonoCorner = new Image();
  pinPillowConsonoCorner.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPillowConsonoCorner.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPillowConsonoCorner, 370, 260, 50, 50);
  }
  var pinFrontConsonoCorner = new Image();
  pinFrontConsonoCorner.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinFrontConsonoCorner.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinFrontConsonoCorner, 760, 470, 50, 50);
  }
  var pinBackConsonoCorner = new Image();
  pinBackConsonoCorner.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinBackConsonoCorner.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinBackConsonoCorner, 890, 180, 50, 50);
  }
  var pinPawConsonoCorner = new Image();
  pinPawConsonoCorner.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPawConsonoCorner.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPawConsonoCorner, 1070, 620, 50, 50);
  }

  canvasConsonoCorner.style.width = canvasConsonoCorner.offsetWidth + 'px';
  canvasConsonoCorner.style.height = canvasConsonoCorner.offsetHeight + 'px';

  let popAboutStitchesConsonoCorner = document.getElementById('popAboutStitchesConsonoCorner');     
  let popAboutPillowConsonoCorner = document.getElementById('popAboutPillowConsonoCorner');
  let popAboutFrontConsonoCorner = document.getElementById('popAboutFrontConsonoCorner');
  let popAboutBackConsonoCorner = document.getElementById('popAboutBackConsonoCorner');
  let popAboutPawConsonoCorner = document.getElementById('popAboutPawConsonoCorner');

  const mouse = {
    x:0,
    y:0,
    left: false,
    right: false,
    over: false,
  }; 

  canvasConsonoCorner.addEventListener('mousemove', function(e) {
    const rect = canvasConsonoCorner.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    /*console.log(mouse.x, mouse.y);*/

    if (mouse.x >= 280 && mouse.x <= 330 && mouse.y >= 400 && mouse.y <= 450) {
      popAboutStitchesConsonoCorner.style.display = 'block';
    }
    else if (mouse.x >= 370 && mouse.x <= 430 && mouse.y >= 260 && mouse.y <= 310) {
      popAboutPillowConsonoCorner.style.display = 'block';
    }
    else if (mouse.x >= 760 && mouse.x <= 810 && mouse.y >= 470 && mouse.y <= 520) {
      popAboutFrontConsonoCorner.style.display = 'block';
    }
    else if (mouse.x >= 890 && mouse.x <= 940 && mouse.y >= 180 && mouse.y <= 230) {
      popAboutBackConsonoCorner.style.display = 'block';
    }
    else if (mouse.x >= 1070 && mouse.x <= 1120 && mouse.y >= 620 && mouse.y <= 670) {
      popAboutPawConsonoCorner.style.display = 'block';
    }

    else {
      popAboutStitchesConsonoCorner.style.display = 'none';
      popAboutPillowConsonoCorner.style.display = 'none'; 
      popAboutFrontConsonoCorner.style.display = 'none'; 
      popAboutFrontConsonoCorner.style.display = 'none'; 
      popAboutBackConsonoCorner.style.display = 'none'; 
      popAboutPawConsonoCorner.style.display = 'none';   
    }
  });
}