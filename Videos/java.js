var imgs = document.querySelectorAll('img')
var logo = document.querySelector('h1')


addeventos = () =>{

   
/* hovers das imgs adicionando eventos nos videos */
imgs[0].addEventListener("mouseover",function(){
    addclass(imgs[0])
})
imgs[0].addEventListener('mouseout',function(){
    removclass(imgs[0])
})
imgs[1].addEventListener("mouseover",function(){
    addclass(imgs[1])
})
imgs[1].addEventListener('mouseout',function(){
    removclass(imgs[1])
})
imgs[2].addEventListener("mouseover",function(){
    addclass(imgs[2])
})
imgs[2].addEventListener('mouseout',function(){
    removclass(imgs[2])
})
imgs[3].addEventListener("mouseover",function(){
    addclass(imgs[3])
})
imgs[3].addEventListener('mouseout',function(){
    removclass(imgs[3])
})

//Funções de adicionar eventos nos videos

addclass = item => item.className = 'select'

removclass = item => item.className = ''



}
    











window.addEventListener("load",addeventos)


