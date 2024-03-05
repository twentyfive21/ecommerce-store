const subtotalBox = document.querySelector(".subtotal-amount");
const totalBox = document.querySelector(".total-amount");

console.log(subtotalBox.innerText.slice(1));
console.log(totalBox.innerText.slice(1));

const getLocalStorage = () => {
      // Check if 'cartList' item exists in local storage
   // If it exists, parse and return the data else return empty []
   return localStorage.getItem('cartList')
   ? JSON.parse(localStorage.getItem('taskList'))
   : [];
}

const calculateTotal = () => {
    let subtotal = 0;
    const shipping = 12.99;
    let total = 0;
}