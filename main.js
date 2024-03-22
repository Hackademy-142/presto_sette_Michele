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

createInterval(numArticles, 500, 10)
createInterval(numUsers, 700, .8)
createInterval(numComments, 800, .7)