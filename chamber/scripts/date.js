const date = new Date();
const today = date.getFullYear();

const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

currentYear.textContent = today;
lastModified.textContent = document.lastModified;
