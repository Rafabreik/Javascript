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
    }
]


addEventos = () => {
    obg.addEventListener('mouseover', function () {
        sub.className = 'dropdownon'
    })
    obg.addEventListener('mouseout', function () {
        sub.className = 'dropdown'

    })
    //Acima Abrir e Fechar menu dropdown

    obgs[1].addEventListener('click', function () {
        list[9].innerHTML = 'Xbox Classic'
        list[10].innerHTML = 'Xbox One'
        list[11].innerHTML = 'Xbox 360'
        list[12].innerHTML = 'Xbox Series'
        list[13].innerHTML = 'Cheats'

        

        if (img1.lenght < 0) {
            items.map((val) => {
                img1.innerHTML += `
                <ul>
                    <li><img src="`+ val.img + `"/></li>
                    <li>`+ val.nome + `</li>
                    <li><a key="`+ val.id + `" href="#">Adicionar ao carrinho !</a></li>
                </ul> 
            `
             })
        }
    })

obgs[2].addEventListener('click', function () {

    list[9].innerHTML = "PlayStaton 1"
    list[10].innerHTML = "PlayStaton 2"
    list[11].innerHTML = "PlayStaton 3"
    list[12].innerHTML = "PlayStaton 4"
    list[13].innerHTML = "PlayStaton 5"
})

obgs[3].addEventListener('click', function () {
    list[9].innerHTML = 'Nitendo Wii'
    list[10].innerHTML = 'Nitendo WiiU'
    list[11].innerHTML = 'Nitendo 3DS'
    list[12].innerHTML = 'Nitendo Switch'

})

    

}

window.addEventListener("load", addEventos);