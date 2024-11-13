const express = require('express');
require('dotenv').config();
const app = express();
const sequelize = require('./config/db');

app.use(express.json());

app.use('/api/institution', require('./routes/institutionRoutes'));
app.use('/api/history', require('./routes/historyRoutes'));
app.use('/api/speciality', require('./routes/specialityRoute'));

sequelize.sync().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}).catch(error => console.error('Error al sincronizar con la base de datos:', error));
