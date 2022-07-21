const todayDisplay = document.querySelector(".discoverlasthere");
const visitsDisplay = document.querySelector(".discovervisits");


let numVisits = Number(window.localStorage.getItem("discovervisits"));
let dateslastVisits = Number(window.localStorage.getItem("lastvisited"));


if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = "Welcome this seems to be your first visit!";
}
if (dateslastVisits !== 0) {
  dateslastVisits =  parseInt(((((Date.now() - dateslastVisits)/1000)/60)/60)/24)
	todayDisplay.textContent = dateslastVisits;
} else {
	todayDisplay.textContent = 0;
}



numVisits++;

localStorage.setItem("discovervisits", numVisits);
localStorage.setItem("lastvisited", Date.now());