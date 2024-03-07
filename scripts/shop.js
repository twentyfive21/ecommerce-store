const shopLeftBox = document.querySelector(".shop-left-container");
const mensCategory = document.querySelector(".filter-mens");
const womensCategory = document.querySelector(".filter-womens");
const accessoriesCategory = document.querySelector(".accessories");
const allCategory = document.querySelector(".filter-all");
const shoesCategory = document.querySelector(".filter-shoes");
const jewerlyCategory = document.querySelector(".filter-jewerly")
const fiftyFilter = document.querySelector(".fifty");
const oneHundredFilter = document.querySelector(".one-hundred");
const twoHundredFilter = document.querySelector(".two-hundred");
const fourHundredFilter = document.querySelector(".four-hundred");

let url = 'https://affogato-the-ecommerce-store.p.rapidapi.com/api/items';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d2171684amsh40c452b66155ebfp1c033ajsn3c95ae02c598',
		'X-RapidAPI-Host': 'affogato-the-ecommerce-store.p.rapidapi.com'
	}
};

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    selectedCategory = urlParams.get("c"); // = get category
    
      if (selectedCategory){
          displaySelectedCategory(selectedCategory)
      } else {
        fetch(url, options)
        .then(res => res.json())
        .then((json) => {
            displayItems(json.items)
            console.log(json.items)
        })
        .catch(err => console.log(err));
      }
  };
  

const displayItems = (data) => {
    shopLeftBox.innerHTML = data.map(item => {
        return `<div class="individual-item">
        <a href="./details.html?q=${item.id}">
        <img src="${item.image[0]}" alt="${item.productName}"/>
        </a>
        <div>
          <h2>${item.productName}</h2>
          <p>${item.price}</p>
        </div>
        </div>`
    }).join(""); 
}

mensCategory.addEventListener('click', (e) => {
    displaySelectedCategory(e.target.innerText);
});
womensCategory.addEventListener('click', (e) => {
    displaySelectedCategory(e.target.innerText);
});
accessoriesCategory.addEventListener('click', (e) => {
    displaySelectedCategory(e.target.innerText);
});
allCategory.addEventListener('click', (e) => {
    displaySelectedCategory(e.target.innerText);
});
shoesCategory.addEventListener('click', (e) => {
    displaySelectedCategory(e.target.innerText);
})
jewerlyCategory.addEventListener('click', (e) => {
    displaySelectedCategory(e.target.innerText);
})

const displaySelectedCategory = (category) => {
    let selected = '';

    if (category == 'Mens') {
        selected = '/category/Men%27s%20Clothing';
    } else if (category == 'Womens') {
        selected = '/category/Women%27s%20Clothing';
    } else if (category == 'Accessories') {
        selected = '/category/accessories';
    } else if (category == "All") {
        selected = '';
    } else if (category == 'Shoes') {
        selected = '/category/shoes'
    } else if (category == "Jewelry") {
        selected = '/category/Jewelry'
    }

   url = `https://affogato-the-ecommerce-store.p.rapidapi.com/api/items${selected}`;

   fetch(url, options)
    .then(res => res.json())
    .then((json) => {
    displayItems(json.items)
    })
    .catch(err => console.log(err));
}
fiftyFilter.addEventListener('click', (e) => {
    displayFilteredItems(e.target.innerText)
})
oneHundredFilter.addEventListener('click', (e) => {
    displayFilteredItems(e.target.innerText)
})
twoHundredFilter.addEventListener('click', (e) => {
    displayFilteredItems(e.target.innerText)
})
fourHundredFilter.addEventListener('click', (e) => {
    displayFilteredItems(e.target.innerText)
})

const displayFilteredItems = (value) => {
    let newArray =[];
    let min = 0;
    let max = 0; 

    if (value == '$50-$100') {
        min = 50.00;
        max = 100.00;
    } else if ( value == '$100-$200') {
        min = 100.00;
        max = 200.00;
    } else if ( value == '$200-$300') {
        min = 200.00;
        max = 300.00;
    } else if ( value == '$400+') {
        min = 400.00;
        max = 1000.00;
    }

fetch(url, options)
.then(res => res.json())
.then((json) => {
    for(let i = 0; i < json.items.length; i++){
        if(json.items[i].price.slice(1) >= min && json.items[i].price.slice(1) <= max){
            newArray.push(json.items[i]);
        }
    }
    displayItems(newArray)
})
.catch(err => console.log(err));
}