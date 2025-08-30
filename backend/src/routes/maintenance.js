const express = require('express');
const router = express.Router();
const db = require('../models/maintenanceLog');

router.get('/', (req, res) => {
  db.all('SELECT * FROM maintenance_log', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { equipmentId, maintenanceDate, performedBy, status, notes } = req.body;
  db.run(
    `INSERT INTO maintenance_log (equipmentId, maintenanceDate, performedBy, status, notes)
     VALUES (?, ?, ?, ?, ?)`,
    [equipmentId, maintenanceDate, performedBy, status, notes],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

module.exports = router;
