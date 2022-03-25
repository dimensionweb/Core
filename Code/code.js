////////////////////////////////////////////////////////////////
//////////////////////DIMENION CLOUD JAVA///////////////////////
////////////////////////////////////////////////////////////////

//NAVBAR FUNCTIONS CALLBACKS //////////////////////////////////
function home() {
  window.location.replace("https://dimension.codes/");
  wait(1000);
  document.getElementById("nav-Home").style.opacity = "1";
}
function projects() {
  window.location.replace("/Pages/projects.html");
  wait(1000);
  document.getElementById("nav-Projects").style.opacity = "1";
}
function price() {
  window.location.replace("/Pages/price.html");
  wait(1000);
  document.getElementById("nav-Price").style.opacity = "1";
}
function aboutus() {
  window.location.replace("/Pages/aboutus.html");
  wait(1000);
  document.getElementById("nav-Aboutus").style.opacity = "1";
}
function login() {
  window.location.replace("https://gitpod.io/workspaces");
  wait(1000);
  document.getElementById("nav-Login").style.opacity = "1";
  
}
function CloudDeploy() {
  window.location.replace("/Pages/CloudDeploy.html");
  wait(1000);
  document.getElementById("CloudDeploy").style.opacity = "1";
}
//NAVBAR FUNCTIONS CALLBACKS END /////////////////////////////