const heart = document.getElementById("heart");
const message = document.getElementById("message");
const clickText = document.querySelector(".click");

heart.addEventListener("click", function () {

    heart.style.display = "none";
    clickText.style.display = "none";

    message.style.display = "block";
    setTimeout(() => {
        message.classList.add("show");
    }, 10);

});
