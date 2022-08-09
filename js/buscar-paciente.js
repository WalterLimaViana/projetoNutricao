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
        //Imprimindo os dados no console
        console.log(xhr.responseText);
    })
    xhr.send();
})