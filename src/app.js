const express = require('express');
require('dotenv').config();
const app = express();
const sequelize = require('./config/db');

app.use(express.json());

app.use('/api/cursos', require('./routes/cursoRoutes'));
app.use('/api/historias', require('./routes/historiasRoutes'));

sequelize.sync().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}).catch(error => console.error('Error al sincronizar con la base de datos:', error));
