const datefieldUK = document.querySelector(".today"); 
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

document.querySelector('#year').innerHTML = (new Date().getFullYear());
document.querySelector('#lastUpdate').innerHTML = `Bountiful Inn & Suites | Alberto Parreira Almada | 
WDD 230 Final Project |<br> Last Updated: ${document.lastModified}`;

function toggleMenu() {
    document.getElementById("firstNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

