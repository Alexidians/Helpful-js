      function playSound(url) {
       var player = document.getElementById("audio")
       var playerSource = document.createElement("source")
       playerSource.src = url
       playerSource.type = "audio/" + url.split(".")[url.split(".").length]
       player.appendChild(playerSource)
       document.body.appendChild(player)
       player.play()
      }
