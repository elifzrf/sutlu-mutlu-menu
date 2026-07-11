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
