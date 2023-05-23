
let allLists = document.querySelector('#lists');
let countLists = 1;
let inputName = document.querySelector('#inputName')
let createListButton = document.querySelector('#createList');

createListButton.addEventListener('click', createList);


function createList() {
    let name = document.createElement('h3');
    name.textContent = inputName.value;

    let inputItemName = document.createElement('input');
    let buttonCreateItem = document.createElement('button');
    let list = document.createElement('div');
    let orderedItemList = document.createElement('ol');

    buttonCreateItem.textContent = 'Добавить';
    
    list.id = 'list' + countLists;
    list.className = 'list';

    allLists.appendChild(list);
    
    list.appendChild(name);
    list.appendChild(inputItemName);
    list.appendChild(buttonCreateItem);
    list.appendChild(orderedItemList);

    countLists++;
}
