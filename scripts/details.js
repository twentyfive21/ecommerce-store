    const productHeader = document.getElementById("product-header");
    const productHeaderLink = document.getElementById('product-header-link');
    const productItemName = document.getElementById('product-item-name');
    const productItemPrice = document.getElementById('product-item-price');
    const productItemDesc = document.getElementById('product-item-desc');
    const productItemColor = document.getElementById('product-item-color');
    const productItemSizeContainer = document.getElementById('product-item-size-container');
    const productIdNumber = document.getElementById('product-id-number');
    const productCategoryName = document.getElementById('product-category-name');
    const productTagsNameContainer = document.getElementById('product-tags-name-container');
    const tabsProductDes = document.getElementById('tabs-product-des');
    const tabsProductTagsContainer = document.getElementById('tabs-product-tags-container');
    const reviewsContainer = document.getElementById('reviews-container');
    const mainImage = document.getElementById('main-image');
    const imageOne = document.getElementById('image-one');
    const imageTwo = document.getElementById('image-two');
    const imageThree = document.getElementById('image-three');
    let currentId;

    const urlParams = new URLSearchParams(window.location.search);
    currentId = urlParams.get("q");

    const url = `https://affogato-the-ecommerce-store.p.rapidapi.com/api/items/${currentId}`;
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
        displaySingleProduct(json.item)
        console.log(json.item);
    })
    .catch(err => console.log(err));

 console.log(productItemDesc);
    function displaySingleProduct(dataArray){
        productHeader.innerText = dataArray.productName;
        productHeaderLink.innerText = dataArray.productName;
        mainImage.setAttribute('src', dataArray.image[0]);
        imageOne.setAttribute('src', dataArray.image[0]);
        imageTwo.setAttribute('src', dataArray.image[1]);
        imageThree.setAttribute('src', dataArray.image[2]);
        productItemName.innerText = dataArray.productName;
        productItemPrice.innerText = dataArray.price;
        productItemDesc.innerText = dataArray.description;
        productItemColor.innerText = dataArray.colorOptions[0];
        productItemSizeContainer.innerHTML = dataArray.sizeOptions.map(element => {
        return `<li data-value="S" class="select-item me-3">
                    <a href="" class="text-decoration-none">${element}</a>
                </li>`;
    }).join(""); 
        productIdNumber.innerText = dataArray.id;
        productCategoryName.innerText = dataArray.category;
        productTagsNameContainer.innerHTML = dataArray.occasion.map(element => {
        return `<li data-value="S" class="select-item">
                      <a href="#" class="text-decoration-none">${element}</a>,
                    </li>`;
    }).join(" "); 
    tabsProductDes.innerText = dataArray.description;
    tabsProductTagsContainer.innerHTML = dataArray.occasion.map(element => {
        return `<li>${element}</li>`;
    }).join(" ");

    reviewsContainer.innerHTML = dataArray.customerReviews.map((item)=>{
        return `<div class="row review-section">

                            <div class="col-md-4 col-md-4 col-xs-4 review-part-left">
                              <div class="row">
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                  <img src=${item.customerImage} alt="user-image">
                                </div>
                                <div class="col-md-8 col-sm-8 col-xs-12">
                                  <span>${item.customerName}</span><br>
                                  <p>${item.reviewDate}</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-8 col-sm-8 col-xs-8 review-part-right">
                              <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                  <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                  <p>${item.customerReview}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>`
    }).join("");

    imageOne.addEventListener('click', ()=>{
    mainImage.setAttribute('src', dataArray.image[0]);
})  
imageTwo.addEventListener('click', ()=>{
    mainImage.setAttribute('src', dataArray.image[1]);
}) 
imageThree.addEventListener('click', ()=>{
    mainImage.setAttribute('src', dataArray.image[2]);
})  
}
