document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function toggleMenu() {
    var x = document.getElementById("headertable");
    if (x.classNama === "responsive") {
        x.classNama = "";
    } else {
        x.classNama = "responsive";
    }
}

function validateForm() {
    var nama = document.forms["contactForm"]["Name"].value;
    var email = document.forms["contactForm"]["Email"].value;

    if (nama === "" || email === "") {
        alert("Name and Email must be filled out");
        return false;
    }
}