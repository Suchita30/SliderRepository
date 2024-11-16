let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');
let items = document.querySelectorAll('.item');

// Function to move the first item to the end
function moveNext() {
    slide.appendChild(items[0]);
    items = document.querySelectorAll('.item'); // Reassign items after the move
}

// Function to move the last item to the beginning
function movePrev() {
    slide.prepend(items[items.length - 1]);
    items = document.querySelectorAll('.item'); // Reassign items after the move
}

// Next button functionality
next.addEventListener('click', moveNext);

// Previous button functionality
prev.addEventListener('click', movePrev);

// Automatic slideshow
let autoSlide = setInterval(moveNext, 3000); // Change slides every 3 seconds

// Optional: Pause the automatic slide show when the user clicks the arrows
next.addEventListener('click', function() {
    clearInterval(autoSlide);
    autoSlide = setInterval(moveNext, 3000);
});

prev.addEventListener('click', function() {
    clearInterval(autoSlide);
    autoSlide = setInterval(moveNext, 3000);
});
