CREATE DATABASE animals_db;

USE animals_db;

CREATE TABLE animals(
	id INT NOT NULL AUTO_INCREMENT,
	animal TEXT NOT NULL,
  breed TEXT NOT NULL,
  points INT (2),
	PRIMARY KEY (id)
);
