CREATE DATABASE registation_db;

USE registration_db;

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);
