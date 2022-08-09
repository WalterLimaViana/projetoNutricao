
// Seleciona a tabela inteira
var tabela = document.querySelectorAll('table');
//Para cada item da tabela, adiciona um listener
tabela.forEach(function (tabela) {
    tabela.addEventListener('dblclick', function (event) {
        //Colocando um efeito para excluir a linha utilizando um fadeOut
        event.target.parentNode.classList.add('fadeOut');

        //Criar uma variável do item a ser clicado
        // var eventTarget = event.target;
        /*Criar uma variável do pai do item, pois assim ao invés de excluir somente um item da tabela 
        será excluido a linha inteira, que é o pai(tr).*/
        // var targetFather = event.target.parentNode;
        //Removendo o pai
        // targetFather.remove();

        //Ou de forma mais simples: 

        event.target.parentNode.remove();
    });
});
// var pacientes = document.querySelectorAll('.paciente');
// pacientes.forEach(function (paciente) {
//     paciente.addEventListener('dblclick', function () {
//         this.remove();
//     });
// });