const express = require('express');
const app = express();
const PORT= process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('This is my world!');
});

app.get('/me', function (req, res) {
    res.send('And I\'m the Best');
});

app.listen(PORT, function () {
    console.log('Example app listening on port',PORT);
});