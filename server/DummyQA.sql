drop table if exists users;
drop table if exists comments;
drop table if exists questions;

CREATE TABLE users (
    id 		SERIAL PRIMARY KEY,
    userid           VARCHAR(200) ,
    displayName       VARCHAR(100),
    email 	VARCHAR(120) NOT NULL,
  
);

CREATE TABLE questions (
  id 		SERIAL PRIMARY KEY,
  user_id INTEGER,
  title VARCHAR(150) NOT NULL,
  context TEXT NOT NULL,	
  question_date timestamp default current_timestamp
  foreign key (user_id) references users(id)
);

CREATE TABLE comments (
  id serial PRIMARY key,
  user_id INTEGER,
  question_id INTEGER,
  comment TEXT NOT NULL,
  comment_date timestamp default current_timestamp,
  foreign key (question_id) references questions(id)
  FOREIGN KEY (user_id) REFERENCES users(id)
);

