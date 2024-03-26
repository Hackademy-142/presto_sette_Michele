// evento scroll

let navbar = document.querySelector(".navbar")

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        navbar.classList.add("nav-scrolled")
    } else {
        navbar.classList.remove("nav-scrolled")
    }
})


// JSON (javaScript Object Notation) -> è un formato di dati leggero che si utilizza per far viaggiare dati online

// API (application Programming Interface) è un protocollo di comunicazione che mette in contatto due sistemi per lo scambio di iterazioni.

// una volta creata una fetch si scrive codice all'interno della stessa

fetch("./dragonball.json").then( (response) => response.json() ).then( (data) => {

    let articlesWrapper = document.querySelector("#articlesWrapper")

    function createCards(){
        data.forEach( (articolo,i) => {
            let col = document.createElement("div");
            col.classList.add ("col-11", "col-md-4", "my-3",)
            col.innerHTML = `
                                <div class="card position-relative h-100 my-3" >
                                <div class="overflow-hidden">
                                <img src=${articolo.img} class="img-card card-img-top" alt="..."> 
                                </div>
                                <div class="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h4 class="card-title text-center fw-bold">${articolo.name}</h4>
                                    <p class="card-text"> Categoria: <span class="fs-5">${articolo.categoria}</span></p>
                                    <p class="card-text"> Prezzo: <span class="fs-5">${articolo.prezzo}</span></p>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <i class="bi bi-heart fs-4"></i>
                                    <a href="#" class="btnn text-decoration-none">Aggiungi al Carrello</a>
                                </div>
                                </div>
                                </div>
                            `
                articlesWrapper.appendChild(col)
        });
    }
    createCards()

    // categorie

    let radioWrapper = document.querySelector("#radioWrapper")

    function setCategories (){
        let categories = data.map( (el) => el.categoria)
        let uniqueCategories = []
        categories.forEach( (category) => {
            if (!uniqueCategories.includes(category)){
                uniqueCategories.push(category)
            } 
        })

    uniqueCategories.sort().forEach((categoria) =>{
        let div = document.createElement ("div")
        div.classList.add("form-check")
        div.innerHTML = `
                        
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                            <label class="form-check-label" for="flexRadioDefault2">
                            ${categoria}
                            </label>
                        
        
                        `
        radioWrapper.appendChild(div)
    })

    }
    setCategories()


}) 

