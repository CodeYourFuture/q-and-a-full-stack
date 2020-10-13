
import { Router } from "express";

import { Connection } from "./db";

const router = new Router();

router.get("/", (_, res, next) => {

	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		res.json({ message: "Hello, osman!" });
	});
});

router.get("/test", (_, res, next) => {

	Connection.query("select * from questions", (err,result) => {
		if (err) {
			return next(err);
		}
		res.json(result.rows);
	});
});

export default router;
