DROP  DATABASE IF EXISTS meetMutt_db;

CREATE DATABASE meetMutt_db;

USE meetMutt_db;

CREATE TABLE animals(
	id INT NOT NULL AUTO_INCREMENT,
	animal TEXT NOT NULL,
	picture TEXT NOT NULL,
	score INT (2),
	reasons TEXT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE questions(
	id INT NOT NULL AUTO_INCREMENT,
	q TEXT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE answers(
	id INT NOT NULL AUTO_INCREMENT,
	a TEXT NOT NULL,
	score INT NOT NULL,
	PRIMARY KEY (id)
);

-- would we have the questions and answers in different tables since there are 4 answers to every question? the questions are already created in an object in questionnaire.js.

-- How and where should we write the mysql query when the users score is tallied up?

