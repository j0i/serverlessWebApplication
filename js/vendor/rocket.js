var launch = document.getElementsByClassName("launch"),
    rocket = document.getElementsByClassName("rocket");

launch[0].addEventListener("click", function () {
  launch[0].style.display = "none";
  rocket[0].style.animation = "fire 20s";
  setTimeout(function () {
    rocket[0].style.animation = "";
    launch[0].style.display = "block";
  }, 20000)
});
