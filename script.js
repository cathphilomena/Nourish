window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 700)
})

const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".nav__menu");

const openNavMenu = () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
}

menuBtn.addEventListener("click", openNavMenu);

const closeNavMenu = () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
}

closeBtn.addEventListener("click", closeNavMenu)

const navItems = document.querySelectorAll('.nav__items li a');
if(window.innerWidth < 1024) {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            closeNavMenu();
        })
    })
}

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus"
        } else {
            icon.className = "fa-solid fa-plus"
        }
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        1024: {
            slidesPerView: 2, 
        }
    }
  });

  const chart = document.querySelector("#chart").getContext('2d');

  new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Body Analytics',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: '#899dc4',
                borderWidth: 2 
            },
            {
                label: 'Nutrition Analytics',
                data: [31500, 41000, 65500, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
                borderColor: '#7282a4',
                borderWidth: 2 
            },
            {
                label: 'Exercise Analytics',
                data: [12445, 23443, 29871, 35467, 43120, 58921, 62137, 71243, 32158, 57801, 74124],
                borderColor: '#5a6882',
                borderWidth: 2 
            },
            {
                label: 'Neuroscience Analytics',
                data: [84323, 83123, 88864, 87242, 82353, 84124, 84112, 88341, 87112, 85421, 87114],
                borderColor: '#4c576c',
                borderWidth: 2 
            },
        ]
    },
    options: {
        responsive: true
    }
  })

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

