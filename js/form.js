//Botão Adicionar
var adicionarPaciente = document.querySelector('#adicionar-paciente');
// console.log(adicionarPaciente);
adicionarPaciente.addEventListener('click', submitForm);

function submitForm(event) {
    //Para mudar o padrão do formulário
    event.preventDefault();
    //Pegar valores que estão nos inputs
    var form = document.querySelector('#form-adiciona');
    var paciente = getInformacoes(form);
    //Monta o tr do novo paciente para ser inserido na tabela
    var pacienteTr = montarTabela(paciente);
    //Validando as informações
    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibirMsgErro(erros);
        return;
    }

    //Insere os dados do novo paciente dentro da tabela pacientes
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
    form.reset();
    var mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = '';
    alert('Enviado com sucesso!');

}

function getInformacoes(form) {
    //Pega cada um dos values dos inputs
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montarTabela(paciente) {
    //Cria a tabela e adiciona uma classe a ela
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');
    //Cria as td's utilizando a função montarTd que pega as informações de cada input e coloca dentro da tabela paciente
    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'));
    //Retorna toda as informações.
    return pacienteTr;
}

function montarTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push('Nome do paciente não pode estar em branco!')
    }
    if (paciente.gordura.length == 0) {
        erros.push('Gordura não pode estar em branco!')
    }
    if (paciente.altura.length == 0) {
        erros.push('Altura não pode estar em branco!')
    }
    if (paciente.peso.length == 0) {
        erros.push('Peso não pode estar em branco!')
    }

    if (!validaPeso(paciente.peso)) {
        erros.push('Peso inválido!');
    }
    if (!validaAltura(paciente.altura)) {
        erros.push('Altura inválido!');
    }

    return erros
}

function exibirMsgErro(erros) {
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';
    erros.forEach(function (erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}