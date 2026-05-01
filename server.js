//LV3
const fs = require('fs');
const csv = require('csv-parser');


const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

app.get('/grafikon', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'grafikon.html')); 
});

app.get('/slike', (req, res) => {
    const folderPath = path.join(__dirname, 'public', 'images');
    const files = fs.readdirSync(folderPath);

    const images = files
        .filter(file => file.endsWith('.jpg') || file.endsWith('.png'))
        .map((file, index) => ({
            id: `img${index + 1}`,
            url: `/images/${file}`,       
            fullUrl: `/images/${file}`,   
            title: `Slika ${index + 1}`
        }));

    res.render('slike', { images });
});


//LV3
app.get('/filmovi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'filmovi.html'));
});

app.listen(PORT, () => {
    console.log(`Server radi na portu ${PORT}`);
});
