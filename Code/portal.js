//PORTAL FUNCTIONS CALLBACKS END /////////////////////////////
window.onload = addPortal;

function addPortal() {
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
  div.style.position = 'relative';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
}

function CloseScreen() {
  document.getElementById("portal").style.visibility = "hidden";
  document.getElementById("menuClose").style.visibility = "hidden";
  document.getElementById("menuHide").style.visibility = "hidden";
  document.getElementById("menuZoom").style.visibility = "hidden";
  document.getElementById("menuZoomReset").style.visibility = "hidden";
}

function FullScreen() {
  document.getElementById("menuZoom").style.visibility = "hidden";
  document.getElementById("menuZoomReset").style.visibility = "visible";
  document.getElementById("portal").style.zoom = "200%";
}

function ResetScreen() {
  document.getElementById("menuZoomReset").style.visibility = "hidden";
  document.getElementById("menuZoom").style.visibility = "visible";
  document.getElementById("portal").style.zoom = "100%";
}
//PORTAL FUNCTIONS CALLBACKS END /////////////////////////////