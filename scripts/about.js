const testimonials = [
    {
        name: "Sophia Johnson",
          testimonial: "\"I recently purchased a pair of sneakers from this store, and I couldn't be happier with my purchase. The shoes are not only stylish but also incredibly comfortable. I've received numerous compliments on them already! I've worn them for long walks.\""
    },
    {
        name: "Ethan Williams",
        testimonial: "\"I've been shopping at this e-commerce store for a while now, and I must say, their collection of clothing is top-notch. The quality is excellent, and the prices are reasonable. I highly recommend it to anyone looking for trendy and affordable fashion.\""
    },
    {
        name: "Olivia Brown",
        testimonial: "\"As a fashion enthusiast, I'm always on the lookout for unique pieces to add to my wardrobe. This store never disappoints! They offer a wide range of clothing and accessories that cater to all styles. Plus, their customer service is exceptional.\""
    },
    {
        name: "Liam Davis",
        testimonial: "\"I recently ordered a jacket from this e-commerce store, and I'm extremely satisfied with my purchase. The jacket is well-made, and the fit is perfect. It arrived quickly, and the packaging was impressive. I'll definitely be shopping here again!\""
    }
];

const testimonialText = document.getElementById("customer-text");
const testimonialAuthor = document.getElementById("customer-name");
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");
let indexOfArray = 0;

function testimonialCarousel(index){
    testimonialAuthor.textContent = testimonials[index].name;
    testimonialText.textContent = testimonials[index].testimonial;
}

leftArrow.addEventListener("click", ()=>{
  indexOfArray--;
  if(indexOfArray < 0) indexOfArray = testimonials.length - 1;
  testimonialCarousel(indexOfArray);
});

rightArrow.addEventListener("click", ()=>{
  indexOfArray++;
  if(indexOfArray >= testimonials.length) indexOfArray = 0;
  testimonialCarousel(indexOfArray);
});

testimonialCarousel(indexOfArray);
