// create the connections to the models
const sequelize = require('../config/connection');
const { Employee, Item } = require('../models');

// create the connections to the seed data
const employeeData = require('./employeeData.json');
const itemData = require('./itemData.json');

// seed function
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const employees = await Employee.bulkCreate(employeeData);

  const items = await Item.bulkCreate(itemData);

  process.exit(0);
};

seedDatabase();