/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('models', (table) => {
            table.increments('id').primary();
            // table.string('serial').unique().notNullable();
            // table.json('batteryInfo');
            // table.json('builtInDevices');
            // table.json('interfaces');
            // table.json('display');
            // table.json('graphics');
            // table.json('generalInfo');
            // table.json('inputDevices');
            // table.json('memory');
            // table.json('miscellaneous');
            // table.json('network');
            // table.json('physical');
            // table.json('power');
            // table.json('storage');
            // table.json('warranty');
            // table.json('processor');
            // table.json('os');
            // table.json('quickSpecs');
            table.json('modelDetails');
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTableIfExists('models');
};
