const list = document.querySelectorAll('a')
const obg = document.querySelector('li#list')
const sub = document.querySelector('ul.dropdown')
const obgs = document.querySelectorAll('li')
const uls = document.querySelector('ul.menu2')
const img1 = document.querySelector('div#imagem1')


const items = [
    {
        id: 0,
        nome: 'Play',
        img: 'itens2.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'GTA',
        img: 'itens2.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Nitendo',
        img: 'itens2.jpg',
        quantidade: 0
    },
    
   // Acima Itens da Loja 
]


addEventos = () => {
    obg.addEventListener('mouseover', function () {
        sub.className = 'dropdownon'
    })
    obg.addEventListener('mouseout', function () {
        sub.className = 'dropdown'

    })
    //Acima Abrir e Fechar menu dropdown

    obgs[1].addEventListener('click',function(){

        list[10].innerHTML = 'Home Brews'
        list[11].innerHTML = 'Emunands'
        list[12].innerHTML = 'Arcade'
        list[13].innerHTML = 'Computador'
        list[14].innerHTML = 'Cheats'
    })

    obgs[2].addEventListener('click', function () {
        list[10].innerHTML = 'Xbox Classic'
        list[11].innerHTML = 'Xbox One'
        list[12].innerHTML = 'Xbox 360'
        list[13].innerHTML = 'Xbox Series'
        list[14].innerHTML = 'Cheats'

        items.map((val) => {
                img1.innerHTML += `
                <ul>
                    <li><img src="`+ val.img + `"/></li>
                    <li>`+ val.nome + `</li>
                    <li><a key="`+ val.id + `" href="#">Fazer o Download !</a></li>
                </ul> 
            `
             })
        
    })

obgs[3].addEventListener('click', function () {

    list[10].innerHTML = "PlayStaton 1"
    list[11].innerHTML = "PlayStaton 2"
    list[12].innerHTML = "PlayStaton 3"
    list[13].innerHTML = "PlayStaton 4"
    list[14].innerHTML = "PlayStaton 5"
})

obgs[4].addEventListener('click', function () {
    list[10].innerHTML = 'Nitendo Wii'
    list[11].innerHTML = 'Nitendo WiiU'
    list[12].innerHTML = 'Nitendo 3DS'
    list[13].innerHTML = 'Nitendo Switch'
    list[14].innerHTML = 'Nitendo 64'

})
// Acima Listar dinâmicamente as categorias na lista 
    

}

window.addEventListener("load", addEventos);