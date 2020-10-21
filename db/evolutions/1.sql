CREATE TABLE Customers (
    id   INTEGER     NOT NULL,
    name VARCHAR(32) NOT NULL,
    primary key (id)
);

#DOWN

DROP TABLE Customers;
