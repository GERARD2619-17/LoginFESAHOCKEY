-- Active: 1696346674221@@127.0.0.1@3306@nodelogin


 drop database if exixts nodelogin;
 CREATE DATABASE IF NOT nodelogin;
use nodelogin;

 CREATE Table IF NOT EXISTS users (
    email VARCHAR(100) NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL  
);