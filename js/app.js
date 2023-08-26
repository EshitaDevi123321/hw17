let darkModeBtn = document.querySelector(".darkModeBtn");
let body = document.querySelector(`body`)
let sunIcone = document.querySelector(`.sun`)

let heading = document.querySelector(`h2`)


function darkMode () {
    body.classList.toggle(`darkmode`)

    if (body.classList.contains(`darkmode`)) {
        sunIcone.style.marginTop = `-40PX`

        heading.innerHTML = `Dark Mode`



    } else{
        sunIcone.style.marginTop = "0PX";
        heading.innerHTML = `Light Mode`

        
    }
}


darkModeBtn.addEventListener(`click`, darkMode)



