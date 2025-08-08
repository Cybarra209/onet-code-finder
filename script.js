
async function findONETCode() {
    const input = document.getElementById('jobInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');
    const response = await fetch('data/occupations.json');
    const occupations = await response.json();

    const found = occupations.find(job => job.title.toLowerCase() === input);
    if (found) {
        resultDiv.innerHTML = `<strong>Job:</strong> ${found.title}<br><strong>O*NET Code:</strong> ${found.code}`;
    } else {
        resultDiv.innerHTML = "No matching occupation found.";
    }
}
