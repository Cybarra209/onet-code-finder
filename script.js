let occupations = [];

fetch('data/occupations.json')
  .then(response => response.json())
  .then(data => {
    occupations = data;
  });

function searchJobs() {
  const input = document.getElementById('jobInput').value.toLowerCase();
  const descInput = document.getElementById('descInput').value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  const matches = occupations.filter(job => {
    return job.title.toLowerCase().includes(input) || (descInput && job.description.toLowerCase().includes(descInput));
  });

  if (matches.length === 0) {
    resultsDiv.innerHTML = '<p>No matches found.</p>';
  } else {
    matches.forEach(job => {
      resultsDiv.innerHTML += `
        <div class="result-item">
          <div class="title">${job.title}</div>
          <div class="code">O*NET Code: ${job.code}</div>
          <div class="desc">${job.description}</div>
        </div>`;
    });
  }
}