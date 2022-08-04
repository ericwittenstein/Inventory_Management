// handle all rendering routes
const router = require("express").Router();
const { Employee, Item } = require("../models");

// route to render the homepage
router.get("/", async (req, res) => {
	res.render("homepage");
});

// route to render the add employee page
router.get("/employee_add", async (req, res) => {
	res.render("employee_create");
});

// route to render the table of employees from the db
router.get("/employees", async (req, res) => {
	try {
		const emplData = await Employee.findAll();
		// const newEmplData = res.json(emplData);
		res.status(200);
		return res.render("employeeLanding", { data: emplData });
	} catch (error) {
		res.status(500).json(error);
	}
});

// route to render the table of items from the db
router.get("/items", async (req, res) => {
	try {
		const itemData = await Item.findAll();
		// const newItemData = res.json(itemData);
		res.status(200);
		return res.render("itemLanding", { data: itemData });
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
