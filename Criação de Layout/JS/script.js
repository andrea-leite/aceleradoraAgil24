const formDia = document.querySelector('#formDia');
const formNoite = document.querySelector('#formNoite');
const inputDia = document.querySelector('#inputDia');
const inputNoite = document.querySelector('#inputNoite');
const listDia = document.querySelector('#listDia');
const listNoite = document.querySelector('#listNoite');

let tasksDia = [];
let tasksNoite = [];

formDia.addEventListener('submit', (event) => {''
  event.preventDefault();
  const text = inputDia.value.trim();
  if (text !== '') {
    tasksDia.push({
      text,
      completed: false    
    });
    renderDia();
    inputDia.value = '';
  }
});

formNoite.addEventListener('submit', (event) => {''
  event.preventDefault();
  const text = inputNoite.value.trim();
  if (text !== '') {
    tasksNoite.push({
      text,
      completed: false
    });
    renderNoite();
    inputNoite.value = '';
  }
});

function renderDia() {
  listDia.innerHTML = '';

  tasksDia.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <div>
        
        <button class="delete-button" data-index="${index}">Excluir</button>
      </div>
    `;

   
    const deleteButton = li.querySelector('.delete-button');

  

    deleteButton.addEventListener('click', () => {
      tasksDia.splice(index, 1);
      renderDia();
    });

    listDia.appendChild(li);
  });
}

function renderNoite() {
  listNoite.innerHTML = '';

  tasksNoite.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <div>
        <button class="delete-button" data-index="${index}">Excluir</button>
      </div>
    `;

    const deleteButton = li.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      tasksNoite.splice(index, 1);
      renderNoite();
    });
    
    listNoite.appendChild(li);
  });
}
