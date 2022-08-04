// holds the routes for the api calls that will handle the items

// Packages
const router = require("express").Router();

// Item Model
const { Item } = require("../../models");

// Post route to create an employee
// /api/items
router.post("/", async (req, res) => {
    try {
        const itemData = await Item.create({ ...req.body });

        res.status(200).json(itemData);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});

module.exports = router;