const subtotalBox = document.querySelector(".subtotal-amount");
const totalBox = document.querySelector(".total-amount");
const table = document.querySelector('.cart-main-container table');
const shippingPrice = document.querySelector('.total-bdi');
const checkoutBtn = document.querySelector('.checkout-btn-brown');

const setList = () => {
  let list = getLocalStorage();
  if (list.length > 0) {
    list.forEach(item => createItem(item))
  }else{
    createNullItem();
  }
  calculateTotal(list)
}

// load items 
window.addEventListener('DOMContentLoaded', setList);
checkoutBtn.addEventListener('click', ()=>{
  clearLocalStorage();
})

const createNullItem = () =>{
  const newRow = document.createElement('tr');

  newRow.innerHTML = `<tr class="single-cart-item">
        <td class="cart-item-left">
          <img src="https://media.istockphoto.com/id/463813709/photo/white-shopping-bag.jpg?s=612x612&w=0&k=20&c=DcY_HvHi6uFeEvNskyFIWjyJ5uD01PP4Hrp7DrsIwrY=" alt="necklace"/>
          <div class="cart-item-detail">
            <h2>No items added</h2>
            <p></p>
          </div>
        </td>
        <td>
          <div class="item-incrementer">
            <i class="fa-solid"></i>
            <p>0</p>
            <i class="fa-solid"></i>
          </div>
        </td>
        <td class="subtotal-cart-price hide-for-mobile">
          $0
        </td>
        
      </tr>`

    table.appendChild(newRow);
}

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
    location.reload();
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

const clearLocalStorage = () => {
  let list = getLocalStorage();
  list = [];
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

// *** Confetti function ***
const canvas = document.querySelector(".canvas");

const jsConfetti = new JSConfetti();

checkoutBtn.addEventListener("click", () => {
  jsConfetti.addConfetti({
    confettiRadius: 5,
    confettiNumber: 500,
    confettiColors: [
    "#151412",
    "#fff674",
    "#ffbec2",
    "#c8d6ff"
    ],
  });
});
