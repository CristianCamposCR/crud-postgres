CREATE DATABASE firstapp;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT 
);


INSERT INTO users(name, email) VALUES ('cristian', 'cristian@gmail.com'), ('yisma', 'yisma@gmail.com');