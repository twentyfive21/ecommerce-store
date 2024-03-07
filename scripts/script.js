const sliderBox = document.querySelector(".slider");

const url = 'https://affogato-the-ecommerce-store.p.rapidapi.com/api/items/category/accessories';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d2171684amsh40c452b66155ebfp1c033ajsn3c95ae02c598',
		'X-RapidAPI-Host': 'affogato-the-ecommerce-store.p.rapidapi.com'
	}
};


fetch(url, options)
.then(res => res.json())
.then((json) => {
    displaySlider(json.items);    
    console.log(json.items);
})
.catch(err => console.log(err));

const displaySlider = (data) => {
    sliderBox.innerHTML = data.map(item => {
        return `<div class="slide">
        <img src="${item.image[0]}"
            alt="${item.image[0]}" />
        <p class="card-title slide-product-text mt-4">${item.productName}</p>
        <p class="mt-2 slide-product-price">${item.price}</p>
        <a href=./details.html?q=${item.id} class="view-item">View Item</a>
        </div>`
    }).join('')
}

window.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide-single-hero');
    
    function showSlides() {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex - 1].style.display = 'block';  
        setTimeout(showSlides, 2000); // Change slide every 2 seconds (2000 milliseconds)
    }
    
    showSlides();
});


// Wrap the code in an Immediately Invoked Function Expression (IIFE) to avoid polluting the global namespace.
(function() {
    // Get a reference to the slider element from the DOM using its ID.
    const slider = document.getElementById('slider');
    // Get the child elements of the slider, which represent the slides.
    const slides = slider.children;
    // Get references to the previous and next buttons.
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Initialize variables for the current slide index, slide width, and number of slides to show.
    let slideIndex = 0;
    let slideWidth = 0;
    let slidesToShow = 4;

    // Define a function to calculate the width of each slide based on the viewport width.
    const calculateSlideWidth = () => {
        // Determine how many slides should be visible based on the current viewport width.
        if (window.innerWidth <= 767) {
            slidesToShow = 1;
        } else if (window.innerWidth <= 1024) {
            slidesToShow = 2;
        } else {
            slidesToShow = 4;
        }
        // Calculate the width of each slide as a percentage based on the number of visible slides.
        slideWidth = 100 / slidesToShow;
    };

    // Define a function to update the slide index based on the increment value.
    function updateSlideIndex(increment) {
        // Update the current slide index by adding the increment multiplied by the number of visible slides.
        slideIndex += increment * slidesToShow;
        // Check if the slide index is out of bounds.
        if (slideIndex >= slides.length) {
            // If the slide index exceeds the last slide, move it back to the first slide.
            slideIndex = 0;
        } else if (slideIndex < 0) {
            // If the slide index is negative, move it to the last slide.
            slideIndex = slides.length - slidesToShow;
        }
        // Update the slider position.
        slider.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
    }

    // Add event listeners to the previous and next buttons to control the slider.
    prevBtn.addEventListener('click', () => {
        updateSlideIndex(-1); // Move to the previous slide
    });

    nextBtn.addEventListener('click', () => {
        updateSlideIndex(1); // Move to the next slide
    });

    // Define a function to update the slider position and slide width when the window is resized.
    function onResize() {
        // Recalculate the slide width based on the new viewport width and update the slider position.
        calculateSlideWidth();
        slider.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
    }

    // Add an event listener to handle the window resize event and adjust the slider accordingly.
    window.addEventListener('resize', onResize);
    // Calculate the initial slide width based on the viewport width.
    calculateSlideWidth();
})();

