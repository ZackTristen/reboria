const sidebar = document.getElementById("navigation");
const hamburgerButton = document.getElementById("hamburger-button");
const body = document.body;
const closeBtn = document.getElementById("close-sidebar-button");

function toggleSidebar() {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  } else {
    sidebar.classList.toggle("open");
  }
}

hamburgerButton.addEventListener("click", toggleSidebar);
closeBtn.addEventListener("click", toggleSidebar);

const searchContainer = document.querySelector(".search-container");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  searchContainer.classList.toggle("active");
  if (searchContainer.classList.contains("active")) {
    searchInput.focus();
  }
});

document.addEventListener("click", (event) => {
  const isClickInside =
    searchContainer.contains(event.target) || searchIcon.contains(event.target);
  if (!isClickInside && searchContainer.classList.contains("active")) {
    searchContainer.classList.remove("active");
  }
});

searchInput.addEventListener("input", () => {
  if (searchInput.value) {
    searchContainer.classList.add("active");
  } else {
    searchContainer.classList.remove("active");
  }
});

// const destinationContainerDesktop = document.querySelector(
//   ".header-wrapper-content"
// );
// const destinationContainerMobile = document.querySelector(".header-content");

// const destinationContainerMobileIcons =
//   document.querySelector(".sidebar-icons");

// const leftPanel = document.querySelector(".header-left-panel");
// const rightPanel = document.querySelector(".header-right-panel");

// const bucket = document.getElementById("bucket");
// const searchContainerSidebar = document.getElementById("search-container");
// const geo = document.getElementById("geo");
// const numberWrapper = document.getElementById("number-wrapper");
// const mediaQueryForIcons = window.matchMedia("(max-width:1024px)");
// const iconsContent1 = document.querySelector(".icons-content-1");
// const iconsContent2 = document.querySelector(".icons-content-2");
// const iconsContent = document.querySelector(".icons-content");
// const navigation = document.querySelector(".navigation");

// function handleMediaChangeIcons(event) {
//   if (event.matches) {
//     iconsContent.appendChild(numberWrapper);
//     iconsContent1.appendChild(searchContainerSidebar);
//     iconsContent2.appendChild(geo);
//     iconsContent2.appendChild(bucket);
//   } else {
//     leftPanel.appendChild(geo);
//     leftPanel.appendChild(numberWrapper);
//     rightPanel.appendChild(bucket);
//     rightPanel.prepend(searchContainerSidebar);
//   }
// }

// mediaQueryForIcons.addEventListener("change", handleMediaChangeIcons);
// handleMediaChangeIcons(mediaQueryForIcons);

// document.addEventListener("DOMContentLoaded", function () {
//   const header = document.querySelector(".header-wrapper");
//   const changePoint = 200;

//   window.addEventListener("scroll", function () {
//     if (window.pageYOffset > changePoint) {
      
//       header.classList.add("visible");
//     } else {
//       header.classList.remove("visible");
//     }
//   });
// });

// const mediaQueryForSidebar = window.matchMedia("(min-width: 1025px)");
// const headerWrapper = document.querySelector(".mob-navigation");
// const headerWrapperContent = document.querySelector(".header-wrapper-content");

// function handleMediaChangeSidebar(event) {
//   if (event.matches) {
//     headerWrapperContent.appendChild(sidebar);
//   } else {
//     headerWrapper.prepend(sidebar);
//   }
// }

// mediaQueryForSidebar.addEventListener("change", handleMediaChangeSidebar);
// handleMediaChangeSidebar(mediaQueryForSidebar);





