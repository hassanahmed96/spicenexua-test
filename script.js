// Load saved data
window.onload = () => {
  const savedVersion = localStorage.getItem("version");
  const savedManual = localStorage.getItem("manual");

  if (savedVersion) {
    document.getElementById("versionText").innerText = "Version: " + savedVersion;
  }

  if (savedManual) {
    document.getElementById("manualBtn").href = savedManual;
  }
};

// Update Version
function updateVersion() {
  const version = document.getElementById("versionInput").value;

  if (version.trim() === "") {
    alert("Enter valid version");
    return;
  }

  localStorage.setItem("version", version);
  document.getElementById("versionText").innerText = "Version: " + version;
}

// Update Manual
function updateManual() {
  const manual = document.getElementById("manualInput").value;

  if (manual.trim() === "") {
    alert("Enter valid URL");
    return;
  }

  localStorage.setItem("manual", manual);
  document.getElementById("manualBtn").href = manual;
}