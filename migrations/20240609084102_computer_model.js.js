exports.up = function (knex) {
    return knex.schema.createTable('computer_model', (table) => {
        table.increments('id').primary();
        table.integer('computer_id').unsigned().references('computers.id');
        table.integer('model_id').unsigned().references('models.id');
        // Add any other columns specific to the joint table
        // (e.g., timestamps, additional data).
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('computer_model');
};
