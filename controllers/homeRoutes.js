// handle all rendering routes
const router = require("express").Router();
const { Employee, Item } = require("../models");

// route to render the table of employees from the db
router.get("/employees", async (req, res) => {
	try {
		const emplData = await Employee.findAll();
		const newEmplData = res.json(emplData);
		res.status(200).render("employeeLanding", { data: newEmplData });
	} catch (error) {
		res.status(500).json(error);
	}
});

// route to render the table of items from the db
router.get("/items", async (req, res) => {
	try {
		const itemData = await Item.findAll();
		const newItemData = res.json(itemData);
		res.status(200).render("itemLanding", { data: newItemData });
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
