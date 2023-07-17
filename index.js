// let hamburgerMenu = document.querySelector(".hamburger")
// hamburgerMenu.addEventListener("click", ()=>{
//     //onClick, display the 4 headings of home, new, popular , trending, categories and display X to closse the hamburger menu

//     //eventLister listening on the X

// })

//ChatGPT
let hamburgerMenu = document.querySelector(".hamburger");
let menuOpen = false;

// Add click event listener to the hamburger menu button
hamburgerMenu.addEventListener("click", () => {
  if (!menuOpen) {
    // Open the hamburger menu
    // Display the headings and close button
    let menu = document.createElement("div");
    //give class of 'menu' to the menu variable
    menu.classList.add("menu");

    let headings = document.createElement("ul");
    headings.innerHTML = `
      <li>Home</li>
      <li>New</li>
      <li>Popular</li>
      <li>Trending</li>
      <li>Categories</li>
    `;

    let closeButton = document.createElement("div");
    closeButton.innerHTML = "X";
    closeButton.classList.add("close-button");
    closeButton.addEventListener("click", closeMenu);

    menu.appendChild(closeButton);
    menu.appendChild(headings);

    //this adds the menu to the bottom of the webpage
    document.body.appendChild(menu);

    menuOpen = true;
  } else {
    closeMenu();
  }
});

// Function to close the hamburger menu
function closeMenu() {
  let menu = document.querySelector(".menu");
  if (menu) {
    menu.remove();
    menuOpen = false;
  }
}
