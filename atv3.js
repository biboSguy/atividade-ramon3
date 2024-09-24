let listaTarefas = JSON.parse(localStorage.getItem('tarefas')) || []

document.getElementById('bt_tarefa').addEventListener('click', addTarefa)

listaTarefas.forEach(element =>{
    criarElemento(element)
});

function addTarefa(){
    //pega o valor de dentro do input
    const inputTarefa = document.getElementById('input_tarefa').value
    //verificar o valor do input e dar um alert se estiver vazio
    if(!inputTarefa){
        alert('o input esta vazio')
        return
    }
    //adiciona tarefa no array de tarefas
    listaTarefas.push(inputTarefa)
    //coloca a lista no local storage
    localStorage.setItem('tarefas', JSON.stringify(listaTarefas))

    criarElemento(inputTarefa)
}
function criarElemento(inputTarefa){
    //criar o elemento <li>
    const elemento_tarefa = document.createElement('li')
    elemento_tarefa.className = 'item_tarefa'
    //adicionar o texto do input no novo <li>
    const conteudoTarefa = document.createElement('p')
    conteudoTarefa.textContent = inputTarefa
    //adcionar um bot]ao para deletar tarefa no novo <li>
    const botaoDeletar = document.createElement('button')
    botaoDeletar.textContent = 'Deletar Tarefa'
    botaoDeletar.addEventListener('click', ()=>{
        elemento_tarefa.remove()
        listaTarefas = listaTarefas.filter((tarefa) => tarefa !== inputTarefa)
        localStorage.setItem('tarefas', JSON.stringify(listaTarefas))
    })
    //adicionar um botão para completar a tarefa no <li>
    const botaoCompletar = document.createElement('button')
    botaoCompletar.textContent = 'Completar Tarefa'
    botaoCompletar.addEventListener('click', ()=>{
        conteudoTarefa.classList.toggle('completada')
    })
    //adicionar o novo elemento <li> a tag <ul>
    elemento_tarefa.appendChild(conteudoTarefa)
    elemento_tarefa.appendChild(botaoDeletar)
    elemento_tarefa.appendChild(botaoCompletar)
    document.getElementById('lista_tarefas').appendChild(elemento_tarefa)
}