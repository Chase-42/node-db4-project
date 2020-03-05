exports.seed = function(knex) {
  return knex("ingredients")
    .del()
    .then(function() {
      return knex("ingredients").insert([
        { ingredient: "Box of Mac & Cheese" },
        { ingredient: "Packet of Ramen" },
        { ingredient: "Hot water" }
      ]);
    });
};
