//all container stored here//
const categoryContainer = document.getElementById('category-container');
const treeCardContainer = document.getElementById('tree-card-container');
//tree category load
//load category is done
const loadTreeCategories = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/categories');
    const json = await response.json();
    const category = json.categories;
    //console.log(category);
    
    category.forEach( cat => {
        const li = document.createElement('li');
        li.innerHTML = `
        <li onclick="plantByCategories('${cat.id}')" class="hover:bg-[#3b813e] font-semibold p-2 hover:text-white rounded-xl">${cat.category_name}</li>
        `
        categoryContainer.appendChild(li);
    });

    //using event delegation
    categoryContainer.addEventListener('click', (e) => {
        const allList = document.querySelectorAll('li');
        //console.log(allList);

        allList.forEach( li => {
            li.classList.remove('bg-[#3b813e]', 'text-white');
        })

        if(e.target.tagName === "LI"){
            e.target.classList.add('bg-[#3b813e]', 'text-white');
        }
    })
}
loadTreeCategories();


//All plants 
const allPlants = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/plants');
    const json = await response.json();
    const plant = json.plants;
    //console.log(plant.plants);

    treeCardContainer.innerHTML = "";

    plant.forEach( plant => {
        //console.log(plant);
        const div = document.createElement('div');
        div.innerHTML = `
         <div id="cards" class="space-y-3 bg-white shadow-sm p-4 rounded-lg flex flex-col h-full">
                <div>
                    <img class="w-full object-cover" src="${plant.image}" alt="">
                </div>
                <h3 class="font-bold">${plant.name}</h3>
                <p>${plant.description}</p>
                <div class="flex justify-between items-center">
                    <p class="bg-[#dcfce7] p-2 text-[12px] rounded-3xl">${plant.category}</p>
                    <p class="font-bold">৳${plant.price}</p>
                </div>
                <button class="btn bg-[#3b813e] text-white rounded-4xl w-full">Add To Cart</button>
            </div>
        `
        treeCardContainer.appendChild(div);
    })
}
allPlants();


//get plants by categories
const plantByCategories = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/category/${id}`);
    const json = await response.json();
    const plantByCat = json.plants;

    treeCardContainer.innerHTML = "";


    plantByCat.forEach( plant => {
        const div = document.createElement('div');
        div.innerHTML = `
         <div id="cards" class="space-y-3 bg-white shadow-sm p-4 rounded-lg flex flex-col h-full">
                <div>
                    <img class="w-full object-cover" src="${plant.image}" alt="">
                </div>
                <h3 class="font-bold">${plant.name}</h3>
                <p>${plant.description}</p>
                <div class="flex justify-between items-center">
                    <p class="bg-[#dcfce7] p-2 text-[12px] rounded-3xl">${plant.category}</p>
                    <p class="font-bold">৳${plant.price}</p>
                </div>
                <button class="btn bg-[#3b813e] text-white rounded-4xl w-full">Add To Cart</button>
            </div>
        `
        treeCardContainer.appendChild(div);
    })
}


