const container = document.getElementById("reportsContainer");

// מצייר את כל הדוחות
function loadReports() {
  container.innerHTML = "";
  const reports = JSON.parse(localStorage.getItem("reports")) || [];

  reports.forEach(report => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = "report-" + report.id; // מזהה ייחודי לכל כרטיס

    card.innerHTML = `
      <h3>${report.target}</h3>
      <p><strong>Agent:</strong> ${report.agentName} (${report.agentCode})</p>
      <p>${report.information}</p>
      <small>${new Date(report.submissionTime).toLocaleString()}</small>
      <br><br>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;

    container.appendChild(card);

    // מחברים את הכפתורים לאירועים
    card.querySelector(".edit-btn").addEventListener("click", () => editReport(report.id));
    card.querySelector(".delete-btn").addEventListener("click", () => deleteReport(report.id));
  });
}

// עריכה
function editReport(id) {
  let reports = JSON.parse(localStorage.getItem("reports")) || [];
  const report = reports.find(r => r.id === id);
  if (!report) return;

  const newInfo = prompt("Edit information:", report.information);
  if (newInfo === null) return; // אם לחץ cancel

  report.information = newInfo;
  localStorage.setItem("reports", JSON.stringify(reports));

  loadReports(); // מעדכן את הדף מיד
}

// מחיקה
function deleteReport(id) {
  let reports = JSON.parse(localStorage.getItem("reports")) || [];
  reports = reports.filter(r => r.id !== id);
  localStorage.setItem("reports", JSON.stringify(reports));

  // מסיר מהדף מיידית
  const card = document.getElementById("report-" + id);
  if (card) card.remove();
}

// הפעלה ראשונית
loadReports();
