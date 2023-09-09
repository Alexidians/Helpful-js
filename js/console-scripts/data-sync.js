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
