document.addEventListener("DOMContentLoaded", function () {
  const tabbar = document.querySelector(".bottom-tab-bar");
  const gradient = document.querySelector(".gradient");
  const logo = document.querySelector(".logo-img");

  let lastScrollTop = 0;
  

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      gradient.classList.add("visible-gradient");
      tabbar.classList.add("visible-tabbar");
      logo.classList.add("visible-logo");
    } else {
      gradient.classList.remove("visible-gradient");
      tabbar.classList.remove("visible-tabbar");
      logo.classList.remove("visible-logo");
    }
    lastScrollTop = scrollTop;

   
  });
});
