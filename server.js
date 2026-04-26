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
    const images = [];
    for (let i = 1; i <= 16; i++) {
        images.push({
            id: `img${i}`,
            url: `https://picsum.photos/seed/${i}/300/200`,
            fullUrl: `https://picsum.photos/seed/${i}/800/600`,
            title: `Slika ${i}`
        });
    }
    res.render('slike', { images: images });
});

app.listen(PORT, () => {
    console.log(`Server radi na portu ${PORT}`);
});
