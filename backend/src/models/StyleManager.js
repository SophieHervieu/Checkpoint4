const AbstractManager = require("./AbstractManager");

class StyleManager extends AbstractManager {
  constructor() {
    super({ table: "Style" });
  }

  findStyle() {
    return this.database.query(`select * from ${this.table}`);
  }

  update(style) {
    return this.database.query(
      `update ${this.table} set style = ? WHERE id = ?`,
      [style.style]
    );
  }

  add(style) {
    return this.database.query(`insert into ${this.table} (style) values (?)`, [
      style.style,
    ]);
  }

  deleteStyle(styleId) {
    return this.database.query(`DELETE FROM ${this.table} WHERE style_id = ?`, [
      styleId,
    ]);
  }
}

module.exports = StyleManager;
