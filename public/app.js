const openBtn = document.getElementById("openbtn");
const closeBtn = document.getElementById("closebtn");
const sidebarNav = document.getElementById("sidebarnav");
const arrowdownone = document.getElementById('arrowdownone');
const arrowdowntwo = document.getElementById('arrowdowntwo');
const featuresdropdown = document.getElementById('featuresdropdown');
const companydropdown = document.getElementById('companydropdown'); 
const arrow_feature_desk = document.getElementById('arrow_feature_desk');
const arrow_company_desk = document.getElementById('arrow_company_desk');
// const dpdropdown_one = document.getElementById('dpdropdown_one'); 
// const dpdropdown_two = document.getElementById('dpdropdown_two'); 

openBtn.addEventListener("click", function () {
  sidebarNav.classList.toggle("hidden");
  openBtn.style.visibility = "hidden";
});

closeBtn.addEventListener("click", function () {
  sidebarNav.classList.toggle("hidden");
  openBtn.style.visibility = "visible";
});


arrowdownone.addEventListener('click', function() {
  featuresdropdown.classList.toggle('hidden')
  
})

arrowdowntwo.addEventListener('click', function() {
  companydropdown.classList.toggle('hidden')
})


// arrow_feature_desk.addEventListener('click', function() {
//   dpdropdown_one.style.display = "visible"
// })


// arrow_company_desk.addEventListener('click', function() {
//   dpdropdown_one.classList.toggle('hidden')
// })
