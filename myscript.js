const container = document.querySelector("#container")

for(let i = 1;i <= 256;i++){
  const div = document.createElement('div');
  // div.style.cssText = "border:1px solid black; height:41.76px;width:41.76px";
  div.classList.add("squareDiv");
  container.appendChild(div);

  div.addEventListener('mouseover',()=> {
    div.style.backgroundColor = "black";
  })
}


