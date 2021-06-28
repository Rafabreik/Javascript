var quant, vezes = 0, media, tamanho;




var nomes = [];

function gravarnomes() {
    var elementos = document.getElementById("name").value;
    document.getElementById("name").value = "";
    document.getElementById("name").focus();
    nomes.push(elementos);

    exibirnomes();
}

function exibirnomes() {

    var tabela = "<table border = '1'>"

    tabela += "<tr>"
    tabela += "<td> Posição </td>"
    tabela += "<td> Nomes </td>"
    tabela += "</tr>"

    for (var i = 0; i < nomes.length; i++) {

        tabela += "<tr>"
        tabela += "<td>" + i + "</td>"
        tabela += "<td>" + nomes[i] + "</td>"
        tabela += "</tr>"
    }
    document.getElementById("resultado").innerHTML = tabela + "</table>";
}




















