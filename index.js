
let allLists = document.querySelector('#lists');
let countLists = 1;
let inputName = document.querySelector('#inputName');
let createListButton = document.querySelector('#createList');

createListButton.addEventListener('click', createList);


function createList() {

    if(!inputName.value) return 0;

    // Объявление переменных необходимых для создания одного списка:
    let inputItemName = document.createElement('input');
    let createItemButton = document.createElement('button');
    let list = document.createElement('div');
    let orderedItemList = document.createElement('ol');
    let removeListButton = document.createElement('button');
    let listNameBlock = document.createElement('div');
    let listInputBlock = document.createElement('div');
    let name = document.createElement('h3');


    name.textContent = inputName.value;
    inputName.value = '';

    listNameBlock.id = 'listNameBlock';
    removeListButton.id = 'removeListButton';

    createItemButton.textContent = 'Добавить';
    removeListButton.textContent = 'Удалить лист';
    
    list.id = 'list' + countLists;
    list.className = 'list';

    allLists.appendChild(list);
    list.appendChild(listNameBlock);

    listNameBlock.appendChild(name);
    listNameBlock.appendChild(removeListButton);

    list.appendChild(listInputBlock);

    listInputBlock.appendChild(inputItemName);
    listInputBlock.appendChild(createItemButton);
    list.appendChild(orderedItemList);

    createItemButton.addEventListener('click', createItem);
    removeListButton.addEventListener('click', removeList);

    countLists++;


    function createItem() {

        if (!inputItemName.value) return 0;


        let li = document.createElement('li');
        let item = document.createElement('div');
        let itemText = document.createElement('p');
        let removeItemButton = document.createElement('button');
    
        itemText.textContent = inputItemName.value;
        inputItemName.value = '';
    
        removeItemButton.textContent = 'Удалить элемент';
    
        orderedItemList.appendChild(li);
        li.appendChild(item);
        item.appendChild(itemText);
        item.appendChild(removeItemButton);
    
        removeItemButton.addEventListener('click', removeItem);
    
    }

}


function removeList() {
    this.parentElement.parentElement.remove();
}

function removeItem() {
    this.parentElement.parentElement.remove();
}