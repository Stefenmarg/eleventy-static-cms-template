const Database = require("better-sqlite3");
const path = require("path");

module.exports = function () {
    const db = new Database(path.join(__dirname, "./application.db"));
    
    const tables = db.prepare(`
        SELECT name FROM sqlite_master 
        WHERE type='table'
    `).all();

    const data = {};
    for (const { name } of tables) {
        data[name] = db.prepare(`SELECT * FROM ${name}`).all();
    }

    db.close();
    return data;
};