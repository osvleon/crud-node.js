require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001; 

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(PORT, () => {
  console.log(`Server is corredor en el puerto ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});