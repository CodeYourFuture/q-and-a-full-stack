/* eslint-disable linebreak-style */

import { Router } from "express";

import { Connection } from "./db";

const router = new Router();

router.get("/", (_, res, next) => {
  Connection.connect((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: "Hello!" });
  });
});

router.get("/test", (_, res, next) => {
  Connection.query(
    "select * from questions order by id DESC",
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.status(200).json(result.rows);
    }
  );
});

router.post("/question", (req, res, next) => {
  let title = req.body.title,
    context = req.body.context;
  let sql =
    "insert into questions (title, context)" + "values ($1,$2) returning id";
  Connection.query(sql, [title, context], (err, result) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(result.rows);
  });
});

router.post("/comment", (req, res, next) => {
  let questionId = req.body.questionId,
    comment = req.body.comment;
  let sql =
    "insert into comments (question_id, comment)" +
    "values ($1,$2) returning id";
  Connection.query(sql, [questionId, comment], (err, result) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(result.rows);
  });
});

export default router;
