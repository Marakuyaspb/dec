function filterProducts(event){
	let clickedEl = event.currentTarget;
  	let currentCat = clickedEl.id;
  	//console.log(currentCat);

  var goodsCats = document.getElementById('goods_categories');
  	goodsCats.remove();

  	let categoryForShow = document.getElementsByClassName(currentCat);
  	//console.log(categoryForShow);
  	let filteredContent = document.getElementById('goods_show');

  	for (let i = 0; i < categoryForShow.length; i++) {
  		//console.log(categoryForShow);
  		filteredContent.appendChild(categoryForShow[i]);
	};
}