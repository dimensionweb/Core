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
  div.style.position = 'absolute';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
}
//PORTAL FUNCTIONS CALLBACKS END /////////////////////////////