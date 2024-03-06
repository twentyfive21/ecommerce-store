const subtotalBox = document.querySelector(".subtotal-amount");
const totalBox = document.querySelector(".total-amount");
const table = document.querySelector('.cart-main-container table');
const shippingPrice = document.querySelector('.total-bdi');

const setList = () => {
  let list = getLocalStorage();
  if (list.length > 0) {
    list.forEach(item => createItem(item))
  }
  calculateTotal(list)
}

// load items 
window.addEventListener('DOMContentLoaded', setList);

const createItem = ({ id, quantity, productName, price, image }) => {

  // Create a new row for the item
  const newRow = document.createElement('tr');
  newRow.classList.add('single-cart-item');

  // Fill the new row with item details
  newRow.innerHTML = `
    <td class="cart-item-left">
      <img src="${image[0]}" alt="necklace"/>
      <div class="cart-item-detail">
        <h2>${productName}</h2>
        <p>${price}</p>
      </div>
    </td>
    <td>
      <div class="item-incrementer">
        <i class="fa-solid"></i>
        <p>${quantity}</p>
        <i class="fa-solid"></i>
      </div>
    </td>
    <td class="subtotal-cart-price hide-for-mobile">
      ${price}
    </td>
    <td class="delete-button">
      <button>X</button>
    </td>`;

  // Append the new row to the table
  table.appendChild(newRow);

  // Add event listener to the delete button
  const deleteButton = newRow.querySelector('.delete-button button');
  deleteButton.addEventListener('click', () => {
    // Get the ID of the item to be removed
    const itemId = id;
    // Remove the item from local storage
    removeItemFromLocalStorage(itemId);
    // Remove the corresponding row from the table
    newRow.remove();
    // Recalculate the total
    calculateTotal(getLocalStorage());
  });
}

const getLocalStorage = () => {
  // Check if 'cartList' item exists in local storage
  // If it exists, parse and return the data else return empty []
  return localStorage.getItem('cartList')
    ? JSON.parse(localStorage.getItem('cartList'))
    : [];
}

const removeItemFromLocalStorage = (itemId) => {
  let list = getLocalStorage();
  // Filter out the item with the given ID
  list = list.filter(item => item.id !== itemId);
  // Update the local storage
  localStorage.setItem('cartList', JSON.stringify(list));
}


const calculateTotal = (itemArray) => {
  let subtotal = 0;
  let total = 0;
  let shipping = 0.00;
 

  for (let i = 0; i < itemArray.length; i++) {
    subtotal += (itemArray[i].price.slice(1) * itemArray[i].quantity);
  }

   if(subtotal === 0){
    shipping = 0.00;
  }else{
    shipping = 12.99;
  }
  shippingPrice.innerText = "$" + shipping.toFixed(2);
  total = subtotal + shipping;
  subtotalBox.innerText = "$" + subtotal.toFixed(2);
  totalBox.innerText = "$" + total.toFixed(2);
}
