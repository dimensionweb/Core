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

function FullScreen() {
  document.getElementById("portal").style.zoom = "200%";
  document.getElementById("menuZoom").style.visibility = "hidden";
  document.getElementById("menuZoomReset").style.visibility = "block";
}

function ResetScreen() {
  document.getElementById("portal").style.zoom = "100%";
  document.getElementById("menuZoomReset").style.visibility = "hidden";
  document.getElementById("menuZoom").style.visibility = "block";
}
//PORTAL FUNCTIONS CALLBACKS END /////////////////////////////