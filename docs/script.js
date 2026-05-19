function download() {

  // Direct VSIX download
  window.open(
    "https://github.com/gittrend-dev/code-origin/releases/download/v0.0.1/code-origin-1.0.0.vsix",
    "_blank"
  );
}

function buyPro() {
  window.open("https://gumroad.com/", "_blank");
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

function toggleFeature(card) {
  card.classList.toggle("active");
}

function toggleFAQ(item) {
  item.classList.toggle("active");
}

function openVSCode() {

  // Your extension ID
  const extensionId = "yourpublisher.code-origin";

  // VS Code deep link
  const vscodeUrl = `vscode:extension/${extensionId}`;

  // Try opening VS Code
  window.location.href = vscodeUrl;

  // Fallback if VS Code not installed
  setTimeout(() => {

    const confirmInstall = confirm(
      "VS Code not installed. Do you want to download VS Code?"
    );

    if (confirmInstall) {
      window.open("https://code.visualstudio.com/", "_blank");
    }

  }, 1500);
}