// NavBar Functionality
const navIcon = document.getElementById("navIcon")
const navBar = document.querySelector(".navBar")

navIcon.addEventListener("click", ()=>{
  navBar.classList.toggle("navOpen")
})