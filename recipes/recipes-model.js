const db = require("../data/db-config");

function getRecipes() {
  return db("recipes");
}
function getShoppingList(id) {
  return db("ingredients")
    .where({ "ingredients.ingredient_id": id })
    .first();
}
function getInstructions(id) {
  return db("steps")
    .join("recipes", "recipes.id", "steps.recipes_id")
    .select("steps.id", "recipes.recipes_id, steps.instructions")
    .where("recipes_id", id);
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
