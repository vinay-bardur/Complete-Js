const extrovertBtn = document.getElementById("extrovertBtn");
const introvertBtn = document.getElementById("introvertBtn");
const extrovertQuestions = document.getElementById("extrovertQuestions");
const introvertQuestions = document.getElementById("introvertQuestions");
const submitBtn = document.getElementById("submitBtn");
const suggestionsList = document.getElementById("suggestionsList");

extrovertBtn.addEventListener("click", () => {
  extrovertQuestions.style.display = "block";
});

introvertBtn.addEventListener("click", () => {
  introvertQuestions.style.display = "block";
});

submitBtn.addEventListener("click", () => {
  const personality = extrovertBtn.checked ? "extrovert" : "introvert";
  // Get answers from selected options

  let suggestions = [];
  if (personality === "extrovert") {
    suggestions = [
      "Sales Representative",
      "Event Planner",
      "Public Relations Specialist",
      "Teacher",
    ];
  } else {
    suggestions = [
      "Software Developer",
      "Graphic Designer",
      "Writer",
      "Data Analyst",
    ];
  }

  displaySuggestions(suggestions);
});

function displaySuggestions(suggestions) {
  suggestionsList.innerHTML = ""; // Clear previous suggestions
  suggestions.forEach((suggestion) => {
    const listItem = document.createElement("li");
    listItem.textContent = suggestion;
    suggestionsList.appendChild(listItem);
  });
}