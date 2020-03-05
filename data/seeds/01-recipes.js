exports.seed = function(knex) {
  return knex("recipes")
    .del()
    .then(function() {
      return knex("recipes").insert([
        { name: "Mac & Cheese" },
        { name: "Ramen" }
      ]);
    });
};
