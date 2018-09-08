DROP  DATABASE IF EXISTS meetMutt_db;

CREATE DATABASE meetMutt_db;

USE meetMutt_db;

CREATE TABLE animals(
	id INT NOT NULL AUTO_INCREMENT,
	animal TEXT NOT NULL,
	picture TEXT NOT NULL,
	min INT (2) NOT NULL,
	max INT (2) NOT NULL,
	reasons TEXT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR (45) NOT NULL,
	username VARCHAR (45) NOT NULL UNIQUE,
	email VARCHAR (45) NOT NULL UNIQUE,
	password VARCHAR (45) NOT NULL,
	PRIMARY KEY (id)
);

-- //this table will store our users points and what animal they're matched with
-- it will be a left join

CREATE TABLE usersScores(
id INT NOT NULL AUTO_INCREMENT,
score INT (2) NOT NULL,
PRIMARY KEY (id)
);
--
-- SELECT username
-- FROM users
-- LEFT JOIN usersScores;
