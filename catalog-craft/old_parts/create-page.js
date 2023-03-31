 function Zvonok(strid)
 {
  var WinPrint = null;
  WinPrint = window.open('','','left=0,top=0,width=400,height=200,toolbar=0,scrollbars=1,status=0');
  if(WinPrint != null)
  {
  WinPrint.document.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Заказать обратный звонок</title>');
  WinPrint.document.write('</head>');
  WinPrint.document.write('<body>');
  WinPrint.document.write('<form align= "center">');
  WinPrint.document.write('<strong>Ваше имя:</strong><br>');
  WinPrint.document.write('<input name="name2" type="text" id= "name2" maxlength="64" style="font-weight:bold; padding-left:3px; width:300px" size="30"><br>');
  WinPrint.document.write('<strong>Ваш телефон (11 цифр):</strong><br>');
  WinPrint.document.write('<input name="telefon" type="text" id= "telefon" onkeydown = "javascript: return(event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 35 && event.keyCode <= 40) || (event.keyCode >= 96 && event.keyCode <= 105))" maxlength="11" style="font-weight:bold; padding-left:3px; width:300px" size="30"><br>');
  WinPrint.document.write('<p><input type="button" onclick="send2();" style="cursor:pointer; font:11px Verdana, Geneva, sans-serif; background-color:#1173b2; color:#fff; border:2px #ccc solid; font-weight:700; text-transform:uppercase; height:25px;" value="Заказать звонок"></p>');
  WinPrint.document.write('<div id="result2"></div>');
  WinPrint.document.write('</form>');
  WinPrint.document.write('</body></html>');
  WinPrint.document.close();
  WinPrint.focus();
  }
 }

/*
 function Zvonok(strid)
 {
  var WinPrint = null;
  WinPrint = window.open('','','left=0,top=0,width=400,height=200,toolbar=0,scrollbars=1,status=0');
  if(WinPrint != null)
  {
  WinPrint.document.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Заказать обратный звонок</title>');
  WinPrint.document.write('</head>');
  WinPrint.document.write('<body>');
  WinPrint.document.write('<form align= "center">');
  WinPrint.document.write('<strong>Ваше имя:</strong><br>');
  WinPrint.document.write('<input name="name2" type="text" id= "name2" maxlength="64" style="font-weight:bold; padding-left:3px; width:300px" size="30"><br>');
  WinPrint.document.write('<strong>Ваш телефон (11 цифр):</strong><br>');
  WinPrint.document.write('<input name="telefon" type="text" id= "telefon" onkeydown = "javascript: return(event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 35 && event.keyCode <= 40) || (event.keyCode >= 96 && event.keyCode <= 105))" maxlength="11" style="font-weight:bold; padding-left:3px; width:300px" size="30"><br>');
  WinPrint.document.write('<p><input type="button" onclick="send2();" style="cursor:pointer; font:11px Verdana, Geneva, sans-serif; background-color:#1173b2; color:#fff; border:2px #ccc solid; font-weight:700; text-transform:uppercase; height:25px;" value="Заказать звонок"></p>');
  WinPrint.document.write('<div id="result2"></div>');
  WinPrint.document.write('</form>');
  WinPrint.document.write('</body></html>');
  WinPrint.document.close();
  WinPrint.focus();
  }
 }
*/