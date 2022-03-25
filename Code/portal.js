//PORTAL FUNCTIONS CALLBACKS END /////////////////////////////
window.onload = addPortal;

function addPortal() {
  document.getElementById('portal').addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);
  document.getElementById("menuZoomreset").style.opacity = "0";
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

function FullScreen() {
  document.getElementById("menuZoom").style.opacity = "0";
  document.getElementById("menuZoomreset").style.opacity = "1";
  document.getElementById("portal").style.zoom = "200%";
}

function ResetScreen() {
  document.getElementById("menuZoomreset").style.opacity= "0";
  document.getElementById("menuZoom").style.opacity = "1";
  document.getElementById("portal").style.zoom = "100%";
}
//PORTAL FUNCTIONS CALLBACKS END /////////////////////////////