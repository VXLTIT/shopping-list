
let allLists = document.querySelector('#lists');
let countLists = 1;
let inputName = document.querySelector('#inputName');
let createListButton = document.querySelector('#createList');

createListButton.addEventListener('click', createList);


function createList() {
    let name = document.createElement('h3');
    name.textContent = inputName.value;
    inputName.value = '';

    let inputItemName = document.createElement('input');
    let buttonCreateItem = document.createElement('button');
    let list = document.createElement('div');
    let orderedItemList = document.createElement('ol');
    let removeListButton = document.createElement('button');
    let listNameBlock = document.createElement('div');

    listNameBlock.id = 'listNameBlock';
    removeListButton.id = 'removeListButton';

    buttonCreateItem.textContent = 'Добавить';
    removeListButton.textContent = 'Удалить лист';
    
    list.id = 'list' + countLists;
    list.className = 'list';

    allLists.appendChild(list);
    list.appendChild(listNameBlock);

    listNameBlock.appendChild(name);
    listNameBlock.appendChild(removeListButton);

    list.appendChild(inputItemName);
    list.appendChild(buttonCreateItem);
    list.appendChild(orderedItemList);

    buttonCreateItem.addEventListener('click', createItem);
    removeListButton.addEventListener('click', removeList);
    countLists++;

    function createItem() {

    let item = document.createElement('li');
    item.textContent = inputItemName.value;
    inputItemName.value = '';

    orderedItemList.appendChild(item);

    }

    function removeList() {
        list.remove();
    }

}

