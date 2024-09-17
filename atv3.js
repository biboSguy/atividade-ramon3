document.getElementById('bt_tarefa').addEventListener('click', addTarefa)

//inicializar uma lista vazia

//verificar se existe uma lista no local storage

//fazer um lao for pra cada tarefa, chamar a func addTarefa]

//quando add uma tarefa, add no local storage também

//quando remover uma tarefa, remover do local storage também

function addTarefa(){
    //pega o valor de dentro do input
    const inputTarefa = document.getElementById('input_tarefa').value
    //verificar o valor do input e dar um alert se estiver vazio
    if(!inputTarefa){
        alert('o input esta vazio')
        return
    }
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