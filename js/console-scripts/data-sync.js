//run this script in the page were you want to sync the data from
/*The Script is:
var targetWeb = open("url where to paste the data")
var copyedData = localStorage
targetWeb.eval("localStorage = " + copyedData)
var copyedData = document.cookie
targetWeb.eval("document.cookie = " + copyedData)
var copyedData = sessionStorage
targetWeb.eval("sessionStorage = " + copyedData)
targetWeb.close()
console.debug("Data Synhronized Sucessfully")
*/
//if it did not work then try doing this
/*run the scripts that are logged in debug to paste the data on the site where you want to script:
console.debug("//Paste Scripts")
console.debug("document.cookie = " + document.cookie)
console.debug("localStorage = " + localStorage)
console.debug("sessionStorage = " + sessionStorage)
*/
//document.cookie is for cookies
//localStorage is for local Storage
//sessionStorage is for the session Storage
