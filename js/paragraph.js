(function(){

let q01 = document.getElementById("q01js");
let a01 = document.getElementById("a01js");
let i01 = document.getElementById("i01js");
i01.innerHTML = "&#8853; "; // default is plus
q01.addEventListener("click", function(){
  makeChange(a01, i01);}, false);

let toggle = false; // default is hidden
function makeChange(answer, icon){
  if (toggle) {
    toggle = false;
    answer.classList.remove("show");
    icon.innerHTML = "&#8853; ";
  } 
  else {
    toggle = true;
    answer.classList.add("show");
    icon.innerHTML = "&#8854; ";
  }
};

})();