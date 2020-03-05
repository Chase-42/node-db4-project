exports.seed = function(knex) {
  return knex("recipe_ingredients")
    .del()
    .then(function() {
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 10 },
        { recipe_id: 1, ingredient_id: 1, quantity: 10 },
        { recipe_id: 1, ingredient_id: 1, quantity: 10 }
      ]);
    });
};
