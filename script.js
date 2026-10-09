
const candles = document.querySelectorAll(".candle");
const message = document.getElementById("birthdayMessage");
const instruction = document.getElementById("instruction");
const stars = document.getElementById("stars");

let surpriseShown = false;

// Create the stars in the background
for (let i = 0; i < 45; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.textContent = Math.random() > 0.5 ? "✦" : "✧";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = (8 + Math.random() * 15) + "px";
    star.style.animationDelay = Math.random() * 2 + "s";

    stars.appendChild(star);
}

// Click on a candle to reveal the birthday message
candles.forEach((candle) => {
    candle.addEventListener("click", () => {
        if (surpriseShown) return;

        surpriseShown = true;

        candles.forEach((item) => {
            item.classList.add("blown");
        });

        instruction.textContent = "✨ Wish made! Happy Birthday! ✨";
        message.hidden = false;

        message.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

        // A little celebration!
        for (let i = 0; i < 25; i++) {
            const sparkle = document.createElement("span");
            sparkle.className = "star";
            sparkle.textContent = ["💗", "✨"][
                Math.floor(Math.random() * 4)
            ];

            sparkle.style.left = Math.random() * 100 + "%";
            sparkle.style.top = Math.random() * 100 + "%";
            sparkle.style.fontSize = "20px";
            sparkle.style.animationDuration = "2s";

            stars.appendChild(sparkle);
        }
    });
});

