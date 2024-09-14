const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

let slideIndex = 0;

function showSlides() {
    const slides1 = document.querySelectorAll('#event-slideshow .slide');
    const slides2 = document.querySelectorAll('#committee-slideshow .slide');

    for (let i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides1.length) { slideIndex = 1 }
    if (slideIndex > slides2.length) { slideIndex = 1 }

    slides1[slideIndex - 1].style.display = "block";
    slides2[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', showSlides);

let currentRoleIndex = 0;

const roles = [
    {
        type: 'EXCO',
        title: 'President',
        description: 'The President leads the committee and oversees all activities.',
        image: 'president.jpg'
    },
    {
        type: 'EXCO',
        title: 'Vice President',
        description: 'The Vice President assists the President and manages internal affairs.',
        image: 'vice_president.jpg'
    },
    {
        type: 'EXCO',
        title: 'Treasurer',
        description: 'The Treasurer manages the financial matters of the committee.',
        image: 'treasurer.jpg'
    }
];

function changeRole() {
    currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Loop back to the start
    document.querySelector('.role h3').innerHTML = `<span class="role-type">${roles[currentRoleIndex].type}</span><br>${roles[currentRoleIndex].title}`;
    document.getElementById('role-description').textContent = roles[currentRoleIndex].description;
    document.getElementById('role-image').src = roles[currentRoleIndex].image; // Update the image source
}
