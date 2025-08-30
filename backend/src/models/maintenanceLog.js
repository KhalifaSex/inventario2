const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS maintenance_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    equipmentId INTEGER,
    maintenanceDate TEXT,
    performedBy TEXT,
    status TEXT,
    notes TEXT,
    FOREIGN KEY(equipmentId) REFERENCES equipment(id)
  )`);
});

module.exports = db;
