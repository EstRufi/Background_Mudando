"user strict"

const btnTrocaCor = document.getElementById("botaoTrocarCor")
// O que isso Faz?
/* Ele quer dizer oq?
    ele está dizendo que no documento(html)
    ele irá pegar o id  que eu preciso
*/

function trocaCor(){
    const corUsuario = document.getElementById("corDoUsuario").value
    // value é o valor no caso é o testo
    document.documentElement.style.setProperty("--cor",corUsuario)
    // ai esta dizendo para pegar no style o variavel 
    //cor e escrever quando o usuario escrever
}

btnTrocaCor.addEventListener("click", trocaCor)

/*
o que está fazendo?
    Eu estou falando para o botão adicionar
    o evento e confirmar se está acontecendo
    ai no (está o argumento), 1- que é para clicar
    e o segundo e oq ira acontecer, por isso o funtion

*/