var idade = 175;

if(idade >= 5 && idade <= 7){
    console.log("Infantil A");
}else if(idade >= 8 && idade <= 10){
    console.log("Infatil B");
}else if(idade >= 11 && idade <= 13 ){
    console.log("Juvenil A");
}else if(idade >= 14 && idade <=17){
    console.log("Juvenil B");
}else if(idade >= 18 && idade <= 50){
    console.log("Adulto");
}else if(idade >= 51 && idade <= 130){
    console.log("Melhor idade");
}else{
    console.log("Idade inválida")
}