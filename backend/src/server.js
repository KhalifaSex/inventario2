const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const equipmentRoutes = require('./routes/equipment');
const maintenanceRoutes = require('./routes/maintenance');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/equipment', equipmentRoutes);
app.use('/api/maintenance', maintenanceRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
