const list = document.querySelectorAll('a')
const obg = document.querySelector('li#list')
const sub = document.querySelector('ul.dropdown')
const obgs = document.querySelectorAll('li')
const uls = document.querySelector('ul.menu2')


function addEventos() {
    obg.addEventListener('mouseover', function () {
        sub.className = 'dropdownon'
    })
    obg.addEventListener('mouseout', function () {
        sub.className = 'dropdown'

    })

    obgs[1].addEventListener('click', function () {
        list[9].innerHTML = 'Xbox Classic'
        list[10].innerHTML = 'Xbox One'
        list[11].innerHTML = 'Xbox Series'

        list[12].style.display = 'none'
        list[13].style.display = 'none'
    })

    obgs[2].addEventListener('click',function(){

        list[12].style.display = ''
        list[13].style.display = ''
        
       list[9].innerHTML = "PlayStaton 1"
       list[10].innerHTML = "PlayStaton 2"
       list[11].innerHTML = "PlayStaton 3"
       list[12].innerHTML = "PlayStaton 4"
       list[13].innerHTML = "PlayStaton 5"
    })
    
    obgs[3].addEventListener('click',function(){
        list[9].innerHTML = 'Nitendo Wii'
        list[10].innerHTML = 'Nitendo 3DS'
        list[11].innerHTML = 'Nitendo Switch'

        list[12].style.display = 'none'
        list[13].style.display = 'none'
        
    })



}

window.addEventListener("load", addEventos);