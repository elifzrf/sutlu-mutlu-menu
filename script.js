function changeLanguage(lang){
    alert("Dil seçildi: " + lang);
}

function searchProduct(){
    let input=document.getElementById("searchInput").value.toLowerCase();
    let cards=document.querySelectorAll(".card");

    cards.forEach(card=>{
        let title=card.querySelector("h2").innerText.toLowerCase();

        if(title.includes(input)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }
    });
}
let menuData = [];
let currentCategory = "all";

async function loadMenu() {
    try {
        const response = await fetch("menu.json");
        const data = await response.json();

        menuData = data.categories;

        createCategoryButtons();
        showProducts();

    } catch (error) {
        console.error("Menü yüklenemedi:", error);
    }
}

function createCategoryButtons() {

    const categoryDiv = document.querySelector(".categories");

    categoryDiv.innerHTML = "";

    const allButton = document.createElement("button");
    allButton.innerText = "Tümü";
    allButton.onclick = () => {
        currentCategory = "all";
        showProducts();
    };

    categoryDiv.appendChild(allButton);

    menuData.forEach(category => {

        const btn = document.createElement("button");

        btn.innerText = category.name;

        btn.onclick = () => {

            currentCategory = category.id;

            showProducts();

        };

        categoryDiv.appendChild(btn);

    });

}

function showProducts() {

    const menu = document.querySelector(".menu");

    menu.innerHTML = "";

    menuData.forEach(category => {

        if (currentCategory !== "all" && category.id !== currentCategory)
            return;

        category.products.forEach(product => {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <h3>${product.price} ₺</h3>
            `;

            menu.appendChild(card);

        });

    });

}

function searchProduct() {

    const text = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const title = card.querySelector("h2").innerText.toLowerCase();

        if (title.includes(text)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}

function changeLanguage(lang){

    alert("Dil desteği bir sonraki adımda eklenecek: " + lang);

}

loadMenu();
