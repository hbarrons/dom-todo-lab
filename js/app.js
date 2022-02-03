const inp = document.getElementById('html-input')
console.log(inp)

const ulList = document.getElementById('todo-list')
console.log(ulList)

const butt = document.getElementById('submit-button')
console.log(butt)

butt.addEventListener('click', function(evt){
  const newLi = document.createElement('li')
  newLi.textContent = inp.value 
  if(inp.value !== "") {
    ulList.appendChild(newLi)
    inp.value = "";
  }
})