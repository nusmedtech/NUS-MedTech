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
        description: 'The President leads NUS MedTech by setting its vision and strategic direction, guiding the Executive Committee, and fostering collaboration. They represent the organization to build partnerships with external stakeholders and drive key initiatives to promote innovation and sustainable growth.',
        image: './src/roles/president.png'
    },
    {
        type: 'EXCO',
        title: 'Vice President',
        description: 'The Vice President of NUS MedTech provides leadership and support to the Executive Committee, fostering collaboration and driving strategic initiatives. They represent the organization at internal and external events, communicating its vision and promoting a culture of innovation and excellence.',
        image: './src/roles/vice-president.png'
    },
    {
        type: 'EXCO',
        title: 'Secretary Treasurer',
        description: 'The Secretary-Treasurer manages administrative tasks, maintains records, and oversees financial planning, budgeting, and reporting to ensure smooth operations and fiscal responsibility for NUS MedTech.',
        image: './src/roles/treasurer.png'
    }, 
    {
        type: 'EXCO',
        title: 'Directors',
        description: '<b>Publicity Director:</b> The Publicity Director develops and implements strategies to promote NUS MedTech events and initiatives, manages social media platforms, and creates engaging content to boost visibility and engagement.<br><br><b>Project Directors:</b> The Project Directors plan and execute projects related to medical technology, collaborating with industry professionals and academic experts to drive innovation and impact.',
        image: './src/roles/directors.png'
    },
    {
        type: 'Subcommittee',
        title: 'Publicity Subcommittee',
        description: '<b>Event Planning:</b> Lead the organization and execution of NUS MedTech events, managing everything from planning to completion. Oversee budgets, coordinate with vendors and sponsors, and use strong communication skills to bring creative ideas to life.<br><br><b>Web Designers:</b> Design, build, and maintain user-friendly websites for NUS MedTech. Ensure websites are up-to-date, address technical issues, and collaborate with the team to turn design ideas into functional web pages.<br><br><b>Video Producers:</b> Create engaging video content to showcase NUS MedTech’s initiatives. Develop compelling stories, produce videos for social media, and manage editing to maintain professional quality and visual appeal.',
        image: './src/roles/subcomm.png'
    },
    {
        type: 'Subcommittee',
        title: 'Project Members',
        description: 'Collaborate with Project Directors to successfully complete projects in partnership with various companies.',
        image: './src/roles/projmem.png'
    },
];


function changeRole() {
    currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Loop back to the start
    document.querySelector('.role h3').innerHTML = `<span class="role-type">${roles[currentRoleIndex].type}</span><br>${roles[currentRoleIndex].title}`;
    document.getElementById('role-description').innerHTML = roles[currentRoleIndex].description; // Use innerHTML instead of textContent
    document.getElementById('role-image').src = roles[currentRoleIndex].image; // Update the image source
}
