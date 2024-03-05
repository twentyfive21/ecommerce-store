const subtotalBox = document.querySelector(".subtotal-amount");
const totalBox = document.querySelector(".total-amount");
const table = document.querySelector('.cart-main-container table');

const setList = () => {
  let list = getLocalStorage();
  if (list.length > 0) {
    list.forEach(item => createItem(item))
  }
  calculateTotal(list)
  console.log(list)
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
        <i class="fa-solid fa-minus"></i>
        <p>${quantity}</p>
        <i class="fa-solid fa-plus"></i>
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
}



const getLocalStorage = () => {
      // Check if 'cartList' item exists in local storage
   // If it exists, parse and return the data else return empty []
   return localStorage.getItem('cartList')
   ? JSON.parse(localStorage.getItem('cartList'))
   : [];
}

const calculateTotal = (item) => {
    let subtotal = 0;
    const shipping = 12.99;
    let total = 0;

    for(let i = 0; i < item.length; i++){
        subtotal += (item[i].price.slice(1) * item[i].quantity);
    }

    total = subtotal + shipping;
    subtotalBox.innerText = "$" + subtotal;
    totalBox.innerText = "$" + total;

}