//Olivier Laliberte - 2025
//Different items for different sizes
const itemDisplays = {
  small: `
    <div class="item-s item-s-1 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-s item-s-2 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-s item-s-3 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-s item-s-4 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    `,
  medium: `
    <div class="item-md item-md-1 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-md item-md-2 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-md item-md-3 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-md item-md-4 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-md item-md-5 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-md item-md-6 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    `,
  large: `
    <div class="item-lg item-lg-1 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-lg item-lg-2 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-lg item-lg-3 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-lg item-lg-4 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-lg item-lg-5 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-lg item-lg-6 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-lg item-lg-7 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    <div class="item-lg item-lg-8 d-flex align-items-top"><img src="./assets/images/ratatat_logo.png" class="h-100"></div>
    `,
};

let currentBreakpoint;

//On screen change, show more or less items
function updateChildrenVisibility() {
  //Window width
  const width = window.innerWidth;
  //Breakpoint
  let newBreakpoint;

  //Large screen
  if (width > 1200) {
    newBreakpoint = "large";
  }
  //Medium screen
  else if (width > 992) {
    newBreakpoint = "medium";
  }
  //Small screen
  else {
    newBreakpoint = "small";
  }

  //Checks if breakpoint changed; if so, display a different setting
  if (newBreakpoint !== currentBreakpoint) {
    document.getElementById("banner-container").innerHTML =
      itemDisplays[newBreakpoint];
    currentBreakpoint = newBreakpoint;
  }
}

//On resize, updates the banner
window.addEventListener("resize", updateChildrenVisibility);

//Adds the children on page load
addEventListener("DOMContentLoaded", (event) => {
  updateChildrenVisibility();
});
