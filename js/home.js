let modalBtn = document.getElementById("modal-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
modalBtn.onclick = function () {
  modal.style.display = "block";
  sportsDropDown();
  timeSlotsDropDown();
};
closeBtn.onclick = function () {
  modal.style.display = "none";
  sportsDropDown();
  timeSlotsDropDown();
};
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
    sportsDropDown();
    timeSlotsDropDown();
  }
};
function submitModal() {
  modal.style.display = "none";
  sportsDropDown();
  timeSlotsDropDown();
  alert(
    "Your slot for " + selectedSport + " is booked for between " + selectedSlot
  );
}
let sports = [];
let selectedSport = "";
sports.push("Cricket");
sports.push("Football");
sports.push("Bowling");
sports.push("Go Carting");

let timeSlots = [];
let selectedSlot = "";
timeSlots.push("4:00AM - 5:00AM");
timeSlots.push("5:00AM - 6:00AM");
timeSlots.push("6:00AM - 7:00AM");
timeSlots.push("7:00AM - 8:00AM");
timeSlots.push("8:00AM - 9:00AM");
timeSlots.push("4:00PM - 5:00PM");
timeSlots.push("5:00PM - 6:00PM");
timeSlots.push("6:00PM - 7:00PM");
timeSlots.push("7:00PM - 8:00PM");
timeSlots.push("8:00PM - 9:00PM");

function selectSport() {
  selectedSport = document.getElementById("sportsDropDown").value;
  console.log(selectedSport);
}

function selectTimeSlot() {
  selectedSlot = document.getElementById("timeSlotsDropDown").value;
  console.log(selectedSlot);
}

function sportsDropDown() {
  var select = document.getElementById("sportsDropDown");
  select.innerHTML = "";
  sports.forEach((each) => {
    select.innerHTML += '<option value="' + each + '">' + each + "</option>";
  });
}

function timeSlotsDropDown() {
  var select = document.getElementById("timeSlotsDropDown");
  select.innerHTML = "";
  timeSlots.forEach((each) => {
    select.innerHTML += '<option value="' + each + '">' + each + "</option>";
  });
}

sportsDropDown();
timeSlotsDropDown();
