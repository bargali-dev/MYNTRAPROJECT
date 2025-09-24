let bagItems;
onLoad();
function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemOnHomepage();
    displayBagIcon()
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('BagItems',JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
    let bagCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length >0){
        bagCountElement.style.visibility = 'visible';
    bagCountElement.innerText = bagItems.length;
    }else{
        bagCountElement.style.visibility = 'hidden';
    }
}
function displayItemOnHomepage(){
let itemsContainerElement = document.querySelector('.items-container');
let innerHtml = ' ';
items.forEach(item =>{

    innerHtml +=  `
            <div class="item-container">
                <img class="item-image" src="${item.item_image} " alt="item image">
                <div class="rating">
                    ${item.rating.stars} ⭐ ${item.rating.noOfReviews}
                </div>
            <div class="company-name">${item.company_name}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount">${item.discount}% OFF</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>`;
})

itemsContainerElement.innerHTML = innerHtml;
}
