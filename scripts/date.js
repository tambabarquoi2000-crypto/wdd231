const date = new Date();
const currentYear = date.getFullYear();

const todayYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-date-modified");

todayYear.innerHTML = currentYear;
lastModified.innerHTML = document.lastModified;
