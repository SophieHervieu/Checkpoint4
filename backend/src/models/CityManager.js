const AbstractManager = require("./AbstractManager");

class CityManager extends AbstractManager {
  constructor() {
    super({ table: "City" });
  }

  findCity() {
    return this.database.query(`select * from  ${this.table}`);
  }

  update(city) {
    return this.database.query(
      `update ${this.table} set city = ? WHERE id = ?`,
      [city.city]
    );
  }

  add(city) {
    return this.database.query(`insert into ${this.table} (city) values (?)`, [
      city.city,
    ]);
  }
}

module.exports = CityManager;
