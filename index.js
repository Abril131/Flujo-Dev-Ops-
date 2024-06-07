const express = require('express');
const app = express();
const port = 3000;

app.get('/api/v1/soaa', (req, res) =>{
    res.send("Hello, Hola Docker y Nodejs");
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});