////////////////////////////////////////////////////////////////
//////////////////////DIMENION CLOUD JAVA///////////////////////
////////////////////////////////////////////////////////////////

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
  window.location.replace("/Pages/CloudDeploy.html");
}
//NAVBAR FUNCTIONS CALLBACKS END /////////////////////////////


//PORTAL FUNCTIONS CALLBACKS END /////////////////////////////
window.onload = addListeners;

function addListeners() {
  document.getElementById('portal').addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp() {
  window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e) {
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e) {
  var div = document.getElementById('portal');
  div.style.position = 'absolute';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
}
//PORTAL FUNCTIONS CALLBACKS END /////////////////////////////