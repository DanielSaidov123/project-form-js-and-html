const form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

const report = {
  id: Date.now(), // מזהה ייחודי
  agentName: document.getElementById("name").value,
  agentCode: document.getElementById("password").value,
  target: document.getElementById("target").value,
  information: document.getElementById("textarea").value,
  submissionTime: new Date().toISOString(),
};

 // שליפת דוחות קיימים
  const reports = JSON.parse(localStorage.getItem("reports")) || [];

  // הוספה
  reports.push(report);

  // שמירה
  localStorage.setItem("reports", JSON.stringify(reports));

  form.reset();
  alert("Report submitted successfully");
});