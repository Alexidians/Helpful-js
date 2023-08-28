//Works with any Sound File Supported By The Clients Browser

function PlaySound(url) {
 var SoundFrame = document.createElement("iframe")
 SoundFrame.src = url
 SoundFrame.style.display = "none"
 document.body.appendChild(SoundFrame)
}
