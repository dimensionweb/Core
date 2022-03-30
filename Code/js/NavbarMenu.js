////////////////////////////////////////////////////////////////
//////////////////////DIMENION CLOUD JAVA///////////////////////
////////////////////////////////////////////////////////////////

//ONLOAD JAVA START ////////////////////////////////////////////

//ONLOAD JAVA END //////////////////////////////////////////////

//NAVBAR FUNCTIONS CALLBACKS //////////////////////////////////
function home() {
  window.location.replace("https://dimension.codes/");
}
function projects() {
  window.location.replace("/Pages/projects.html");
}
function price() {
  window.location.replace("/Pages/price.html");
}
function aboutus() {
  window.location.replace("/Pages/aboutus.html");
}
function login() {
  window.location.replace("https://gitpod.io/workspaces");
}
function CloudDeploy() {
  if (window.location.href.indexOf("CloudDeploy") != -1) {
    document.getElementById("DeployPortal1").style.visibility = "visible";
    document.getElementById("menuClose").style.visibility = "visible";
    document.getElementById("menuZoom").style.visibility = "visible";
  } else window.location.replace("/Pages/CloudDeploy.html");
}
//NAVBAR FUNCTIONS CALLBACKS END /////////////////////////////