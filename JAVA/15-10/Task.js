const onBtn = document.getElementById("onBtn");
const offBtn = document.getElementById("offBtn");
const bulb = document.getElementById("bulb");
const cat = document.getElementById("cat");
const eyes = document.getElementById("eyes");
const container = document.querySelector(".container");

onBtn.addEventListener("click", () => {
  bulb.style.backgroundColor = "yellow";
  bulb.style.boxShadow = "0 100px 100px yellow";
  cat.style.display = "block";
  eyes.style.display = "none";
  container.style.backgroundColor = "white";
});

offBtn.addEventListener("click", () => {
  bulb.style.backgroundColor = "gray";
  bulb.style.boxShadow = "none";
  cat.style.display = "none";
  eyes.style.display = "block";
  container.style.backgroundColor = "black"; 
});
