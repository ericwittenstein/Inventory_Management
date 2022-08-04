// handle all rendering routes
const router = require("express").Router();

// route to render the table of employees from the db
router.get("/employees", async (req, res) => {
	try {
		db.query("QUERY TEXT GOES HERE", (res, fields) => {
			res.status(200).render("employeeLanding", { data: res });
		});
	} catch (error) {
		res.status(500).json(error);
	}
});

// route to render the table of items from the db
router.get("/items", async (req, res) => {
	try {
		db.query("QUERY TEXT GOES HERE", (res, fields) => {
			res.status(200).render("itemLanding", { data: res });
		});
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
