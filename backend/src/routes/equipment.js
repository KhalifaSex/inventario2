const express = require('express');
const router = express.Router();
const db = require('../models/equipment');

router.get('/', (req, res) => {
  db.all('SELECT * FROM equipment', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { name, pcs, maintenanceState, lastMaintenance, nextMaintenanceApprox, technician } = req.body;
  db.run(
    `INSERT INTO equipment (name, pcs, maintenanceState, lastMaintenance, nextMaintenanceApprox, technician)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [name, pcs, maintenanceState, lastMaintenance, nextMaintenanceApprox, technician],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

module.exports = router;
