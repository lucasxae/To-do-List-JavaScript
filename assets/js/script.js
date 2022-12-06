// CRIAÇÃO E DECLARÇÃO DAS VARIAVEIS
const todoList = document.getElementById('task-form');
const taskList = document.getElementById('tasks');
// FUNÇÃO PARA MOSTRAR AS TAREFAS CRIADAS PELA FUNÇÃO addTask
todoList.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {                             // ESSA FUNÇÃO VAI CRIAR AS TAREFAS COM O CHECKBOX E A ANIMAÇÃO DE MARCAR ELAS
	const taskContainer = document.createElement('div');    // CRIAR O NOME DA TAREFA QUE VAI APARECER NA TELA 
	const newTask = document.createElement('input');        // CRIAR O INPUT (CHECKBOX)
	const taskLabel = document.createElement('label');      //
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}