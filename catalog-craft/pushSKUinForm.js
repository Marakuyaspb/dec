function pushSKUinForm(event){
	let element = document.getElementsByClassName("sku");
	class_sku = element[0];
	let product_sku = class_sku.getAttribute('id');
	console.log(product_sku);
	document.querySelector('input#ordered_sku').setAttribute('value', product_sku);
	console.log('it works');
}; 



/*
 document.querySelector('.spu-box').getAttributeaddEventListener('change',{
	    //   trackValues: true, 
	        callback: function(event) {
	            // which getAttributeibute you want to watch for changes
	             
	                    // Если в текущий момент открыто нужное попап 
	                    if (document.querySelector(this).getAttribute('class') === 'wpcf7-hidden'){
	                        console.log('Да это тот попап который мне нужен');
	                        // Вставим в заголовок данного попап окна, заголовок блока  
	                        document.querySelector(this).find('.Popups_Title_Block.h3').textContent=TitleBlock_SDStudio);
	                        // Заменяем текст в суб заголовке
	                        var SubTitleText = 'Спасибо за Ваше сообщение, мы вскоре свяжемся с Вами';
	                        document.querySelector(this).find('.Popups_SubTitle_Block').textContent=SubTitleText);
	 
	                        // Переводим текст блока в верхний регистр
	                        var TitleBlockSDStudioUppercase = TitleBlock_SDStudio.toUpperCase();
	 
	                        // Вот здесь происходит вставка заголовка в HiddenInput CF7 START
	                        document.querySelector(this).find('input#HIDDENINPUT').setAttribute('value', TitleBlockSDStudioUppercase);
	                        // Вот здесь происходит вставка заголовка в HiddenInput CF7 END
	 
	                    } else {
	                        // console.log('Нет! Это НЕ тот попап который нужен');
	                    }
	                    // ----------------------------------------------------
	            })
	        

*/

/*
 $('.spu-box').attrchange({
	    //   trackValues: true, 
	        callback: function(event) {
	            // which attribute you want to watch for changes
	            if(event.attributeName == "style") {
	 
	                    // ----------------------------------------------------
	                    // Обрабатываем только попап окно PopUps для уневерсальных форм
	 
	                    // Если в текущий момент открыто универсальное попап 
	                    if ($(this).attr('id') === 'spu-4197'){
	                        // console.log('Да это тот попап который мне нужен');
	                        // Вставим в заголовок данного попап окна, заголовок блока  
	                        $(this).find('.Popups_Title_Block.h3').text(TitleBlock_SDStudio);
	                        // Заменяем текст в суб заголовке
	                        var SubTitleText = 'Спасибо за Ваше сообщение, мы вскоре свяжемся с Вами';
	                        $(this).find('.Popups_SubTitle_Block').text(SubTitleText);
	 
	                        // Переводим текст блока в верхний регистр
	                        var TitleBlockSDStudioUppercase = TitleBlock_SDStudio.toUpperCase();
	 
	                        // Вот здесь происходит вставка заголовка в HiddenInput CF7 START
	                        $(this).find('input#HIDDENINPUT').attr('value', TitleBlockSDStudioUppercase);
	                        // Вот здесь происходит вставка заголовка в HiddenInput CF7 END
	 
	                    } else {
	                        // console.log('Нет! Это НЕ тот попап который нужен');
	                    }
	                    // ----------------------------------------------------
	            }
	        }
	    });
*/

/*

// get the input element
const skuInput = document.querySelector('input.sku#sku');

// get the button element
const button = document.querySelector('button');

// add click event listener to the button
button.addEventListener('click', () => {
  // set the value of the input element
  skuInput.value = 'new value';
});



*/
/*

function pushSKUinForm(event){
	let element = document.getElementsByClassName("sku");
	class_sku = element[0];
	let product_sku = class_sku.getAttribute('id');
	console.log(product_sku);
	document.getElementById('ordered_sku').innerHTML = `${product_sku}`;
}; 

*/



/*
A simple jQuery function that can add listeners on attribute change.
http://meetselva.github.io/attrchange/

About License:
Copyright (C) 2013-2014 Selvakumar Arumugam
You may use attrchange plugin under the terms of the MIT Licese.
https://github.com/meetselva/attrchange/blob/master/MIT-License.txt
 */
