exports.seed = function(knex) {
  return knex("steps")
    .del()
    .then(function() {
      return knex("steps").insert([
        {
          step_number: 1,
          instructions: "Follow instructions on box",
          recipe_id: 1
        },
        {
          step_number: 2,
          instructions: "Noodles + hot water",
          recipe_id: 2
        },
        {
          step_number: 3,
          instructions: "Follow instructions on box",
          recipe_id: 1
        }
      ]);
    });
};
