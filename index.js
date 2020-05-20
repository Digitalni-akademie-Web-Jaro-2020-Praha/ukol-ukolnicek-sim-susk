'use strict';

console.log('funguju!');

//1. Smažte obsah elementu todo__tasks uvnitř souboru index.html.
//2. V JavaScriptu vytvořte pole řetězců tasks, které bude reprezentovat seznam úkolů.

const tasks = ['udělat úkol', 'uvařit', 'vyžehlit', 'vyprat'];

//3. Vytvořte funkci updateTasks, která zobrazí na stránce seznam úkolů dle toho, co je obsaženo v poli tasks.

const updateTasks = () => {
  const tasksElm = document.querySelector('.todo__tasks');
  tasksElm.innerHTML = '';

  for (let i = 0; i < tasks.length; i += 1) {
    tasksElm.innerHTML += `
    <div class="tasks">${tasks[i]}</div>
    `;
  }
};

updateTasks()

//4. Umožněte uživateli přidat nový úkol pomocí textového políčka. Vždy, když uživatel klikne tlačítko přidat, vložte do pole tasks obsah textového políčka a zavolejte funkci updateTasks, která aktualizuje vaši stránku

const addTask = () => {
  const addTaskElm = document.querySelector('#new-task');
  
  if (addTaskElm.value != '') {
    tasks.push(addTaskElm.value);
  }

  addTaskElm.value = '';
  updateTasks();
}

const btnElm = document.querySelector('button');
btnElm.addEventListener('click', addTask);

