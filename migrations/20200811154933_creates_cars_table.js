exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("VIN").unique();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.string("mileage").notNullable();
    tbl.text("transmission");
    tbl.boolean("status");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
