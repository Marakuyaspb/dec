function filterProducts(event){
	let clickedEl = event.currentTarget;
  	let currentCat = clickedEl.id;
  	console.log(currentCat);

  	var goodsCats = document.getElementById('goods_categories');
  	goodsCats.remove();

  	let categoryForShow = document.getElementsByClassName(currentCat);
  	//console.log(categoryForShow);
  	let filteredContent = document.getElementById('goods_show');
  	console.log(categoryForShow.length);

  	for (let i = 0; i < categoryForShow.length; i++) {
  		console.log(categoryForShow[i]);
  		filteredContent.appendChild(categoryForShow[i]);
	};
}