function composicao(...func){
   return function(vall){
       return func.reduce((c,fct)=>fct(c) ,vall)
   }
    
}

function gritar (texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return `${texto}!!!!`
}

function tornarLento(texto){
    return texto.split('').join(' ')
}

//Chamando função pela variavel
const resultado = composicao(gritar,enfatizar,tornarLento)("Tome Cuidado")

console.log(resultado)

//Chamando função pelo direto pelo console log

console.log(composicao(tornarLento,enfatizar,gritar)('Pare'))

//Recriando com funções arrow

soma = (...ads) =>{
    return function(valor){
        return ads.reduce((c,func) => func(c),valor)
    }
}

colocarUm = num=> num+=1

colocarDois = num=> num +=2

colocarTres = num=> num +=3

colocarCem = num=> num += 100


let Resultado = soma(colocarCem,colocarDois,colocarUm)(100)

console.log(Resultado)

