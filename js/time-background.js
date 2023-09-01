//add TimeBackground Background connet element and set a interval to check time background every 0 miliseconds
var timeBackground = document.createElement("link")
timeBackground.rel = "stylesheet"
setInterval(CheckTimeBackground, 0)

function CheckTimeBackground() {
 var timeBackgroundDate = new Date()
 var timeBackgroundHour = timeBackgroundDate.getHours()
 if(timeBackgroundHour > 20 || timeBackgroundHour < 7) {
  timeBackground.href = "https://alexidians.github.io/Helpful-js/css/background/dark-mode.css"
 }
 else {
  timeBackground.href = "https://alexidians.github.io/Helpful-js/css/background/light-mode.css"
 }
}
