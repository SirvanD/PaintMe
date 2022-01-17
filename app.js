const colorButton = document.querySelector(".btn_color");
const demoColor = document.querySelector(".demo_color");
const colorInput = document.querySelector(".color_input");
const drawboard = document.querySelector(".drawboard");

const movieBtn = document.querySelector(".btn_movie");
const movieInput = document.querySelector(".input_movie");

colorButton.addEventListener("click", (event) => {
  event.preventDefault();
  demoColor.style.backgroundColor = colorInput.value;
});

for (let i = 0; i <= 1531; i++) {
  //1631;
  const div = document.createElement("div");
  div.classList.add("pixel");
  // div.classList.add("row");
  drawboard.appendChild(div);
}
const divPixel = document.querySelectorAll(".pixel");

divPixel.forEach((div) => {
  div.addEventListener("click", () => {
    //   var bgColor = event.target.getAttribute("data-color");
    if (demoColor.style.backgroundColor == "") {
      div.style.backgroundColor = "green";
    } else {
      div.style.backgroundColor = demoColor.style.backgroundColor;
    }

    //   demoColor.style.backgroundColor = "yellow";
    //   divPixel.style.backgroundColor = "yellow";
  });
});

//https://www.omdbapi.com/?t=jaws&apikey=6139fe0d

movieBtn.addEventListener("click", (event) => {
  event.preventDefault();

  axios
    .get(`https://www.omdbapi.com/?t=${movieInput.value}&apikey=6139fe0d`)
    .then((res) => {
      drawboard.style.backgroundImage = `url(${res.data.Poster})`;
      console.log("it works");
    });
});
