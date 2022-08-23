var numero = 764;

var unidade = numero % 10;

var dezena = ((numero % 100)-unidade)/10;

var centena = Math.floor(numero / 100);


console.log("centena = "+centena);
console.log("dezena = "+dezena);
console.log("unidade = "+unidade);