const fs = require('fs');

fs.readFile('data.csv', 'utf8', (err, data) => {
  if (err) return console.error('Error:', err);

  const lines = data.trim().split('\n');
  const subjects = lines[0].split(',').slice(1);
  const totals = Array(subjects.length).fill(0);
  const counts = lines.length - 1;

  for (let i = 1; i < lines.length; i++) {
    const scores = lines[i].split(',').slice(1).map(Number);
    scores.forEach((score, j) => totals[j] += score);
  }

  let result = `Total Students: ${counts}\n\n`;
  subjects.forEach((subj, i) => {
    const avg = (totals[i] / counts).toFixed(2);
    result += `${subj} Average: ${avg}\n`;
  });

  fs.writeFile('results.txt', result, err => {
    if (err) return console.error('Write Error:', err);
    console.log('Results saved to results.txt\n');
    console.log(result);
  });
});
