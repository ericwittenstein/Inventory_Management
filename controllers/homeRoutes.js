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
		// get data
		const emplData = await Employee.findAll();

		// serialize data for template
		const employees = emplData.map((employee) =>
			employee.get({ plain: true })
		);

		// send serialized data to template
		res.status(200);
		res.render("employeeLanding", {
			employees,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// route to render the table of items from the db
router.get("/items", async (req, res) => {
	try {
		// get data
		const itemData = await Item.findAll();

		// serialize data for template
		const items = itemData.map((item) => item.get({ plain: true }));

		// send serialized data to template
		res.status(200);
		res.render("itemLanding", {
			items,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
