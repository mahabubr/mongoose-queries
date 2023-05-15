import express, { Application } from "express";
import cors from "cors";

import userRoutes from "./app/modules/user/user.route";

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", userRoutes); // Not happen that
app.use("/api/v1/user", userRoutes);

export default app;

// inserting a test data into mongodb
/*
	1 -> Interface
	2 -> Schema
	3 -> Model
	4 -> Database Query
 */

// Pattern => MVC, Modular

// Modular

/*
	-> Interface -> interface
	-> Schema & Model -> Model
	-> Route -> route
	-> Route Function -> controller
	-> Database Query -> Services
*/

// Route -> Controller -> Service
