//Fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json')
        .then((response) => response.json())
        .then((json) => json.items);
}

// Update the list the given items
function displayItems(items) {
    const container = document.querySelector('.items');
    //items라는 object를 각각 html요소로 변환 -> map() 이용
    container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    // button이 들어있는 컨테이너에 이벤트를 위임 => 컨테이너 하나만 핸들링하면 돼서 효율적
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', (event) => onButtonClick(event, items));
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }

    updateItmes(items, key, value);
}

function updateItmes(items, key, value) {
    const itemList = document.querySelectorAll('.item');
    for (i = 0; i < li.length; i++) {
        if (items[i][key] === value) {
            itemList[i].classList.remove('invisible');
        } else {
            itemList[i].classList.add('invisible');
        }
    }
}

// main
loadItems().then((items) => {
    displayItems(items);
    setEventListeners(items);
});
// .catch(console.log('not found items'));
