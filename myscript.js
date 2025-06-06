const container = document.querySelector("#container")
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => 
  {
    let gridsize = prompt("enter a grid size between 1-100");

let x = Number(gridsize);
if (!isNaN(x) && x>=1 && x<=100){
  container.innerHTML = "";
for(let i = 1;i <= x * x ;i++){

  const div = document.createElement('div');
let squaresize = 600 / x;
  div.classList.add("squareDiv");
  container.appendChild(div);
  div.setAttribute(`style`,`box-sizing: border-box;
  border:1px solid black; 
  height:${squaresize}px;
  width:${squaresize}px;`)

  div.addEventListener('mouseover',()=> {
    div.style.backgroundColor = "black";
  })
}
} else {
  alert ("enter between 1 to 100");
}

})










