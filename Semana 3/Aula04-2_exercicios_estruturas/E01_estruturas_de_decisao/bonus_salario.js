

function contraCheque(salario,tempoDeServico){
    var bonus = 0;

        if(tempoDeServico >= 5){
        bonus = salario * 20/100;
    }else{
        bonus = salario * 10/100;
    }
}
    return bonus;
//operador ternário

function contraCheque(salario,tempoDeServico){   
   
    return tempoDeServico >=5 ? salario * 20/100 : salario * 10/100;

}

console.log(contraCheque (1000,2));

//outro operador que pode ser substituido

const contraChequeArrow = (salario, tempoDeServico) => tempoDeServico >=5 ? salario * 20/100 : salario * 10/100;





