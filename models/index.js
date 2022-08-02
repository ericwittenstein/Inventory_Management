const Employee = require("./Employee");
const Item = require("./Item");

Employee.hasMany(Item, {
	foreignKey: "employee_id",
});

module.exports = { Employee, Item };
