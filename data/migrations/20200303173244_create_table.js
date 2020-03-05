exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments("id");
      table
        .string("name", 128)
        .notNullable()
        .unique();
    })
    .createTable("steps", table => {
      table.increments("id");
      table.integer("step_number").notNullable();
      table.string("instructions", 255).notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", table => {
      table.increments("id");
      table.string("ingredient", 128).notNullable();
    })
    .createTable("recipe_ingredients", table => {
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
