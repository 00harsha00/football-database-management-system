# Gridiron Galaxy: A Quantum Leap into Football Data Management

## Description

**Gridiron Galaxy** is a Football Database Management System designed for football players, teams, analysts, and sponsors. The system facilitates comprehensive analysis of player performance, game strategies, and transfer insights. It leverages HTML, CSS, and JavaScript for the frontend, Node.js for the backend, and PostgreSQL for data storage. This project allows teams and sponsors to make informed decisions through insightful queries and data management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Database Setup](#database-setup)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-Time Football Data**: Retrieves and stores real-time football data from Transfermarkt.
- **BCNF Database Normalization**: Reduces redundancy by 30% and improves data accuracy.
- **Efficient Query Processing**: Optimized queries with a 20% reduction in processing time.
- **Frontend Interface**: Designed with HTML, CSS, and JavaScript to enable user interaction with the system.
- **Team and Player Insights**: Generate detailed insights into team performance and player market value for sponsors and teams.
  
## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Version Control**: Git and GitHub
- **API**: Transfermarkt API (for real-time data)

## Installation

### Prerequisites

- Install [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm)
- Install [PostgreSQL](https://www.postgresql.org/download/)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/football-database-management-system.git
2. Navigate to the project directory
cd football-database-management-system

3. Install dependencies
npm install

4. Set up PostgreSQL database
  i. Create a PostgreSQL database named 'Football'.
  ii. Use the provided 'create.sql' script to create the necessary tables:
  iii.  Open PostgreSQL Query Tool, load 'create.sql', and run the queries.

#Load data into the tables using the 'load.sql' script.
#Example: COPY public.tablename FROM '/path/to/csvfile.csv' WITH CSV HEADER;

5. Start the backend server
node webapp.js

6. Access the frontend by opening 'index.html' in your web browser
#Ensure the backend server is running at http://localhost:3000
