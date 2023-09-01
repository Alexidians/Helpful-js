//add The connection file but the background needs to be set
var backgroundConnect = document.createElement("link")
backgroundConnect.rel = "stylesheet"
document.body.appendChild(backgroundConnect)

//Set The Background Mode to light or dark
function setBackgroundMode(mode) {
 if(mode == "light") {
  ackgroundConnect.href = "https://alexidians.github.io/css/background/light-mode.css"
  document.body.style.backgroundColor = null
  document.body.style.backgroundImage = null
 } else {
  if(mode == "dark") {
   backgroundConnect.href = "https://alexidians.github.io/css/background/dark-mode.css"
   document.body.style.backgroundColor = null
   document.body.style.backgroundImage = null
  }
  else {
   console.error("When Trying to use setBackgroudMode("mode") an invalid mode was provided")
  }
 }
}

//sets The Background Color with the given color hex code or color name
function setBackgroundColor(color) {
 document.body.style.backgroundColor = color
 document.body.style.backgroundImage  = null
 backgroundConnect.href = null
}

//sets The Background Image with the given url or directory
function setBackgroundImage(image) {
 document.body.style.backgroundImage  = image
 document.body.style.backgroundColor = null
 backgroundConnect.href = null
}
