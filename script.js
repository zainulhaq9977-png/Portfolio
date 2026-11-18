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
// contact form validation
$(document).ready(function() {
    $("#contactForm").submit(function(event) {
        let valid = true;
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let subject = $("#subject").val().trim();
        let message = $("#message").val().trim();
        $(".error-message").text("");
        // Name Validation
        if (name == "") {
            $("#name").next(".error-message").text("Name is required!");
            valid = false;
        }
        else if (!/^[a-zA-Z ]+$/.test(name)) {
            $("#name").next(".error-message").text("Only letters are allowed!");
            valid = false;
        }
        // Email Validation
        if (email == "") {
            $("#email").next(".error-message").text("Email is required!");
            valid = false;
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $("#email").next(".error-message").text("Invalid email address!");
            valid = false;
        }
        // Subject Validation
        if (subject == "") {
            $("#subject").next(".error-message").text("Subject is required!");
            valid = false;
        }
        else if (!/^[a-zA-Z ]+$/.test(subject)) {
            $("#subject").next(".error-message").text("Only letters are allowed!");
            valid = false;
        }
        // Message Validation
        if (message == "") {
            $("#message").next(".error-message").text("Message is required!");
            valid = false;
        }
        else if (message.length < 10) {
            $("#message").next(".error-message").text("Minimum 10 characters required!");
            valid = false;
        }
        if (valid == false) {
            event.preventDefault();
        }
    });
});