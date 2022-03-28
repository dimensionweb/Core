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

//DEPLOY SERVER //////////////////////////////////////////////
if (window.File && window.FileReader && window.FileList && window.Blob) {
  function UploadImage() {
    var preview = document.getElementById("show-code");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    var DockerCompose = /application.*/;

    if (file.type.match(DockerCompose)) {
      reader.onload = function (event) {
        preview.innerHTML = event.target.result;
        var BrainStyle = document.getElementById("brain");
        BrainStyle.setAttribute("style", "height: 600px");
      };
    } else {
      preview.innerHTML =
        "<span class='WrongFormat_ERROR'>DimensionCloud can only deploy .yml [ docker-compose ]</span>";
      document.getElementById("brain").style.opacity = "0.1";
      wait(1);
      window.location.replace("/Pages/CloudDeploy.html");
    }
    reader.readAsText(file);
  }
} else {
  alert("Your browser is too old to support HTML5 File API");
  document.getElementById("brain").style.opacity = "0.1";
  wait(1);
  window.location.replace("/Pages/CloudDeploy.html");
}
//DEPLOY SERVER //////////////////////////////////////////////

//InLabCloudDeploy ///////////////////////////////////////////

//InLabCloudDeploy ///////////////////////////////////////////
