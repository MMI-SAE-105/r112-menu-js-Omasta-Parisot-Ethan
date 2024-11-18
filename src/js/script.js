const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".header__menu");

toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true"
    const isClosed = !isOpen
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed)
    nav.ariaHidden = false
    toggle.ariaExpanded = true
})