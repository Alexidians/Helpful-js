//run this script in the page were you want to sync the data from
/*The Script is:
var targetWeb = open("url where to paste the data")
var copyedLocalStorage = localStorage
targetWeb.eval("localStorage = " + copyedLocalStorage)
var copyedCookies = document.cookie
targetWeb.eval("document.cookie = " + copyedCookies)
var copyedSessionStorage = sessionStorage
targetWeb.eval("sessionStorage = " + copyedSessionStorage)
targetWeb.eval("console.debug('Copyed Data from ' + location.href)")
console.debug("Data Pasted to " targetWeb.eval("location.href"))
*/
