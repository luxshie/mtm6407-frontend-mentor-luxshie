// Select all elements with the class "option" and store them in the options variable
const options = document.querySelectorAll(".option");

// Select the element with the class "hamburger-icon" and store it in the hamburger variable
const hamburger = document.querySelector(".hamburger-icon");

// Select all elements with the class "mobile-option" and store them in the mobileOptions variable
const mobileOptions = document.querySelectorAll(".mobile-option");

// Add a click event listener to each option in the options NodeList
options.forEach(option => {
    option.addEventListener("click", () => {
        // Select the content box element corresponding to the clicked option
        const contentBox = document.querySelector(`.${option.innerText}`);
        const img = option.querySelector("img");
        
        // Set the display property of the content box to "none"
        contentBox.style.display = "none";

        // Toggle the display property and image rotation based on the current display state
        if (contentBox.style.display === "none") {
            options.forEach(optionClicked => {
                let box = document.querySelector(`.${optionClicked.innerText}`);
                const img = option.querySelector("img");
                box.style.display = "none";
                img.style.transform = "none";
            });
            contentBox.style.display = "block";
            img.style.transform = "rotate(180deg)";
        } else {
            contentBox.style.display = "none";
            img.style.transform = "none";
        }
    });
});

// Add a click event listener to the hamburger icon
hamburger.addEventListener("click", () => {
    // Select the element with the class "mobile-menu"
    const mobileNav = document.querySelector(".mobile-menu");
    
    // Toggle the hamburger icon and mobile menu display based on the current icon
    if (hamburger.src.includes("icon-hamburger.svg")) {
        hamburger.src = "./images/icon-close.svg";
        mobileNav.style.display = "block";
    } else {
        hamburger.src = "./images/icon-hamburger.svg";
        mobileNav.style.display = "none";
    }
});

// Add a click event listener to each option in the mobileOptions NodeList
mobileOptions.forEach(option => {
    option.addEventListener("click", () => {
        // Select the content box element inside the clicked mobile option
        const mobileContentBox = option.querySelector(".mobile-box");
        
        // Toggle the "active" class on the selected content box
        mobileContentBox.classList.toggle("active");

        // Remove the "active" class from all other content boxes
        mobileOptions.forEach(otherOption => {
            if (otherOption !== option) {
                otherOption.querySelector(".mobile-box").classList.remove("active");
            }
        });
    });
});
