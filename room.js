// Parse URL parameters
const params = new URLSearchParams(window.location.search);
const roomName = params.get("name");
const roomId = params.get("id");

// Populate the room info
document.getElementById("roomNameText").textContent = roomName || "Unknown";
document.getElementById("roomIdText").textContent = roomId || "N/A";

// Set share link
const shareURL = `${window.location.origin}/room.html?name=${encodeURIComponent(roomName)}&id=${roomId}`;
document.getElementById("shareLink").value = shareURL;

// Copy to clipboard
function copyText(elementId) {
  const el = document.getElementById(elementId);
  const text = el.tagName === "INPUT" ? el.value : el.innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  });
}

// Enter Room action
function enterRoom() {
  alert(`Joining room: ${roomName} (${roomId})`);
  // Redirect to actual chat or video room here
}
function goToRoom() {
  window.location.href = "../html/enter.html";
}

// Share Room
function shareRoom() {
  navigator.share
    ? navigator.share({
        title: "Join my GoalMate room!",
        text: `Join my study room "${roomName}" on GoalMate.`,
        url: shareURL
      })
    : alert("Sharing not supported. You can copy the link manually.");
}
