window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const roomName = urlParams.get("name") || "Room";
  const roomId = urlParams.get("id") || "ABC123";

  document.getElementById("roomName").textContent = roomName;
  document.getElementById("roomId").textContent = roomId;

  // Example logic for progress bar
  const totalTopics = 5;
  const completed = 0;
  const percent = (completed / totalTopics) * 100;

  document.getElementById("topicsDone").textContent = completed;
  document.getElementById("progressFill").style.width = `${percent}%`;
};
