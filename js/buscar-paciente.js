//selecionando o botão do html para utilizar no JS
var botaoAdicionar = document.querySelector('#buscar-paciente');
//Adicionando uma função através do click para o botão utilizando o addEventListener
botaoAdicionar.addEventListener('click', function () {
    //Essa função XMLHttpRequest será utilizadda para importar dados de outrapágina http
    var xhr = new XMLHttpRequest();
    //O .open literalmente abre a página
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    //Carregando os dados
    xhr.addEventListener('load', function () {

        //Pegar o span para mostrar o erro de conexão
        var erroAjax = document.querySelector("#erro-ajax");
        //Verificando erros
        if (xhr.status === 200) {
            //Se caso não houver erro, será adicionado aclasse invisivel ao span que ocultará a mensagen de erro
            erroAjax.classList.add('invisivel');
            //Imprimindo os dados no console
            //console.log(xhr.responseText);
            var resposta = xhr.responseText;
            //Converter o arquivo JSON 
            var pacientes = JSON.parse(resposta);
            //Pegando cada paciente e adicioando na tabela
            pacientes.forEach(function (paciente) {
                adicionarPacienteNaTabela(paciente);
            });
        } else {
            //Mostra no console o status e o erro
            console.log(xhr.status);
            console.log(xhr.responseText);
            //exibe na tela através de um alert o erro
            alert("Error: " + xhr.status + " " + xhr.responseText);
            //mostra através de um span a mensagem de erro, tirando a classe que ocultava o span
            erroAjax.classList.remove('invisivel');
        }

    })
    xhr.send();
})