// nav active stat 
let navLinks = document.querySelectorAll(".nav-link");

window.onscroll = function () {

    navLinks.forEach(function (link) {

        let section = document.querySelector(link.hash);

        if (section.offsetTop <= window.scrollY + 150) {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        }

    });

};