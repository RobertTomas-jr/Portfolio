
    const buttons = document.querySelectorAll('.btn');
    const imagesContent = document.querySelectorAll('.portfolio');

    buttons.forEach((button) => {
        button.addEventListener('click',(ev) => {
            ev.preventDefault();
            const filter = ev.target.dataset.filter

            imagesContent.forEach((item) => {
                if (filter === 'all'){
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    }else{
                        item.style.display = 'none';
                    }
                }
            })
        })
    })

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
  
   
} )

const navLink = document.querySelectorAll(".nav-link");
 navLink.forEach((item) => {
     item.addEventListener("click", () => {
       if (hamburger.classList.contains("open")) {
         hamburger.classList.toggle("open");
         navMenu.classList.toggle("open");
       }
     });
   });
