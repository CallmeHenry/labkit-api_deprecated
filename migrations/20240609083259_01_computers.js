/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('computers', (table) => {
            table.increments('id').primary();
            table.string('serial').unique().notNullable();
            table.string('model').notNullable();
            table.string('brand').notNullable();
            table.string('processor').notNullable();
            table.string('ram').notNullable();
            table.string('storage').notNullable();
            table.string('os').notNullable();
            table.string('screen').notNullable();
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
