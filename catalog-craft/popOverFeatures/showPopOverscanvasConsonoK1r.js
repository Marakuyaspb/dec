function showPopOverscanvasConsonoK1r(event){
  var canvasConsonoK1r = document.getElementById("canvasConsonoCorner");
  var ctx = canvasConsonoK1r.getContext('2d');

  const canvasConsonoK1r_width = canvasConsonoK1r.width = 1600;
  const canvasConsonoK1r_heigh = canvasConsonoK1r.height = 800;

/* сделать эту штуку вариативной из массива */

  var pinStitchesConsonoK1r = new Image();
  pinStitchesConsonoK1r.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinStitchesConsonoK1r.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinStitchesConsonoK1r, 280, 400, 50, 50);
  }
  var pinPillowConsonoK1r = new Image();
  pinPillowConsonoK1r.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPillowConsonoK1r.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPillowConsonoK1r, 370, 260, 50, 50);
  }
  var pinFrontConsonoK1r = new Image();
  pinFrontConsonoK1r.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinFrontConsonoK1r.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinFrontConsonoK1r, 760, 470, 50, 50);
  }
  var pinBackConsonoK1r = new Image();
  pinBackConsonoK1r.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinBackConsonoK1r.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinBackConsonoK1r, 890, 180, 50, 50);
  }
  var pinPawConsonoK1r = new Image();
  pinPawConsonoK1r.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPawConsonoK1r.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPawConsonoK1r, 1070, 620, 50, 50);
  }

  canvasConsonoK1r.style.width = canvasConsonoK1r.offsetWidth + 'px';
  canvasConsonoK1r.style.height = canvasConsonoK1r.offsetHeight + 'px';

  let popAboutStitchesConsonoK1r = document.getElementById('popAboutStitchesConsonoK1r');     
  let popAboutPillowConsonoK1r = document.getElementById('popAboutPillowConsonoK1r');
  let popAboutFrontConsonoK1r = document.getElementById('popAboutFrontConsonoK1r');
  let popAboutBackConsonoK1r = document.getElementById('popAboutBackConsonoK1r');
  let popAboutPawConsonoK1r = document.getElementById('popAboutPawConsonoK1r');

  const mouse = {
    x:0,
    y:0,
    left: false,
    right: false,
    over: false,
  }; 

  canvasConsonoK1r.addEventListener('mousemove', function(e) {
    const rect = canvasConsonoK1r.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    /*console.log(mouse.x, mouse.y);*/

    if (mouse.x >= 280 && mouse.x <= 330 && mouse.y >= 400 && mouse.y <= 450) {
      popAboutStitchesConsonoK1r.style.display = 'block';
    }
    else if (mouse.x >= 370 && mouse.x <= 430 && mouse.y >= 260 && mouse.y <= 310) {
      popAboutPillowConsonoK1r.style.display = 'block';
    }
    else if (mouse.x >= 760 && mouse.x <= 810 && mouse.y >= 470 && mouse.y <= 520) {
      popAboutFrontConsonoK1r.style.display = 'block';
    }
    else if (mouse.x >= 890 && mouse.x <= 940 && mouse.y >= 180 && mouse.y <= 230) {
      popAboutBackConsonoK1r.style.display = 'block';
    }
    else if (mouse.x >= 1070 && mouse.x <= 1120 && mouse.y >= 620 && mouse.y <= 670) {
      popAboutPawConsonoK1r.style.display = 'block';
    }

    else {
      popAboutStitchesConsonoK1r.style.display = 'none';
      popAboutPillowConsonoK1r.style.display = 'none'; 
      popAboutFrontConsonoK1r.style.display = 'none'; 
      popAboutFrontConsonoK1r.style.display = 'none'; 
      popAboutBackConsonoK1r.style.display = 'none'; 
      popAboutPawConsonoK1r.style.display = 'none';   
    }
  });
}