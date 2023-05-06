function filterProducts(event){
	let clickedEl = event.currentTarget;
  	let currentCat = clickedEl.id;
  	/*console.log(currentCat);*/

  	var goodsCats = document.getElementById('goods_categories');
  	goodsCats.remove();

  	const filteredDivs = document.querySelectorAll(`div.${currentCat}`);
  	const filteredContent = document.getElementById('goods_show');

  	filteredDivs.forEach(div => {
      filteredContent.appendChild(div);
    });

    /* Scroll to top */
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
