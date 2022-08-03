// holds the routes for the api calls that will handle the employees

// Packages
const router = require("express").Router();

// Employee Model
const { Employee } = require("../../models");

// Post route to create an employee
// /api/employees
router.post("/", async (req, res) => {
    try {
        const empData = await Employee.create({ ...req.body });

        res.status(200).json(empData);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});

module.exports = router;