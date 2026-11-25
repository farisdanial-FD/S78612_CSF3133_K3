function generateTable() {
  const rows = document.getElementById("rows").valueAsNumber;
  const columns = document.getElementById("columns").valueAsNumber;

  if (!Number.isInteger(rows) || !Number.isInteger(columns) ||
      rows < 1 || columns < 1 || rows > 50 || columns > 50) {
    alert("Please enter whole numbers from 1 to 50 for rows and columns.");
    return;
  }

  let tableHTML = '<table aria-label="Multiplication table">';
  for (let i = 1; i <= rows; i++) {
    tableHTML += "<tr>";
    for (let j = 1; j <= columns; j++) {
      tableHTML += `<td>${i * j}</td>`;
    }
    tableHTML += "</tr>";
  }
  tableHTML += "</table>";

  document.getElementById("tableContainer").innerHTML = tableHTML;
}
