//DeployPortal MOVE FUNCTIONS START //////////////////////////////
window.addEventListener("load", (event) => {
  dragElement(document.getElementById("DeployPortal1"));
  dragElement(document.getElementById("DeployPortal2"));

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
  document.getElementById("color-menu").style.visibility = "hidden";
}

function CloseScreen3() {
  document.getElementById("ConsoleInfo").style.visibility = "hidden";
}

function OpenColorMenu() {
  if ((document.getElementById("color-menu").style.visibility = "hidden")) {
    document.getElementById("color-menu").style.visibility = "visible";
    document.getElementById("color-button").style.opacity = "1";
  } else if (
    (document.getElementById("color-menu").style.visibility = "visible")
  ) {
    var CloseMenuColor = document.getElementById("color-menu");
    CloseMenuColor.setAttribute("style", "visbility: hidden");
  }
}

function FullScreen() {
  document.getElementById("menuZoom").style.visibility = "hidden";
  document.getElementById("menuZoomReset").style.visibility = "visible";
  var DeployPortalStyle = document.getElementById("DeployPortal1");
  DeployPortalStyle.setAttribute("style", "height: 600px");
  var iFrameitStyle = document.getElementById("iFrameit");
  iFrameitStyle.setAttribute("style", "height: 570px");
}

function ResetScreen() {
  document.getElementById("menuZoomReset").style.visibility = "hidden";
  document.getElementById("menuZoom").style.visibility = "visible";
  var DeployPortalStyle = document.getElementById("DeployPortal1");
  DeployPortalStyle.setAttribute("style", "height: 400px");
  var iFrameitStyle = document.getElementById("iFrameit");
  iFrameitStyle.setAttribute("style", "height: 400px");
}
//DeployPortal MENU FUNCTIONS END /////////////////////////////

//LiquidPicker START /////////////////////////////////////////////
function SetColorVar1() {
  document.getElementById("picker-inside").style.backgroundColor = "#93c572";
  document.getElementById("picker").style.background = "radial-gradient(#93c572, #000)";
}
function SetColorVar2() {
  document.getElementById("picker-inside").style.backgroundColor = "#fc6600";
  document.getElementById("picker").style.background = "radial-gradient(#fc6600, #000)";
}
function SetColorVar3() {
  document.getElementById("picker-inside").style.backgroundColor = "#CDB0EE";
  document.getElementById("picker").style.background = "radial-gradient(#CDB0EE, #000)";
}
function SetColorVar4() {
  document.getElementById("picker-inside").style.backgroundColor = "#010101";
  document.getElementById("picker").style.background = "radial-gradient(#010101, #000)";
}
function SetColorVar5() {
  document.getElementById("picker-inside").style.backgroundColor = "#25523b";
  document.getElementById("picker").style.background = "radial-gradient(#25523b, #000)";
}
function SetColorVar6() {
  document.getElementById("picker-inside").style.backgroundColor = "#b53737";
  document.getElementById("picker").style.background = "radial-gradient(#b53737, #000)";
}
function SetColorVar7() {
  document.getElementById("picker-inside").style.backgroundColor = "#5F3D68";
  document.getElementById("picker").style.background = "radial-gradient(#5F3D68, #000)";
}
function SetColorVar8() {
  document.getElementById("picker-inside").style.backgroundColor = "#4A4A4A";
  document.getElementById("picker").style.background = "radial-gradient(#4A4A4A, #000)";
}
function SetColorVar9() {
  document.getElementById("picker-inside").style.backgroundColor = "#fdfd96";
  document.getElementById("picker").style.background = "radial-gradient(#fdfd96, #000)";
}
function SetColorVar10() {
  document.getElementById("picker-inside").style.backgroundColor = "#00ff37";
  document.getElementById("picker").style.background = "radial-gradient(#00ff37, #000)";
}
function SetColorVar11() {
  document.getElementById("picker-inside").style.backgroundColor = "#730f0f";
  document.getElementById("picker").style.background = "radial-gradient(#730f0f, #000)";
}
function SetColorVar12() {
  document.getElementById("picker-inside").style.backgroundColor = "#0e0e0e";
  document.getElementById("picker").style.background = "radial-gradient(#0e0e0e, #000)";
}
function SetColorVar13() {
  document.getElementById("picker-inside").style.backgroundColor = "#006ee6";
  document.getElementById("picker").style.background = "radial-gradient(#006ee6, #000)";
}
function SetColorVar14() {
  document.getElementById("picker-inside").style.backgroundColor = "#F4C2C2";
  document.getElementById("picker").style.background = "radial-gradient(#F4C2C2, #000)";
}
function SetColorVar15() {
  document.getElementById("picker-inside").style.backgroundColor = "#fbff00";
  document.getElementById("picker").style.background = "radial-gradient(#fbff00, #000)";
}
function SetColorVar16() {
  document.getElementById("picker-inside").style.backgroundColor = "#ffffff";
  document.getElementById("picker").style.background = "radial-gradient(#ffffff, #000)";
}
function SetColorVar17() {
  document.getElementById("picker-inside").style.backgroundColor = "#ffb480";
  document.getElementById("picker").style.background = "radial-gradient(#ffb480, #000)";
}
function SetColorVar18() {
  document.getElementById("picker-inside").style.backgroundColor = "#E11584";
  document.getElementById("picker").style.background = "radial-gradient(#E11584, #000)";
}
function SetColorVar19() {
  document.getElementById("picker-inside").style.backgroundColor = "#00254d";
  document.getElementById("picker").style.background = "radial-gradient(#00254d, #000)";
}
function SetColorVar20() {
  document.getElementById("picker-inside").style.backgroundColor = "#452813";
  document.getElementById("picker").style.background = "radial-gradient(#452813, #000)";
}
//LiquidPicker END /////////////////////////////////////////////
