// const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const themeEl = document.querySelector(".theme");
const h1El = document.querySelector("h1");

const choiceEl = document.querySelectorAll(".choice");

const characters = "0123456789abcdef";

for (let i = 0; i < choiceEl.length; i++) {
  const item = choiceEl[i];
  console.log(`You are in ${i} --> ${item.textContent}`);
  item.addEventListener("click", () => {
    // console.log(` This item is: ${item.textContent}`);
    if (item.textContent === "nightlight_badge") {
      console.log(".... ok.... it s Dark");
      body.style.background = "rgb(34, 34, 34)";
      //   body.style.color = "rgb(256, 183, 7)";
      h1El.style.color = "rgb(256, 183, 7)";
    } else if (item.textContent === "light_mode") {
      console.log(".... ok.... it s white");
      body.style.background = "rgb(234, 234, 234)";
      //   body.style.color = "rgb(256, 183, 7)";
      h1El.style.color = "rgb(25, 24, 63)";
    } else {
      console.log(".... ok.... it s White");

      let color1 = "#";
      let color2 = "#";
      for (let i = 0; i < 6; i++) {
        color1 += characters[Math.floor(Math.random() * 16)];
        color2 += characters[Math.floor(Math.random() * 16)];
      }

      body.style.background =
        "linear-gradient(to right, " + color1 + ", " + color2 + ")";

      //   body.style.background = `;
      h1El.style.color = "rgb(21, 24, 63)";
      themeEl.style.background = "color1";
    }
  });
}
