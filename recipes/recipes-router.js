const express = require("express");

const db = require("./recipes-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  db.getRecipes()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/:id/shoppinglist", (req, res, next) => {
  const { id } = req.params;

  db.getShoppingList(id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/:id/instructions", (req, res, next) => {
  const { id } = req.params;

  db.getInstructions(id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
