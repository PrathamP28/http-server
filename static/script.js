// 🍃🍀
let enteredData = "";

// Prompt user to enter data
function enterData() {
  let userInput = prompt("Enter your data:");
  if (userInput) {
    enteredData = userInput;
  }
}

// Send data to Flask backend
function addData() {
  if (!enteredData) {
    alert("No data entered! Please click 'Enter data' first.");
    return;
  }

  fetch("/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: enteredData }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("dataDisplay").innerText = data.text;
      enteredData = ""; // Clear entered data
    })
    .catch((error) => console.error("Error:", error));
}

// Fetch data on page load
window.onload = function () {
  fetch("/get")
    .then((response) => response.json())
    .then((data) => {
      if (data.text) {
        document.getElementById("dataDisplay").innerText = data.text;
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
};
// written by Pratham 🍂🍁
