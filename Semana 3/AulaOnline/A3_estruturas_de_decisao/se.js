//se o resto da divisão por 2 for igual a 0 o número e par.
/*operador ternário
var numero = 67;
console.log(numero % 2 == 0? "númemo par" : "número ímpar");

console.log(nota >=7 ? "Aluno aprovado" : "Aluno não foi aprovado");
*/
var nota = 8;
var notaValida = nota >= 0 && nota <= 10;
/*
if(notaValida && nota <=3){
    console.log("O aluno foi reprovado.");
}else if(notaValida && nota <7){
    console.log("O Aluno está de recuperação.")
}
else{
    console.log("O aluno aprovado.")
}
*/
if(notaValida && nota >=7){
    console.log("O aluno foi aprovado.");
}else if(notaValida && nota >=3){

    console.log("O aluno está de recuperação.");

    nota = 8

    if(notaValida && nota >= 5){
        console.log("O aluno está aprovado");
    }else if(notaValida){
        console.log("O aluno está reprovado");
    }else{
        console.log("Nota invalida")
    }
}
else if(notaValida){
    console.log("O aluno está reprovado.");
}else{
    console.log("Nota invalida");
}
if(botaoPressionado){
    console.log("O botão foi pressionado");
}
