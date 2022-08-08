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

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido && alturaValida) {
        // alert('Peso Inválido!');
        tdImc.textContent = 'Peso Inválido!';
        paciente.classList.add('paciente-error');
    } else if (pesoValido && !alturaValida) {
        // alert('Altura Inválida!');
        tdImc.textContent = 'Altura Inválida!';
        paciente.classList.add('paciente-error');
    } else if (!pesoValido && !alturaValida) {
        tdImc.textContent = 'Peso e Altura Inválidos!';
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

function validaPeso(peso) {
    if (peso >= 0 && peso <= 400) {
        return true;
    } else {
        false;
    }
}
function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        false;
    }
}
