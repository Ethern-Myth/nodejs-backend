const express = require("express");
const app = express();
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const Run = require("./migrations/migration");
const router = require("./routes/routes");

app.use(
	cors({
		origin: "*",
	})
);

app.use(express.urlencoded());
app.use(express.json());
app.use(compression());
app.use(helmet());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(5000, function () {
	console.log(`Server Started: http://localhost:5000/swagger`);
	Run();
});

app.use("/api/users", router);
