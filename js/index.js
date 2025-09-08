//all container stored here//
const categoryContainer = document.getElementById('category-container');

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
        <li class="hover:bg-[#3b813e] font-semibold p-2 hover:text-white rounded-xl">${cat.category_name}</li>
        `
        categoryContainer.appendChild(li);
    });

    //using event delegation
    categoryContainer.addEventListener('click', (e) => {
        const allList = document.querySelectorAll('li');

        allList.forEach( li => {
            li.classList.remove('hover:bg-[#3b813e]', 'hover:text-white');
        })

        if(e.target.localName === "li"){
            e.target.classList.add('hover:bg-[#3b813e]', 'hover:text-white');
        }
    })


}
loadTreeCategories();


