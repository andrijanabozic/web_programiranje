const express = require('express');
const path = require('path');
const app = express();

// Ključno za Railway (Zadatak 2)
const PORT = process.env.PORT || 3000;

// Postavljanje EJS-a (Zadatak 3)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Posluživanje statičkih datoteka (CSS, slike) iz public mape
app.use(express.static(path.join(__dirname, 'public')));

// Rute za Zadatak 1 (index i grafikon)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/grafikon', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'grafikon.html'));
});

// Ruta za Zadatak 3 (Galerija - slike.ejs)
app.get('/slike', (req, res) => {
    // Podaci koji se šalju u EJS (možeš dodati svoje slike ovdje)
    const images = [];
    for (let i = 1; i <= 16; i++) {
        images.push({
            id: `img${i}`,
            url: `https://picsum.photos{i}`,
            fullUrl: `https://picsum.photos{i}`,
            title: `Slika ${i}`
        });
    }
    res.render('slike', { images: images });
});

// Pokretanje servera (Zadatak 2)
app.listen(PORT, () => {
    console.log(`Server radi na portu ${PORT}`);
});
