/* CONSONO */

function showPopOverscanvasConsonoArm(event){
  var canvasConsonoArm = document.getElementById("canvasConsonoArm");
  var ctx = canvasConsonoArm.getContext('2d');

  console.log('Hey! You ll see armchair');

  const canvasConsonoArm_width = canvasConsonoArm.width = 1600;
  const canvasConsonoArm_heigh = canvasConsonoArm.height = 800;

/* сделать эту штуку вариативной из массива */

  var pinStitchesConsonoArm = new Image();
  pinStitchesConsonoArm.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinStitchesConsonoArm.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinStitchesConsonoArm, 280, 400, 50, 50);
  }
  var pinPillowConsonoArm = new Image();
  pinPillowConsonoArm.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPillowConsonoArm.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPillowConsonoArm, 370, 260, 50, 50);
  }
  var pinFrontConsonoArm = new Image();
  pinFrontConsonoArm.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinFrontConsonoArm.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinFrontConsonoArm, 760, 470, 50, 50);
  }
  var pinBackConsonoArm = new Image();
  pinBackConsonoArm.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinBackConsonoArm.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinBackConsonoArm, 890, 180, 50, 50);
  }
  var pinPawConsonoArm = new Image();
  pinPawConsonoArm.src = 'http://temp.decona.ru/wp-content/uploads/2023/02/pin.svg';
  pinPawConsonoArm.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pinPawConsonoArm, 1070, 620, 50, 50);
  }

  canvasConsonoArm.style.width = canvasConsonoArm.offsetWidth + 'px';
  canvasConsonoArm.style.height = canvasConsonoArm.offsetHeight + 'px';

  let popAboutStitchesConsonoArm = document.getElementById('popAboutStitchesConsonoArm');     
  let popAboutPillowConsonoArm = document.getElementById('popAboutPillowConsonoArm');
  let popAboutFrontConsonoArm = document.getElementById('popAboutFrontConsonoArm');
  let popAboutBackConsonoArm = document.getElementById('popAboutBackConsonoArm');
  let popAboutPawConsonoArm = document.getElementById('popAboutPawConsonoArm');

  const mouse = {
    x:0,
    y:0,
    left: false,
    right: false,
    over: false,
  }; 

  canvasConsonoArm.addEventListener('mousemove', function(e) {
    const rect = canvasConsonoArm.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    /*console.log(mouse.x, mouse.y);*/

    if (mouse.x >= 280 && mouse.x <= 330 && mouse.y >= 400 && mouse.y <= 450) {
      popAboutStitchesConsonoArm.style.display = 'block';
    }
    else if (mouse.x >= 370 && mouse.x <= 430 && mouse.y >= 260 && mouse.y <= 310) {
      popAboutPillowConsonoArm.style.display = 'block';
    }
    else if (mouse.x >= 760 && mouse.x <= 810 && mouse.y >= 470 && mouse.y <= 520) {
      popAboutFrontConsonoArm.style.display = 'block';
    }
    else if (mouse.x >= 890 && mouse.x <= 940 && mouse.y >= 180 && mouse.y <= 230) {
      popAboutBackConsonoArm.style.display = 'block';
    }
    else if (mouse.x >= 1070 && mouse.x <= 1120 && mouse.y >= 620 && mouse.y <= 670) {
      popAboutPawConsonoArm.style.display = 'block';
    }

    else {
      popAboutStitchesConsonoArm.style.display = 'none';
      popAboutPillowConsonoArm.style.display = 'none'; 
      popAboutFrontConsonoArm.style.display = 'none'; 
      popAboutFrontConsonoArm.style.display = 'none'; 
      popAboutBackConsonoArm.style.display = 'none'; 
      popAboutPawConsonoArm.style.display = 'none';   
    }
  });
}




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



/* GIROS */

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


/* ELEMENTA */

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



function showPopOverscanvasElementaStr(event){
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