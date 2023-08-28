//Works with any Sound File Supported By The Clients Browser

function PlaySound(url) {
 var SoundFrame = document.createElement("iframe")
 SoundFrame.src = url
 document.body.appendChild(SoundFrame)
 setTimeout(SetElemDisplay, 10, SoundFrame, "none")
}

function SetElemDisplay(Elem, value) {
 Elem.style.display = value
}
