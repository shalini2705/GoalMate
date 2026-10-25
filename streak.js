const calendar = document.getElementById("calendar");

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();
const start = new Date(today);
start.setDate(start.getDate() - 27); // last 4 weeks (28 days)

// Example: randomly marking 75% of days as active (with streak)
for (let i = 0; i < 28; i++) {
  const date = new Date(start);
  date.setDate(start.getDate() + i);

  const day = document.createElement("div");
  day.classList.add("day");

  const isStreakDay = Math.random() < 0.75; // simulate streak activity

  if (!isStreakDay) {
    day.classList.add("inactive");
  }

  day.innerHTML = `
    <div>${daysOfWeek[date.getDay()]}</div>
    <div>${date.getDate()}</div>
    <div>${isStreakDay ? "🔥" : ""}</div>
  `;

  calendar.appendChild(day);
}