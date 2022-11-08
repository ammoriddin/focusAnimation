let circle = document.querySelector("#circle"),
    box = document.querySelectorAll(".box");

document.addEventListener('mousemove',(e) => {
    box[1].style.clipPath = `circle(150px at ${e.clientX}px ${e.clientY}px)`;
    circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
})