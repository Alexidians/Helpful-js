function notify(text) {
  if (!("Notification" in window)) {
    console.error("Failed to send Notefication Due to Error: The Browser Does not Support Notifications")
  } else if (Notification.permission === "granted") {
    const notification = new Notification(text);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification(text);
      }
    });
  }
}
