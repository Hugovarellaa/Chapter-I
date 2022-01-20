const Database = require("./config");

const initdb = {
  async init() {
    const db = await Database();

    await db.exec(`CREATE TABLE IF NOT EXISTS rooms(
        id INTEGER PRIMARY KEY,
        pass TEXT 
    )`);

    await db.exec(`CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        read INT )`);

    await db.close();
  },
};

initdb.init();
