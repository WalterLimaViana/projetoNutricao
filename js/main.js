var title = document.querySelector('.title');
title.textContent = "Nutrição";
//Cálculo IMC
//pegar dados para calcular o IMC
var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    console.log(peso);
    console.log(altura);
    //Pegando o valor do IMC na tabela para substituir pelo cálculo:
    var tdImc = paciente.querySelector('.info-imc');
    console.log(tdImc);

    if (peso <= 0 || peso >= 400) {
        alert('Peso Inválido!');
    } else if (altura <= 0 || altura >= 3.00) {
        alert('Altura Inválida!');
    } else {
        // Calculando o IMC
        var imc = peso / (altura * altura);
        //Colocar o resultado do IMC dentro da tabela no html
        tdImc.textContent = imc.toFixed(0);
    }
}


