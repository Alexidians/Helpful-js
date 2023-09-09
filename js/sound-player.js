function playSound(url) {
 var soundElem = document.createElement("audio")
 soundElem.autoplay
 soundElem.style.display = "none"
 var soundSource = document.createElement("source")
 soundSource.src = url
 var splitSoundUrl = url.split(".")
 soundSource.type = "audio/" + splitSoundUrl[splitSoundUrl.length]
 soundElem.appendChild(soundSource)
 document.body.appendChild(soundElem)
}
