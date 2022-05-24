const alert = document.querySelector("#alert");
const time = document.querySelector("#time");

let count = 5;

setInterval(function () {
    count--;
    if (count >= 0) {
        time.textContent = count;
    }
    if (count === 0) {
        alert.style.display = "none";
    }
}, 1000);
