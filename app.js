"user strict"

const btnTrocaCor = document.getElementById("botaoTrocarCor")
const verdeClaro = document.getElementById("verdeC")
const vermelhoClaro = document.getElementById("vermelhoC")
// O que isso Faz?
/* Ele quer dizer oq?
    ele está dizendo que no documento(html)
    ele irá pegar o id  que eu preciso
*/

function trocaCor(){
    const corUsuario = document.getElementById("corDoUsuario").value
    // value é o valor no caso é o testo
    if (corUsuario == "rosa"){
        document.documentElement.style.setProperty("--cor","pink")
    }else if(corUsuario == "amarelo"){
        document.documentElement.style.setProperty("--cor","yellow")
    }else if(corUsuario == "verde"){
        document.documentElement.style.setProperty("--cor","green")}
        else if(corUsuario == "vermelho"){
            document.documentElement.style.setProperty("--cor", "red")
        }
    else{
        document.documentElement.style.setProperty("--cor",corUsuario)
        // ai esta dizendo para pegar no style o variavel 
        //cor e escrever quando o usuario escrever
    }
    
}



function verde (){
    document.documentElement.style.setProperty("--cor", "lightgreen")
}

function verme (){
    document.documentElement.style.setProperty("--cor", "rgb(240, 142, 142)")
}

vermelhoClaro.addEventListener("click", verme)
verdeClaro.addEventListener("click", verde)
btnTrocaCor.addEventListener("click", trocaCor)

/*
o que está fazendo?
    Eu estou falando para o botão adicionar
    o evento e confirmar se está acontecendo
    ai no (está o argumento), 1- que é para clicar
    e o segundo e oq ira acontecer, por isso o funtion

*/