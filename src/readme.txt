#Gridiron Galaxy: A Quantum Leap into Football Data Management

## Description

This project aims to analyze investment trends in the startup industry. It utilizes HTML, CSS, and JavaScript for the frontend and Node.js for the backend.

This project is designed for football players, teams, and analysts, facilitating comprehensive analysis of player performance, game strategies, and transfer insights. By leveraging quantum technology, it utilizes HTML, CSS, and JavaScript technologies for the frontend and Node.js for the backend and PostgreSQL is used for Data Store(Database). 

## Table of Contents

- Installation
- Usage 
- Technologies Used

## Installation

1. Extract the files
2. Navigate to the project directory.
3. Install Node.js and PostgreSQL if not already installed.
4. Install dependencies using npm install.


## Usage

1. Start the backend server using node webapp.js.
2. For the UI Open the frontend by accessing the "index.html" file in a web browser.
3. Explore relations and some analysis Queries using NavBar.
4. Makesure run the server backend in using host&port:3000 http://localhost:3000.



## Technologies Used

- HTML
- CSS
- JavaScript
- NodeJs


## Installation and Setup for postgres sql

1. Database Software Installation

Install a compatible relational database management system  such as Postgresql (version 16 is used by us).

2. Database creation:

We create a database named "Football" new using postgres


--Creating Relations(Tables):--

Please use the create.sql file given which contains all the tables designed along with primary key and foreign key constraints designed

Go to "Query Tool" for  create.sql and run the queries.


--Loading the data to tables:--

Please use load.sql file to load all the data from the given CSV.We imported the data using below command

copy public.tablename from 'csv file path' with csv header;