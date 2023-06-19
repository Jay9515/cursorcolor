
var x = document.querySelector(".letter-border");
var letters = [...x.innerHTML];

var span = null;
var newElemnt = document.createElement("span");
letters.forEach((l) => {
  var span = document.createElement("span");
  span.innerHTML = l;
  newElemnt.appendChild(span);
  // console.log(span)
});
newElemnt.classList.add("letter-border");
document.querySelector("p").replaceChild(newElemnt, x);

   

