var codligo = 100, quantidade = 2;


switch(codligo){
    case 100 :
        var total = quantidade * 1.2;
        console.log(quantidade+" cachorro(S) quente = R$ "+total);
    break
    case 101 :
        var total = quantidade * 1.3;
        console.log(quantidade+" bauru(s) simples = R$ "+total);
    break
    case 102 :
        var total = quantidade * 1.5;
        console.log(quantidade+" bauru(s) com ovo(s) = R$ "+total);
    break
    case 103 :
        var total = quantidade * 1.2;
        console.log(quantidade+" hambúeguer(s) = R$ "+total);
    break
    case 104 :
        var total = quantidade * 1.3;
        console.log(quantidade+" cheeseburguer = R$ "+total);
    break
    case 105 :
        var total = quantidade * 1.00;
        console.log(quantidade+" refrigerante = R$ "+total);
    break
    
    default: console.log("produto inexistente.");
}