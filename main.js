// evento scroll

let navbar = document.querySelector(".navbar")

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        navbar.classList.add("nav-scrolled")
    } else {
        navbar.classList.remove("nav-scrolled")
    }
})


let numUsers = document.querySelector("#numUsers")
let numArticles = document.querySelector("#numArticles")
let numComments = document.querySelector("#numComments")



// numeri dinamici
function createInterval(id, finalNumber, frequency){
    let counter = 0;

    let intervallo = setInterval(() => {
        if (counter < finalNumber){
            counter ++
            id.innerHTML = counter;
        } else {
            clearInterval(intervallo)
        }
    }, frequency);
}



// intersection observer : una classe è un modo per creare un nuovo oggetto con determinate caratteristiche predefinite. non possiamo andare a modificare queste caratteristiche ma possiamo costumizzarne i valori. una classe ha sempre bisogno della keyword 'new'

let isIntersected = false;

// INTERSECTION OBSERVER NUMERI DINAMICI
const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && isIntersected == false) {
            createInterval(numArticles, 500, 10)
            createInterval(numUsers, 700, .8)
            createInterval(numComments, 800, .7)
            isIntersected = true;
        }
    });
})

intersectionObserver.observe(numArticles);

// ULTIMI ANNUNCI

let announcements = [
    {name: "Goku action figure SS", categoria: "Action Figure", prezzo:  300, img: "./media/goku.jpg"},
    {name: "Maglia Dragonball Z", categoria: "T-shirt", prezzo:  30, img: "./media/goku4.jpg"},
    {name: "Carte Dragonball Super", categoria: "Card", prezzo:  10, img: "./media/broly.jpg"},
    {name: "Serie DragoBall Z - stagione uno", categoria: "DVD", prezzo:  20, img: "./media/Vegeta.jpg"},
    {name: "Portachiavi DBZ", categoria: "Gadget", prezzo:  7, img: "./media/ghoan.jpg"},
];


let cardWrapper = document.querySelector("#cardWrapper")

announcements.forEach((annuncio, i) => {
    if (i >= announcements.length -3) { 
        let col = document.createElement("div");
        col.classList.add ("col-11", "col-md-3")
        col.innerHTML = `
                        <div class="card position-relative h-100 my-3">
                        <div class="overflow-hidden">
                        <img src=${annuncio.img} class="img-card card-img-top" alt="..."> 
                        </div>
                        <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h4 class="card-title text-center fw-bold">${annuncio.name}</h4>
                            <p class="card-text"> Categoria: <span class="fs-5">${annuncio.categoria}</span></p>
                            <p class="card-text"> Prezzo: <span class="fs-5">${annuncio.prezzo}</span></p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <i class="bi bi-heart fs-4"></i>
                            <button class="btnn">
                            Aggiungi al carrello
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                New
                            </span>
                            </button>
                        </div>
                        </div>
                        </div>
                        `
        cardWrapper.appendChild (col)
    }
} )