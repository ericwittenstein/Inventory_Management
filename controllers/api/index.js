const router = require("express").Router();
const employeeRoutes = require("./employeesRoutes");
const itemRoutes = require("./itemsRoutes")

router.use('/employees', employeeRoutes);
router.use('/items', itemRoutes);

module.exports = router;