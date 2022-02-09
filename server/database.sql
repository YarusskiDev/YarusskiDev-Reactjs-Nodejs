create database user_panel;
use user_panel;

CREATE TABLE images (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    url VARCHAR(100) NOT NULL,
    path VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
	image_id INT UNSIGNED,
    CONSTRAINT fk_user_image FOREIGN KEY (image_id) REFERENCES users(id)
);
