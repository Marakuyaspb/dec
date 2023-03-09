function render() {
	productsPage.render();	
}

spinnerPage.render();

let CATALOG = [];
render();


fetch('http://decona.ru/wp-content/uploads/catalog/products.json')
    .then(res => res.json())
    .then(body => {
		CATALOG = body;

		setTimeout(() => {
			spinnerPage.handleClear();
			render();
		}, 1000);
    })
    .catch(() => {
        spinnerPage.handleClear();
    	errorPage.render();
    })


/* change */

function showDetails({sku}){
		let the_sku = document.getElementsByClassName('sku');
		console.log({sku});
}


	CATALOG.forEach(({sku}) => {
		console.log({sku});
	});


/*
	ПОИСК СООТВЕТСТВИЙ
*/


let bbb = ;

 
for (let i = 1; i < aaa.length; ++i) {
  console.log(aaa[i].sku);  
if (aaa[i].sku == bbb){
  let ccc = aaa[i];
  console.log(ccc);
}
else console.log('Check your json!');
};

/*
ИЗМЕНЕНИЕ ПО ОНКЛИКУ

*/


var buttons = document.querySelectorAll('.block');
Array.from(buttons).forEach(function(button){
  
    button.addEventListener('click', function(e) {
      a = e.target.id;
    	console.log(a);
      
      var b = ['n', 'i8', 's2', 'q', 'l', 's1', 'd2', 'r', 's3'];
      console.log(a+'rrrgh');
      
      if(b.includes(a)){
      /* console.log('AAAAAAAAAAAAAAAAAAAA!!!!');*/
      let numbers = document.getElementById('numbers');
      numbers.remove();
      let wrap_all = document.getElementById('wrap_all');
      let anotherInfo = `
      <div>
        <h2>I'm just another new block</h2>
      </div>
      `;
      let catInfo = `
      <img src ='https://i.pinimg.com/474x/5e/ae/8a/5eae8a60770b43bddbb16e0a2ceeacf0.jpg'>
      `;
       let opossumInfo = `
      <img src ='https://up.quizlet.com/qa47d-dRh5C-256s.jpg'>
      `;
        
       wrap_all.innerHTML = anotherInfo;
      
      }
      }
     )
});
