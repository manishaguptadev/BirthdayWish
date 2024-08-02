let countDateTime = new Date("August 23, 2024 12:00:00").getTime();

let birthdayCounter = setInterval(() => {
  let now = new Date().getTime();
  let diffrence = countDateTime - now;

  let days = Math.floor(diffrence / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffrence % (1000 * 60)) / 1000);

  document.getElementById("numberOfDays").innerHTML = days;
  document.getElementById("numberOfHours").innerHTML = hours;
  document.getElementById("numberOfMinutes").innerHTML = minutes;
  document.getElementById("numbersOfSeconds").innerHTML = seconds;

  let birthDayWishes = document.querySelector(".birthday-wishes-box");
  let birthDayCountDown = document.querySelector(".birthday-countdown-box");

  if (diffrence < 0) {
    clearInterval(birthdayCounter);
    birthDayCountDown.classList.add("d-none");
    birthDayWishes.classList.remove("d-none");
  }
});
