
const addItems = document.querySelectorAll('.add-item');
addItems.forEach(item => {
    item.addEventListener('click', addItemClick);
});

const inputItems = document.querySelectorAll('.todo-item > input');
inputItems.forEach(item => {
    item.addEventListener('keyup', inputEnter)
});

const todoItem = document.querySelectorAll('.todo-item');
todoItem.forEach(item => {
    item.addEventListener('click', todoItemClick)
});

const search = document.querySelector('.search-input');
search.addEventListener('keyup', searchEnter);

function addItemClick(e){

    let parent = e.target.parentElement

    if (parent.className === 'add-item') {
        parent = parent.parentElement;
    }
    console.log(parent.className);
    if (parent.className === 'todo-list') {
        console.log(parent.lastChild);
        
        parent.removeChild(parent.lastElementChild);
        
        const liItem = document.createElement('li');
        liItem.classList.add('todo-item');
        liItem.innerHTML += '<input type="text"></li>';
        liItem.addEventListener('keyup', inputEnter)

        const newAddItem = document.createElement('li');
        newAddItem.classList.add('add-item');
        newAddItem.innerHTML += '<i class="fa-solid fa-plus"></i>';
        newAddItem.addEventListener('click', addItemClick);

        parent.appendChild(liItem);
        parent.appendChild(newAddItem);
    }
}

function inputEnter(e) {
    if (e.keyCode == 13) {
        const value = e.target.value;
        const parent = e.target.parentElement;
        parent.removeChild(parent.firstElementChild);
        parent.textContent = value;
    }

}

function todoItemClick(e) {
    const target = e.target;
    const value = e.target.textContent;
    target.textContent = '';
    target.innerHTML += `<input type="text" /></li>`;
    target.firstElementChild.value = value;
    target.addEventListener('keyup', inputEnter)

}

//여기는 bad 아직 db연결 하는거 귀찮으니까 대충 읽어서 하는거
function searchEnter(e) {
    const todoLists = document.querySelectorAll('.todo-list');
    const value = e.target.value;

    todoLists.forEach(todoList => {
        //console.log(todoList);
        Array.from(todoList.children)
            .filter((item) => !item.textContent.includes(value))
            .forEach((item) => item.classList.add('filtered'));

        Array.from(todoList.children)
            .filter((item) => item.textContent.includes(value))
            .forEach((item) => item.classList.remove('filtered'));
    })

}