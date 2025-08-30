const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS equipment (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    pcs INTEGER,
    maintenanceState TEXT,
    lastMaintenance TEXT,
    nextMaintenanceApprox TEXT,
    technician TEXT
  )`);
});

module.exports = db;
