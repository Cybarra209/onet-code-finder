let jobs = [];

async function loadJobs() {
  const res = await fetch('data/occupations.json');
  jobs = await res.json();
}

function matchJobs(input) {
  const text = input.toLowerCase();
  return jobs.filter(job =>
    job.title.toLowerCase().includes(text) ||
    job.description.toLowerCase().includes(text)
  );
}

function showResults(matches) {
  const results = document.getElementById("results");
  results.innerHTML = "";
  matches.forEach(job => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="code">${job.code}</div><div>${job.title}</div><div>${job.description}</div>`;
    results.appendChild(li);
  });
}

function search() {
  const jobInput = document.getElementById("jobInput").value;
  const descInput = document.getElementById("descInput").value;
  const combinedInput = jobInput + " " + descInput;
  const matches = matchJobs(combinedInput);
  showResults(matches);
}

document.addEventListener("DOMContentLoaded", () => {
  loadJobs();
  document.getElementById("jobInput").addEventListener("input", search);
  document.getElementById("descInput").addEventListener("input", search);
});