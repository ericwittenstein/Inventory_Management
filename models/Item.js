// items table
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Item extends Model {}

// item has id, item name, item description, a checked-in boolean to indicate whether its in the warehouse, and a can-be-null employee id that only needs to be populated if the item is checked out
Item.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		item_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		item_description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		item_checked_in: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
		employee_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: "employee",
				key: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		underscored: true,
		modelName: "item",
	}
);

module.exports = Item;
