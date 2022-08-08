//Cálculo IMC
//pegar dados para calcular o IMC
var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    //Pegando o valor do IMC na tabela para substituir pelo cálculo:
    var tdImc = paciente.querySelector('.info-imc');
    if (peso <= 0 || peso >= 400) {
        // alert('Peso Inválido!');
        tdImc.textContent = 'Peso Inválido!';
        paciente.classList.add('paciente-error');
    } else if (altura <= 0 || altura >= 3.00) {
        // alert('Altura Inválida!');
        tdImc.textContent = 'Altura Inválida!';
        paciente.classList.add('paciente-error');
    } else {
        // Calculando o IMC
        var imc = calcularImc(peso, altura);
        //Colocar o resultado do IMC dentro da tabela no html
        tdImc.textContent = imc;
    }
}

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(1);
}
