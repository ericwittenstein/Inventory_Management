// handle all rendering routes
const router = require("express").Router();

// route to render the table of employees from the db
router.get("/employees", async (req, res) => {
	db.query("QUERY TEXT GOES HERE", (error, res, fields) => {
		if (error) {
			res.status(500);
			res.send(error);
		} else {
			res.status(200);
			res.render("employeeLanding", { data: res });
		}
	});
});

// route to render the table of items from the db
router.get("/items", async (req, res) => {
	db.query("QUERY TEXT GOES HERE", (error, res, fields) => {
		if (error) {
			res.status(500);
			res.send(error);
		} else {
			res.status(200);
			res.render("itemLanding", { data: res });
		}
	});
});

module.exports = router;
