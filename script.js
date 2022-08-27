let inputText = document.querySelector(".enter input");
let addBtn = document.querySelector(".enter div");
let shape = document.querySelector(".values");

addBtn.addEventListener("click", () => {
  console.log(inputText.value);
  let ele = document.createElement("div");
  let eleDiv = document.createElement("div");
  let eleText = document.createElement("div");
  eleText.classList.add("text");
  eleText.innerHTML = inputText.value;
  eleDiv.classList.add("btn");
  eleDiv.classList.add("btn-danger");
  eleDiv.innerHTML = "حذف";
  ele.classList.add("piece");
  ele.classList.add("d-flex");
  ele.classList.add("justify-content-around");
  ele.classList.add("py-2");
  ele.classList.add("align-items-center");
  ele.appendChild(eleDiv);
  ele.appendChild(eleText);
  console.log(ele);
  shape.appendChild(ele);
  inputText.value = "";
});
