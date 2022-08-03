// initial connection imports
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");

// express
const app = express();
const PORT = process.env.PORT || 3001;

// handlebars
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// express connections
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening"));
});
