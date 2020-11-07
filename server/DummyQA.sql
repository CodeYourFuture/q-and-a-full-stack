drop table if exists comments;
drop table if exists questions;
drop table if exists users;

CREATE TABLE users (
    id 		SERIAL PRIMARY KEY,
    userid         VARCHAR(200),
    email 	VARCHAR(120) NOT NULL UNIQUE
);

CREATE TABLE questions (
  id 		SERIAL PRIMARY KEY,
  email varchar(120) NOT NULL,
  title VARCHAR(150) NOT NULL,
  context TEXT NOT NULL,	
  question_date timestamp default current_timestamp,
  likes INTEGER NOT NULL default 0,
  views INTEGER default 0,
  foreign key (email) references users(email)
);

CREATE TABLE comments (
  id serial PRIMARY key,
  email varchar(120) NOT NULL,
  question_id INTEGER,
  comment TEXT NOT NULL,
  comment_date timestamp default current_timestamp,
  foreign key (question_id) references questions(id) On DELETE CASCADE,
  FOREIGN KEY (email) REFERENCES users(email)
);

