window.addEventListener("DOMContentLoaded", () => {
   //меню гамбуогер на мобильных устр-х
   const menu = document.querySelector(".menu"),
      menuItem = document.querySelectorAll(".menu_item"),
      hamburger = document.querySelector(".hamburger");

   hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
   });

   menuItem.forEach((item) => {
      item.addEventListener("click", () => {
         hamburger.classList.toggle("hamburger_active");
         menu.classList.toggle("menu_active");
      });
   });

   //модальные окна

   const subHeadBtn = document.querySelector(".subheader_btn"),
      modal = document.querySelector(".modal"),
      modalClose = modal.querySelector(".modal__close");

   subHeadBtn.addEventListener("click", () => {
      modal.classList.add("show");
      modal.classList.remove("hide");
   });

   modalClose.addEventListener("click", () => {
      modal.classList.add("hide");
      modal.classList.remove("show");
   });
});
