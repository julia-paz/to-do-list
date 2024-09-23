// Referências ao DOM (Document Object Model) - Pegamos elementos da página HTML para manipular

const modal = document.getElementById('modal');
// O Modal que aparece para adicionar tarefas

const btnAbrirModal = document.getElementById('abrir-modal');
// Botão que abre o modal

const btnFecharModal = document.querySelector('.close');
// Botão de fechar o modal o (o "X")

const inputTarefa = document.getElementById('nova-tarefa');
// Campo de input para digitar o nome da nova tarefa

const btnAdicionarTarefa = document.getElementById('adicionar-tarefa');
// Botão pra adicionar a tarefa

// Listas de tarefas para cada fase: pendente, andamento, progresso e concluída
const listaPendentes = document.getElementById('tarefas-pendentes');
const listaAndamento = document.getElementById('tarefas-andamento');
const listaProgresso = document.getElementById('tarefas-progresso');
const listaConcluídas = document.getElementById('tarefas-concluidas');

// Abre o Modal quando o botão "Nova Tarefa" é clicado
btnAbrirModal.addEventListener('click', function () {
    modal.style.display = 'flex'; // O modal se torna visível
});

// Fecha o Modal quando o botão "X" (fechar) é clicado
btnFecharModal.addEventListener('click', function () {
    modal.style.display = 'none'; // O modal é escondido
});

// Adiciona uma tarefa à lista de "Pendentes" quando o botão "Adicionar" é clicado
btnAdicionarTarefa.addEventListener('click', function () {
    const tarefaTexto = inputTarefa.value; // Pega o valor digitado no input (nome da tarefa)
//

if (tarefaTexto === '') {
    // Verifica se o campo está vazio
    alert('Digite uma tarefa!'); // Mostra um alerta caso o campo esteja vazio
    return; // Interrompe a função se o campo estiver vazio
}

adicionarTarefa(listaPendentes, tarefaTexto); // Chama a função para a dicionar a tarefa á lista de pendentes
inputTarefa.value = ''; // Limpa o campo de input após adicionar a tarefa
modal.style.display = 'none'; // Fecha o modal após adicionar a tarefa
});

// Função que adiciona uma tarefa à lista especificada (neste caso, pendentes)
function adicionarTarefa(lista, texto) {
    const novaTarefa = document.createElement('li'); // Cria um novo elemento <li> (um item de lista)
    novaTarefa.innerText = texto; // Define o texto do item como o valor digitado no input

    // Cria um botão para mover a tarefa entre as colunas
    const btnMover = document.createElement('button');
    btnMover.classList.add('mover-tarefa'); // Adiciona uma classe CSS para estilizar o botão
    btnMover.innerText = 'Mover'; // O texto do botão será "Mover"

    // Evento que será chamado quando o botão "Mover" for clicado 
    btnAbrirModal.Mover.addEventListener('click', function () {
        moverTarefa(novaTarefa); // Chama a função de mover a tarefa para outra lista
    });

    novaTarefa.appendChild(btnMover); // Adiciona o botão "Mover" dentro da nova tarefa
    lista.appendChild(novaTarefa); // Adiciona a nova tarefa à lista específica (pendentes, andamento, etc.)
}

// Função que move uma tarefa entre as colunas
function moverTarefa(tarefa) {
    // Verifica qual lista a tarefa pertence e move para a próxima lista
    if (tarefa.parentElement === listaPendentes) {
        listaAndamento.appendChild(tarefa); // Move a tarefa de "Pendentes" para "Em andamento"
    } else if (tarefa.parentElement === listaAndamento) {
        listaProgresso.appendChild(tarefa); // Move de "Em Andamento" para "Em Progresso"
    } else if (tarefa.parentElement === listaProgresso) {
        listaConcluídas.appendChild(tarefa); // Move de "Em Proresso" para "Concluídas"
        tarefa.removeChild(tarefa.querySelector('button')); // Remove o botão "Mover" quando a tarefa estiver concluída
    }
}

// Fecha o modal se o usuário clicar fora da dárea do modal (na tela escura)
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Fecha o modal ao clicar fora dele
    }
};