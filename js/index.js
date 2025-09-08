//all container stored here//
const categoryContainer = document.getElementById("category-container");
const treeCardContainer = document.getElementById("tree-card-container");
const cartContainer = document.getElementById('cart-container')
//tree category load
//load category is done
const loadTreeCategories = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/categories"
  );
  const json = await response.json();
  const category = json.categories;
  //console.log(category);

  category.forEach((cat) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <li onclick="plantByCategories('${cat.id}')" class="hover:bg-[#3b813e] font-semibold p-2 hover:text-white rounded-xl">${cat.category_name}</li>
        `;
    categoryContainer.appendChild(li);
  });

  //using event delegation
  categoryContainer.addEventListener("click", (e) => {
    const allList = document.querySelectorAll("li");
    //console.log(allList);

    allList.forEach((li) => {
      li.classList.remove("bg-[#3b813e]", "text-white");
    });

    if (e.target.tagName === "LI") {
      e.target.classList.add("bg-[#3b813e]", "text-white");
    }
  });
};
loadTreeCategories();

//All plants
const allPlants = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/plants"
  );
  const json = await response.json();
  const plant = json.plants;
  //console.log(plant.plants);

  treeCardContainer.innerHTML = "";

  plant.forEach((plant) => {
    //console.log(plant.image);
    const div = document.createElement("div");
    div.innerHTML = `
          <div id="cards" class="bg-white shadow-sm p-4 rounded-lg flex flex-col h-full w-full">
    <div class="w-full h-[180px]">
        <img class="rounded-lg w-full h-full object-cover" src="${plant.image}" loading="lazy" alt="">
    </div>

    <div class="flex flex-col flex-grow mt-3">
        <h3 class="font-bold text-lg truncate">${plant.name}</h3>
        <p class="text-sm text-gray-600 line-clamp-2">${plant.description}</p>

        <div class="mt-auto">
            <div class="flex justify-between items-center mb-3">
                <p class="bg-[#dcfce7] px-3 py-1 text-[12px] rounded-3xl">${plant.category}</p>
                <p class="font-bold">৳${plant.price}</p>
            </div>
            <button onclick="addToCart('${plant.name}')" class="btn bg-[#3b813e] text-white rounded-full w-full py-2">
                Add To Cart
            </button>
        </div>
    </div>
</div>

        `;
    treeCardContainer.appendChild(div);
  });
};
allPlants();

//get plants by categories
const plantByCategories = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/category/${id}`
  );
  const json = await response.json();
  const plantByCat = json.plants;

  treeCardContainer.innerHTML = "";

  plantByCat.forEach((plant) => {
    const div = document.createElement("div");
    div.innerHTML = `
          <div id="cards" class="bg-white shadow-sm p-4 rounded-lg flex flex-col h-auto w-full">
    <div class="w-full h-[180px]">
        <img class="rounded-lg w-full h-full object-cover" src="${plant.image}" loading="lazy" alt="">
    </div>

    <div class="flex flex-col flex-grow mt-3">
        <h3 class="font-bold text-lg truncate">${plant.name}</h3>
        <p class="text-sm text-gray-600 line-clamp-2">${plant.description}</p>

        <div class="mt-auto">
            <div class="flex justify-between items-center mb-3">
                <p class="bg-[#dcfce7] px-3 py-1 text-[12px] rounded-3xl">${plant.category}</p>
                <p class="font-bold">৳${plant.price}</p>
            </div>
            <button onclick="addToCart('${plant.name}')" class="btn bg-[#3b813e] text-white rounded-full w-full py-2">
                Add To Cart
            </button>
        </div>
    </div>
</div>
        `;
    treeCardContainer.appendChild(div);
  });
};


//add to cart
const addToCart = (name) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="rounded-2xl p-4 bg-[#cff0dc] mb-2">
    <p class="text-[12px] font-semibold">${name}</p>
    </div>
    `
    cartContainer.appendChild(div);
}

