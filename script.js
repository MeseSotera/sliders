// const smallImages = document.querySelectorAll('.smallImage');
// const largeImage = document.getElementById('largeImage');

// let currentIndex = 0;

// function showImage(index) {
//     largeImage.src = smallImages[index].src;
//     currentIndex = index;
// }

// smallImages.forEach((img, index) => {
//     img.addEventListener('click', () => {
//         showImage(index);
//     });
// });

// function autoSlide() {
//     currentIndex = (currentIndex + 1) % smallImages.length;
//     showImage(currentIndex);
// }

// setInterval(autoSlide, 3000); // Change image every 3 seconds

const smallImages = document.querySelectorAll('.smallImage');
const largeImage = document.getElementById('largeImage');

let currentIndex = 0;

function showImage(index) {
    largeImage.src = smallImages[index].src;
    smallImages.forEach((img, i) => {
        if (i === index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
    currentIndex = index;
}

smallImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        showImage(index);
    });
});

function autoSlide() {
    currentIndex = (currentIndex + 1) % smallImages.length;
    showImage(currentIndex);
}

setInterval(autoSlide, 3000); // Change image every 3 seconds

// Initialize the first image as active
showImage(currentIndex);

// const smallImages = document.querySelectorAll('.smallImage');
// const largeImage = document.getElementById('largeImage');

// let currentIndex = 0;

// function showImage(index) {
//     largeImage.style.opacity = 0; // Commence par rendre l'image transparente
//     setTimeout(() => {
//         largeImage.src = smallImages[index].src;
//         largeImage.style.opacity = 1; // Puis réaffiche l'image avec une transition fluide
//     }, 500); // Correspond à la durée de la transition CSS
//     smallImages.forEach((img, i) => {
//         if (i === index) {
//             img.classList.add('active');
//         } else {
//             img.classList.remove('active');
//         }
//     });
//     currentIndex = index;
// }

// smallImages.forEach((img, index) => {
//     img.addEventListener('click', () => {
//         showImage(index);
//     });
// });

// function autoSlide() {
//     currentIndex = (currentIndex + 1) % smallImages.length;
//     showImage(currentIndex);
// }

// setInterval(autoSlide, 3000); // Change image every 3 seconds

// // Initialize the first image as active
// showImage(currentIndex);
