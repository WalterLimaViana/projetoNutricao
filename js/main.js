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
    // console.log(peso);
    // console.log(altura);
    //Pegando o valor do IMC na tabela para substituir pelo cálculo:
    var tdImc = paciente.querySelector('.info-imc');
    // console.log(tdImc);

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
        var imc = peso / (altura * altura);
        //Colocar o resultado do IMC dentro da tabela no html
        tdImc.textContent = imc.toFixed(1);
    }
}

//Botão Adicionar
var adicionarPaciente = document.querySelector('#adicionar-paciente');
// console.log(adicionarPaciente);
adicionarPaciente.addEventListener('click', submitForm);

function submitForm(event) {
    //Para mudar o padrão do formulário
    event.preventDefault();
    //Pegar valores que estão nos inputs
    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    //Criando os elementos da tabela:
    //Criar o tr:
    var pacienteTr = document.createElement('tr');
    //Criar os td's:
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');
    //Inserir os nomes de cada coluna que vai receber os values
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //Inserindo as td's dentro da tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    //Inserindo os dados do novo paciente dentro da tabela pacientes
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);






    // alert('Enviado com sucesso!');
    // console.log('Enviado com sucesso!');
}
