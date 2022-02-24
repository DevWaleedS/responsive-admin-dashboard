let toggle = document.querySelector(".toggle");
let naviation = document.querySelector(".naviation");
let main = document.querySelector(".main");
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    naviation.classList.toggle("active");
    main.classList.toggle("active");
})