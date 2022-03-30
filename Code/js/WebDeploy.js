
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
          BrainStyle.setAttribute("style", "opacity: 1");
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
  