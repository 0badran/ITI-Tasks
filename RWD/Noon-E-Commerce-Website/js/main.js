
// side menu 

let toggleBtn = document.getElementById("toggle");
let menu = document.getElementById("sideMenu");

let menuOpen = false;

toggleBtn.addEventListener("click", ()=> {
    if (!menuOpen) {
        menu.style.left = "0px"; // If menu is closed, open it
    } else {
        menu.style.left = "-250px"; // If menu is open, close it
    }
    menuOpen = !menuOpen; // Toggle the menu state
});


// hide menu when click on nav link
let navLinks = document.getElementsByClassName("sideNavLink");

// Loop through all nav links
for (let i = 0; i < navLinks.length; i++) {
    let navLink = navLinks[i];
    // Add click event listener to each nav link
    navLink.addEventListener("click", () => {
        menu.style.left = "-250px"; // Hide the menu when a nav link is clicked
        menuOpen = false; // Update menu state to closed
    });
}