//Sends a Notification and returns the Notification Variable
function notify(text) {
  if (!("Notification" in window)) {
    console.error("Failed to send Notefication Due to Error: The Browser Does not Support Notifications")
  } else if (Notification.permission === "granted") {
    const notification = new Notification(text);
    return notification;
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification(text);
        return notification;
      }
    });
  }
}

//Requests Notification Permissions with checking if its disabled or allowed if none than asks and returns the value "denied", "granted", or "ask" but if disabled or enabled returns the current value
function notifyPermRequest() {
 if(Notification.permission !== "denied" && Notification.permission !== "granted")
  Notification.requestPermission
 }
 return Notification.permission;
}

//Closes the Notification from the Given Notification Variable
function closeNotification(notification) {
 notification.close()
}
