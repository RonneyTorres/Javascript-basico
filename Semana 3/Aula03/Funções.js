/*
    Programa javascript que demonstra funções
*/

const painel = document.getElementById('painel');

let texto=''

let numero1=30, numero2=10;

//função com parâmetro e com retorno
function soma(variavel1,variavel2){
    return variavel1 + variavel2;
}
//função sem paramentro e com retorno
function endereço(){
    return "Av. beira mar 212";
}
//função sem parametro e sem retorno
function OlaMundo(){
    console.log("Olá Mundo!")
}

OlaMundo();

texto = endereço();


const resultado = document.createTextNode(texto);
painel.appendChild(resultado);
