const AbstractManager = require("./AbstractManager");

class TattooArtistManager extends AbstractManager {
  constructor() {
    super({ table: "tattooartist" });
  }

  findTattooArtist() {
    return this.database.query(`select * from  ${this.table}`);
  }

  add(tattooArtist) {
    return this.database.query(
      `insert into ${this.table} (Name, description) values (?, ?)`,
      [tattooArtist.Name, tattooArtist.description]
    );
  }

  insertTaInCity(tattooartistHasCity) {
    return this.database.query(
      `insert into tattooartist_has_city (tattooartist_id, city_id) values (?, ?)`,
      [(tattooartistHasCity.tattooartist_id, tattooartistHasCity.city_id)]
    );
  }

  insertTaInStyle(tattooartistHasStyle) {
    return this.database.query(
      `insert into tattooartist_has_style (tattooartist_id, style_id) values (?, ?)`,
      [tattooartistHasStyle.tattooartist_id, tattooartistHasStyle.style_id]
    );
  }

  update(tattooArtist) {
    return this.database.query(
      `update ${this.table} set Name = ?, description = ? WHERE id = ?`,
      [tattooArtist.name, tattooArtist.description, tattooArtist.id]
    );
  }
}

module.exports = TattooArtistManager;
