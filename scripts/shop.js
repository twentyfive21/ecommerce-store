const shopLeftBox = document.querySelector(".shop-left-container");

const url = 'https://affogato-the-ecommerce-store.p.rapidapi.com/api/items';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad135d37ffmshca57b4f4ff275f0p153242jsnfaf4aaf1abb9',
		'X-RapidAPI-Host': 'affogato-the-ecommerce-store.p.rapidapi.com'
	}
};


fetch(url, options)
.then(res => res.json())
.then((json) => {
    displayItems(json.items)
    // console.log(json.items)
})
.catch(err => console.log(err));

const displayItems = (data) => {
    shopLeftBox.innerHTML = data.map(item => {
        return `<div class="individual-item">
        <img src="${item.image[0]}" alt="${item.productName}"/>
        <div>
          <h2>${item.productName}</h2>
          <p>${item.price}</p>
        </div>
        </div>`
    }).join(""); 
}