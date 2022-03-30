//DeployPortal MOVE FUNCTIONS START //////////////////////////////
window.addEventListener("load", (event) => {
  //CloudDeploy
  dragElement(document.getElementById("DeployPortal1"));
  //ColorPicker
  dragElement(document.getElementById("DeployPortal2"));
  dragElement(document.getElementById("picker-selector"));
  //Galaxy
  dragElement(document.getElementById("moon1"));
  dragElement(document.getElementById("moon2"));
  dragElement(document.getElementById("earth"));
  dragElement(document.getElementById("ufo1"));
  dragElement(document.getElementById("ufo2"));
  dragElement(document.getElementById("saturn"));
  dragElement(document.getElementById("solar"));
  dragElement(document.getElementById("neptune"));
  dragElement(document.getElementById("comet"));

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
