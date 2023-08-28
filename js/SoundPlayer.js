//works with any sound file supported by the browser

function PlaySound(url) {
 var SoundFrame = document.createElement("iframe")
 SoundFrame.src = url
 SoundFrame.style.display = none;
 document.body.appendChild(SoundFrame)
}
