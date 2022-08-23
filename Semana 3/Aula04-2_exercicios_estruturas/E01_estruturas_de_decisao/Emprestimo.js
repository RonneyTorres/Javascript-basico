function emprestimo(valorDoEmprestimo,numeroDeParcelas,salario){

    resultado = valorDoEmprestimo / numeroDeParcelas;

    menorValor = salario * 30/100;

    return resultado <= menorValor ? "empréstimo aprovado" : "emprestimo recusado";
}


console.log(emprestimo(6000,20,1000));