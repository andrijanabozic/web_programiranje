fetch('movies.csv')
  .then(res => res.text())
  .then(csv => {
    const data = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true
    });

    render(data.data);
  });

function render(filmovi) {
  const tbody = document.getElementById('tbody');
  tbody.innerHTML = '';

  filmovi.forEach(film => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${film.Naslov}</td>
      <td>${film.Zanr}</td>
      <td>${film.Godina}</td>
      <td>${film.Trajanje_min}</td>
      <td>${film.Ocjena}</td>
      <td>${film.Rezisery}</td>
      <td>${film.Zemlja_porijekla}</td>
    `;

    tbody.appendChild(row);
  });
}