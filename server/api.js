/* eslint-disable indent */
/* eslint-disable linebreak-style */

import { Router } from "express";

import { Connection } from "./db";

const router = new Router();

router.get("/", (_, res, next) => {
  Connection.connect((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: "Hello, Team!" });
  });
});

router.get("/questions", (_, res, next) => {
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

router.get("/comments/:id", (req, res, next) => {
  if (req.params.id) {
    const questionId = parseInt(req.params.id);
    Connection.query(
      "select * from comments where question_id = $1 order by id DESC",
      [questionId],
      (err, result) => {
        if (err) {
          return next(err);
        }
        res.status(200).json(result.rows);
      }
    );
  }
});

router.post("/question", (req, res, next) => {
  let title = req.body.title,
    context = req.body.context,
    email = req.body.email;
  let sql =
    "insert into questions (title, context,email)" + "values ($1,$2,$3) returning id";
  Connection.query(sql, [title, context,email], (err, result) => {
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

router.post("/newuser", (req, res, next) => {
  let userId = req.body.userId,
    email = req.body.email;

  let insertsql =
    "insert into users (userid, email)" + "values ($1,$2) returning id";

  Connection.query(insertsql, [userId, email], (err, result) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(result.rows);
  });
});
export default router;
