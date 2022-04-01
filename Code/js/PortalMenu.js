//DeployPortal MENU FUNCTIONS START /////////////////////////////

//CloudDeploy
function CloseScreen() {
  document.getElementById("DeployPortal1").style.visibility = "hidden";
  document.getElementById("menuClose").style.visibility = "hidden";
  document.getElementById("menuZoom").style.visibility = "hidden";
  document.getElementById("menuZoomReset").style.visibility = "hidden";
}

//ToolBar
function CloseScreen2() {
  document.getElementById("DeployPortal2").style.visibility = "hidden";
  document.getElementById("color-menu").style.visibility = "hidden";
  document.getElementById("color-buttonClose").style.visibility = "hidden";
  document.getElementById("picker-selector").style.visibility = "hidden";
}

//ToolBarColorMenu
function CloseScreen3() {
  document.getElementById("color-menu").style.visibility = "hidden";
  document.getElementById("picker-selector").style.visibility = "hidden";
  document.getElementById("color-buttonClose").style.visibility = "hidden";
  document.getElementById("color-button").style.visibility = "visible";
  document.getElementById("color-buttonClose").style.opacity = "0.4";
}

//SecureServer
function CloseScreen4() {
  document.getElementById("secure-server").style.visibility = "hidden";
}

//iFrame
function CloseScreen5() {
  document.getElementById("DeployPortal3").style.visibility = "hidden";
}

//ConsoleInfo
function CloseScreen6() {
  document.getElementById("ConsoleInfo").style.visibility = "hidden";
}

//OpenToolBarColorMenu
function OpenColorMenu() {
  if ((document.getElementById("color-menu").style.visibility = "hidden")) {
    document.getElementById("color-menu").style.visibility = "visible";
    document.getElementById("picker-selector").style.visibility = "visible";
    document.getElementById("color-button").style.visibility = "hidden";
    document.getElementById("color-buttonClose").style.visibility = "visible";
    document.getElementById("color-buttonClose").style.opacity = "1";
  }
}

//CloudDeploy
function FullScreen() {
  document.getElementById("menuZoom").style.visibility = "hidden";
  document.getElementById("menuZoomReset").style.visibility = "visible";
  var DeployPortalStyle = document.getElementById("DeployPortal1");
  DeployPortalStyle.setAttribute("style", "height: 600px");
  var iFrameitStyle = document.getElementById("iFrameit");
  iFrameitStyle.setAttribute("style", "height: 570px");
}

//CloudDeploy
function ResetScreen() {
  document.getElementById("menuZoomReset").style.visibility = "hidden";
  document.getElementById("menuZoom").style.visibility = "visible";
  var DeployPortalStyle = document.getElementById("DeployPortal1");
  DeployPortalStyle.setAttribute("style", "height: 400px");
  var iFrameitStyle = document.getElementById("iFrameit");
  iFrameitStyle.setAttribute("style", "height: 400px");
}
//DeployPortal MENU FUNCTIONS END /////////////////////////////
