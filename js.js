var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("sliderPlaceholder");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "inline-block";
}

function  showBurgerContent(){
  var z = document.getElementById("hamburgerContent");
  if (z.style.opacity == 0) {
    z.style.right = "0px";
    z.style.opacity = "1";
  } else {
    z.style.right = "-225px";
    z.style.opacity = "0";
  }
}

function showMobileDropContent(){
  var a = document.getElementsByClassName("mobileDropArrow");
  if (a.style.webkitTransform = "rotate(0deg)"){
    a.style.webkitTransform = "rotate(180deg)";
  console.log("if check is working")
  } else {
    a.style.webkitTransform = "rotate(0deg)";
  }
}
