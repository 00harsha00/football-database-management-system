const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Football',
  password: 'postgres123',
  port: 8888, // PostgreSQL default port
});

////////******************players_start*********************
// Route for fetching players data
// Route for fetching players data
app.get('/players', async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    if (isNaN(page) || page <= 0) {
      page = 1; // Default to the first page if page is not a valid number or less than or equal to 0
    }
    const offset = (page - 1) * 100; // Calculate offset based on the page number
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM players LIMIT 100 OFFSET $1', [offset]);
    const data = result.rows;
    const columns = Object.keys(data[0]); // Extract column names
    client.release();

    // Render players data as an HTML table
    let html = '<!DOCTYPE html>';
    html += '<html lang="en">';
    html += '<head>';
    html += '<meta charset="UTF-8">';
    html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    html += '<title>Players Data</title>';
    html += '<style>';
    html += 'table { border-collapse: collapse; }';
    html += 'th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }';
    html += '</style>';
    html += '</head>';
    html += '<body>';
    html += '<h1>Players Data</h1>';
    html += '<div style="overflow-x: auto; overflow-y: auto; max-height: 400px;">'; // Container with both vertical and horizontal scrollbars
    html += '<table>';
    html += '<thead><tr>';
    columns.forEach(column => {
      html += `<th>${column}</th>`;
    });
    html += '</tr></thead>';
    html += '<tbody>';
    if (data.length === 0) {
      html += '<tr><td colspan="' + columns.length + '">No more rows to fetch</td></tr>';
    } else {
      data.forEach(row => {
        html += '<tr>';
        columns.forEach(column => {
          html += `<td>${row[column]}</td>`;
        });
        html += '</tr>';
      });
    }
    html += '</tbody>';
    html += '</table>';
    html += '</div>'; // End of scrollable container

    // Add pagination buttons
    html += `<div style="margin-top: 10px;">`;
    if (page > 1) {
      html += `<a href="/players?page=${page - 1}">&lt; Previous</a>`;
    }
    if (data.length === 100) {
      html += ` | <a href="/players?page=${page + 1}">Next &gt;</a>`;
    }
    html += `</div>`;

    html += '</body>';
    html += '</html>';

    res.send(html);
  } catch (error) {
    console.error('Error fetching players data:', error);
    res.status(500).json({ error: 'Error fetching players data' });
  }
});
///************players - End ***************************

//*********************clubs - start*******************
// Route for fetching players data
app.get('/clubs', async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    if (isNaN(page) || page <= 0) {
      page = 1; // Default to the first page if page is not a valid number or less than or equal to 0
    }
    const offset = (page - 1) * 100; // Calculate offset based on the page number
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM clubs LIMIT 100 OFFSET $1', [offset]);
    const data = result.rows;
    const columns = Object.keys(data[0]); // Extract column names
    client.release();

    // Render players data as an HTML table
    let html = '<!DOCTYPE html>';
    html += '<html lang="en">';
    html += '<head>';
    html += '<meta charset="UTF-8">';
    html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    html += '<title>Clubs Data</title>';
    html += '<style>';
    html += 'table { border-collapse: collapse; }';
    html += 'th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }';
    html += '</style>';
    html += '</head>';
    html += '<body>';
    html += '<h1>Clubs Data</h1>';
    html += '<div style="overflow-x: auto; overflow-y: auto; max-height: 400px;">'; // Container with both vertical and horizontal scrollbars
    html += '<table>';
    html += '<thead><tr>';
    columns.forEach(column => {
      html += `<th>${column}</th>`;
    });
    html += '</tr></thead>';
    html += '<tbody>';
    if (data.length === 0) {
      html += '<tr><td colspan="' + columns.length + '">No more rows to fetch</td></tr>';
    } else {
      data.forEach(row => {
        html += '<tr>';
        columns.forEach(column => {
          html += `<td>${row[column]}</td>`;
        });
        html += '</tr>';
      });
    }
    html += '</tbody>';
    html += '</table>';
    html += '</div>'; // End of scrollable container

    // Add pagination buttons
    html += `<div style="margin-top: 10px;">`;
    if (page > 1) {
      html += `<a href="/clubs?page=${page - 1}">&lt; Previous</a>`;
    }
    if (data.length === 100) {
      html += ` | <a href="/clubs?page=${page + 1}">Next &gt;</a>`;
    }
    html += `</div>`;

    html += '</body>';
    html += '</html>';

    res.send(html);
  } catch (error) {
    console.error('Error fetching clubs data:', error);
    res.status(500).json({ error: 'Error fetching clubs data' });
  }
});
//******************clubs - End**********************

//*******************Games- start***********************
// Route for fetching players data
app.get('/games', async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    if (isNaN(page) || page <= 0) {
      page = 1; // Default to the first page if page is not a valid number or less than or equal to 0
    }
    const offset = (page - 1) * 100; // Calculate offset based on the page number
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM games LIMIT 100 OFFSET $1', [offset]);
    const data = result.rows;
    const columns = Object.keys(data[0]); // Extract column names
    client.release();

    // Render players data as an HTML table
    let html = '<!DOCTYPE html>';
    html += '<html lang="en">';
    html += '<head>';
    html += '<meta charset="UTF-8">';
    html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    html += '<title>Games Data</title>';
    html += '<style>';
    html += 'table { border-collapse: collapse; }';
    html += 'th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }';
    html += '</style>';
    html += '</head>';
    html += '<body>';
    html += '<h1>Games Data</h1>';
    html += '<div style="overflow-x: auto; overflow-y: auto; max-height: 400px;">'; // Container with both vertical and horizontal scrollbars
    html += '<table>';
    html += '<thead><tr>';
    columns.forEach(column => {
      html += `<th>${column}</th>`;
    });
    html += '</tr></thead>';
    html += '<tbody>';
    if (data.length === 0) {
      html += '<tr><td colspan="' + columns.length + '">No more rows to fetch</td></tr>';
    } else {
      data.forEach(row => {
        html += '<tr>';
        columns.forEach(column => {
          html += `<td>${row[column]}</td>`;
        });
        html += '</tr>';
      });
    }
    html += '</tbody>';
    html += '</table>';
    html += '</div>'; // End of scrollable container

    // Add pagination buttons
    html += `<div style="margin-top: 10px;">`;
    if (page > 1) {
      html += `<a href="/games?page=${page - 1}">&lt; Previous</a>`;
    }
    if (data.length === 100) {
      html += ` | <a href="/games?page=${page + 1}">Next &gt;</a>`;
    }
    html += `</div>`;

    html += '</body>';
    html += '</html>';

    res.send(html);
  } catch (error) {
    console.error('Error fetching games data:', error);
    res.status(500).json({ error: 'Error fetching games data' });
  }
});

/////*******************games- End *******************

//////////*******competitions - start **********************
// Route for fetching players data
app.get('/competitions', async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    if (isNaN(page) || page <= 0) {
      page = 1; // Default to the first page if page is not a valid number or less than or equal to 0
    }
    const offset = (page - 1) * 100; // Calculate offset based on the page number
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM competitions LIMIT 100 OFFSET $1', [offset]);
    const data = result.rows;
    const columns = Object.keys(data[0]); // Extract column names
    client.release();

    // Render players data as an HTML table
    let html = '<!DOCTYPE html>';
    html += '<html lang="en">';
    html += '<head>';
    html += '<meta charset="UTF-8">';
    html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    html += '<title>Competitions Data</title>';
    html += '<style>';
    html += 'table { border-collapse: collapse; }';
    html += 'th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }';
    html += '</style>';
    html += '</head>';
    html += '<body>';
    html += '<h1>Competitions Data</h1>';
    html += '<div style="overflow-x: auto; overflow-y: auto; max-height: 400px;">'; // Container with both vertical and horizontal scrollbars
    html += '<table>';
    html += '<thead><tr>';
    columns.forEach(column => {
      html += `<th>${column}</th>`;
    });
    html += '</tr></thead>';
    html += '<tbody>';
    if (data.length === 0) {
      html += '<tr><td colspan="' + columns.length + '">No more rows to fetch</td></tr>';
    } else {
      data.forEach(row => {
        html += '<tr>';
        columns.forEach(column => {
          html += `<td>${row[column]}</td>`;
        });
        html += '</tr>';
      });
    }
    html += '</tbody>';
    html += '</table>';
    html += '</div>'; // End of scrollable container

    // Add pagination buttons
    html += `<div style="margin-top: 10px;">`;
    if (page > 1) {
      html += `<a href="/competitions?page=${page - 1}">&lt; Previous</a>`;
    }
    if (data.length === 100) {
      html += ` | <a href="/competitions?page=${page + 1}">Next &gt;</a>`;
    }
    html += `</div>`;

    html += '</body>';
    html += '</html>';

    res.send(html);
  } catch (error) {
    console.error('Error fetching competitions data:', error);
    res.status(500).json({ error: 'Error competitions players data' });
  }
});
////*******************competitions - End***************

/////*******************Main Queries Starts*******************
app.get('/select', async (req, res) => {
  try {
    const result = await pool.query('SELECT p.name, c.name AS current_club FROM players p INNER JOIN clubs c ON p.current_club_id = c.club_id');
    const data = result.rows;
    const columns = Object.keys(data[0]);
    
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Select Query Result</title>
<style>
table { border-collapse: collapse; }
th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
</style>
</head>
<body>
<h1>Select Query Result</h1>
<p>Retrieve all players along with their current clubs using JOIN </p>
<div style="overflow-x: auto; overflow-y: auto; max-height: 400px;">`;
    html += '<table>';
    html += '<thead><tr>';
    columns.forEach(column => {
      html += `<th>${column}</th>`;
    });
    html += '</tr></thead>';
    html += '<tbody>';
    if (data.length === 0) {
      html += `<tr><td colspan="${columns.length}">No data available</td></tr>`;
    } else {
      data.forEach(row => {
        html += '<tr>';
        columns.forEach(column => {
          html += `<td>${row[column]}</td>`;
        });
        html += '</tr>';
      });
    }
    html += '</tbody>';
    html += '</table>';
    html += '</div>';
    html += '</body>';
    html += '</html>';

    res.send(html);
  } catch (error) {
    console.error('Error executing SELECT query:', error);
    res.status(500).json({ error: 'Error executing SELECT query' });
  }
});

app.get('/groupBy', async (req, res) => {
  try {
    const result = await pool.query('SELECT player_id, COUNT(*) AS num_appearances FROM appearances GROUP BY player_id');
    const data = result.rows;
    const columns = Object.keys(data[0]);
    
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GroupBy Query Result</title>
<style>
table { border-collapse: collapse; }
th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
</style>
</head>
<body>
<h1>GroupBy Query Result</h1>
<p>Retrieve the total number of appearances per player:</p>
<div style="overflow-x: auto; overflow-y: auto; max-height: 400px;">`;
    html += '<table>';
    html += '<thead><tr>';
    columns.forEach(column => {
      html += `<th>${column}</th>`;
    });
    html += '</tr></thead>';
    html += '<tbody>';
    if (data.length === 0) {
      html += `<tr><td colspan="${columns.length}">No data available</td></tr>`;
    } else {
      data.forEach(row => {
        html += '<tr>';
        columns.forEach(column => {
          html += `<td>${row[column]}</td>`;
        });
        html += '</tr>';
      });
    }
    html += '</tbody>';
    html += '</table>';
    html += '</div>';
    html += '</body>';
    html += '</html>';

    res.send(html);
  } catch (error) {
    console.error('Error executing GroupBy query:', error);
    res.status(500).json({ error: 'Error executing GroupBy query' });
  }
});

app.get('/orderBy', async (req, res) => {
  try {
    const result = await pool.query('SELECT p.name, p.highest_market_value_in_eur FROM players p JOIN (SELECT DISTINCT highest_market_value_in_eur FROM players ORDER BY highest_market_value_in_eur DESC LIMIT 5) AS top_market_values ON p.highest_market_value_in_eur = top_market_values.highest_market_value_in_eur');
    const data = result.rows;
    const columns = Object.keys(data[0]);
    
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OrderBy Query Result</title>
<style>
table { border-collapse: collapse; }
th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
</style>
</head>
<body>
<h1>OrderBy Query Result</h1>
<p>Retrieve the top 5 players with the highest market value: </p>
<div style="overflow-x: auto; overflow-y: auto; max-height: 400px;">`;
    html += '<table>';
    html += '<thead><tr>';
    columns.forEach(column => {
      html += `<th>${column}</th>`;
    });
    html += '</tr></thead>';
    html += '<tbody>';
    if (data.length === 0) {
      html += `<tr><td colspan="${columns.length}">No data available</td></tr>`;
    } else {
      data.forEach(row => {
        html += '<tr>';
        columns.forEach(column => {
          html += `<td>${row[column]}</td>`;
        });
        html += '</tr>';
      });
    }
    html += '</tbody>';
    html += '</table>';
    html += '</div>';
    html += '</body>';
    html += '</html>';

    res.send(html);
  } catch (error) {
    console.error('Error executing OrderBy query:', error);
    res.status(500).json({ error: 'Error executing OrderBy query' });
  }
});

app.get('/join', async (req, res) => {
  try {
    const result = await pool.query('SELECT c.club_id, c.name AS club_name, CAST(AVG(EXTRACT(YEAR FROM AGE(p.date_of_birth))) AS INT) AS avg_age FROM clubs c JOIN players p ON c.club_id = p.current_club_id GROUP BY c.club_id, c.name');
    const data = result.rows;
    const columns = Object.keys(data[0]);
    
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Join Query Result</title>
<style>
table { border-collapse: collapse; }
th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
</style>
</head>
<body>
<h1>Join Query Result</h1>
<p>Displaying average age of players in each club: </p>
<div style="overflow-x: auto; overflow-y: auto; max-height: 400px;">`;
    html += '<table>';
    html += '<thead><tr>';
    columns.forEach(column => {
      html += `<th>${column}</th>`;
    });
    html += '</tr></thead>';
    html += '<tbody>';
    if (data.length === 0) {
      html += `<tr><td colspan="${columns.length}">No data available</td></tr>`;
    } else {
      data.forEach(row => {
        html += '<tr>';
        columns.forEach(column => {
          html += `<td>${row[column]}</td>`;
        });
        html += '</tr>';
      });
    }
    html += '</tbody>';
    html += '</table>';
    html += '</div>';
    html += '</body>';
    html += '</html>';

    res.send(html);
  } catch (error) {
    console.error('Error executing Join query:', error);
    res.status(500).json({ error: 'Error executing Join query' });
  }
});
/////////////////////////**********Main Query Ends**************

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

