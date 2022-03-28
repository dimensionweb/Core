//DeployPortal MOVE FUNCTIONS START //////////////////////////////
window.addEventListener("load", (event) => {
  dragElement(document.getElementById("DeployPortal1"));
  dragElement(document.getElementById("DeployPortal2"));
  dragElement(document.getElementById("DeployPortal3"));

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id)) {
      document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
});
//DeployPortal MOVE FUNCTIONS END ///////////////////////////////

//DeployPortal MENU FUNCTIONS START /////////////////////////////
function CloseScreen() {
  document.getElementById("DeployPortal1").style.visibility = "hidden";
  document.getElementById("menuClose").style.visibility = "hidden";
  document.getElementById("menuZoom").style.visibility = "hidden";
  document.getElementById("menuZoomReset").style.visibility = "hidden";
}

function CloseScreen2() {
  document.getElementById("DeployPortal2").style.visibility = "hidden";
  document.getElementById("menuClose2").style.visibility = "hidden";
}

function FullScreen() {
  document.getElementById("menuZoom").style.visibility = "hidden";
  document.getElementById("menuZoomReset").style.visibility = "visible";
  var DeployPortalStyle = document.getElementById("DeployPortal1");
  DeployPortalStyle.setAttribute("style", "height: 600px");
}

function ResetScreen() {
  document.getElementById("menuZoomReset").style.visibility = "hidden";
  document.getElementById("menuZoom").style.visibility = "visible";
  var DeployPortalStyle = document.getElementById("DeployPortal1");
  DeployPortalStyle.setAttribute("style", "height: 400px");
}
//DeployPortal MENU FUNCTIONS END /////////////////////////////
