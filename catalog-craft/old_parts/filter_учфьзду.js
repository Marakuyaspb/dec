const catalogData = [
  { 
    name: "Product A", 
    category: "Category 1" },
  { 
    name: "Product B", 
    category: "Category 2" 
  },
  { 
    name: "Product C", 
    category: "Category 1" 
  },
  { 
    name: "Product D", 
    category: "Category 3" 
  },
];

function filterAndRenderCatalog(category) {
  const filteredData = catalogData.filter(obj => obj.category === category);
  const catalogContainer = document.getElementById("catalog-container");
  catalogContainer.innerHTML = "";

  filteredData.forEach(obj => {
    const productDiv = document.createElement("div");
    productDiv.innerText = obj.name;
    catalogContainer.appendChild(productDiv);
  });
}

document.getElementById("category-1-button").addEventListener("click", () => {
  filterAndRenderCatalog("Category 1");
});

document.getElementById("category-2-button").addEventListener("click", () => {
  filterAndRenderCatalog("Category 2");
});

document.getElementById("category-3-button").addEventListener("click", () => {
  filterAndRenderCatalog("Category 3");
});