// var pacientes = document.querySelectorAll('.paciente');
// pacientes.forEach(function (paciente) {
//     paciente.addEventListener('dblclick', function () {
//         this.remove();
//     });
// });

// Seleciona a tabela inteira
var tabela = document.querySelectorAll('table');
//Para cada item da tabela, adiciona um listener
tabela.forEach(function (tabela) {
    tabela.addEventListener('dblclick', function (event) {
        //Criar uma variável do item a ser cliclado
        var eventTarget = event.target;
        /*Criar uma variável do pai do item, pois assim ao invés de excluir somente um item da tabela 
        será excluido a linha inteira, que é o pai(tr).*/
        var targetFather = event.target.parentNode;
        //Removendo o pai
        targetFather.remove();
    });
});