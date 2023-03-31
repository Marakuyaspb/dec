function orderIt(){
	    Email.send({
        Host : "smtp.mail.ru",
        Username : "tech@decona.ru",
        Password : "techn0n0t$upeR",
        To : 'marketing@decona.ru',
        From : document.getElementById('user_mail').value,
        Subject : "Новый заказ",
        Body : "Заказ:" 
        + "<br> <strong>" + document.getElementById('model_fabric').value + "</strong>"
        + "<br> Имя: " + document.getElementById('user_name').value
        + "<br> Телефон: " + document.getElementById('user_phone').value
        + "<br> E-mail: " + document.getElementById('user_mail').value
    }).then(
      message => alert('Заявка успешно отправлена')
    );
}

/* Now we know the sku */
let element = document.getElementsByClassName("sku");
class_sku = element[0];
let product_sku = class_sku.getAttribute('id');
console.log(product_sku);