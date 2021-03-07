const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 4000;

app.get('/', async (req, res) => {
    res.json({ message: 'It is working.' })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
