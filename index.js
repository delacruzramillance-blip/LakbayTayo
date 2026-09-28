const cards = document.querySelectorAll(".destination-card");

const mainImage = document.getElementById("mainImage");
const mainTitle = document.getElementById("mainTitle");
const mainLocation = document.getElementById("mainLocation");
const mainDescription = document.getElementById("mainDescription");
const currentNumber = document.getElementById("currentNumber");
const discoverLink = document.getElementById("discoverLink");

cards.forEach(card => {
    card.addEventListener("click", function () {

        const image = this.getAttribute("data-image");
        const title = this.getAttribute("data-title");
        const location = this.getAttribute("data-location");
        const description = this.getAttribute("data-description");
        const number = this.getAttribute("data-number");
        const color = this.getAttribute("data-color");
        const page = this.getAttribute("data-page");

        if (page) {
            discoverLink.href = page;
        }

        cards.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        mainImage.classList.add("change");
        mainTitle.classList.add("change");

        document.querySelector(".main-info").style.setProperty("--fade-color", color);
        document.querySelector(".Navigation").style.setProperty("--nav-color", color);

        setTimeout(() => {
            mainImage.src = image;
            mainTitle.textContent = title;
            mainLocation.querySelector("span").textContent = location;
            mainDescription.textContent = description;
            currentNumber.textContent = number;

            setTimeout(() => {
                mainImage.classList.remove("change");
                mainTitle.classList.remove("change");
            }, 50);

        }, 300);
    });
});


// Contact form

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for contacting LakbayTayo!");

        contactForm.reset();

    });

}





document.getElementById("destinationSearch").addEventListener("keyup", function() {

    let search = this.value.toLowerCase();

    let titles = document.querySelectorAll(".loc1");

    titles.forEach(function(title) {

        let name = title.textContent.toLowerCase();

        let box = title.closest(".dis2-text");

        if (name.includes(search)) {
            box.style.display = "";
        } else {
            box.style.display = "none";
        }

    });

});


