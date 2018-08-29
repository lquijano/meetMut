CREATE DATABASE animals_db;

USE animals_db;

CREATE TABLE animals(
	id INT NOT NULL AUTO_INCREMENT,
	animal TEXT NOT NULL,
	picture TEXT NOT NULL, 
	min INT NOT NULL,
	max INT NOT NULL,
	reasons TEXT NOT NULL,
	PRIMARY KEY (id)
);
