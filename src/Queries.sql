--inserting into players relation
INSERT INTO players (player_id, first_name, last_name, name, last_season, current_club_id, player_code, country_of_birth, city_of_birth, country_of_citizenship, date_of_birth, sub_position, position, foot, height_in_cm, market_value_in_eur, highest_market_value_in_eur, contract_expiration_date, agent_name, image_url, url, current_club_domestic_competition_id, current_club_name)
VALUES (1, 'DM', 'QL', 'DM QL', 2024, 2239, 'JD001', 'USA', 'New York', 'USA', '1990-05-15', 'Forward', 'Striker', 'Right', 180, 5000000.00, 6000000.00, '2025-05-15', 'Agent Smith', 'https://example.com/john_doe.jpg', 'https://example.com/john_doe_profile', 'PL', 'Manchester United');

--updating the players relation
UPDATE players
SET first_name = 'MM'
WHERE first_name = 'DM';

--retriving the data in players relation
select * from players
where player_id = 1

--deleting the records from the players relation
DELETE FROM players
WHERE player_id = 1;

-------------------------------------------------------------------------------
--inserting values into clubs relation
INSERT INTO clubs (club_id, club_code, name, domestic_competition_id, squad_size, average_age, foreigners_number, foreigners_percentage, national_team_players, stadium_name, stadium_seats, net_transfer_record, last_season, url)
VALUES (1, 'DMWL', 'Database QL', 'BE1', 25, 27.5, 10, 40.0, 5, 'Old Trafford', 75000, 'Positive', 2023, 'https://www.manutd.com/');

--retrieve
select * from clubs
where club_id = 1;

--updation into clubs
UPDATE clubs
SET club_code = 'DMQL'
WHERE club_code = 'DMWL';

--deletion
DELETE FROM clubs
WHERE club_id = 1;

-------------------------------------------------------------------------------

--insert into games relation
INSERT INTO games (game_id, competition_id, season, round, date, home_club_id, away_club_id, home_club_goals, away_club_goals, home_club_position, away_club_position, home_club_manager_name, away_club_manager_name, stadium, attendance, referee, url, home_club_name, away_club_name, aggregate, competition_type)
VALUES (1, 'BE1', 2023, 'Matchday 1', '2023-08-12', 2239, 2423, 2, 1, 1, 2, 'Ole Gunnar Solskjaer', 'Jurgen Klopp', 'Old Trafford', 75000, 'Michael Oliver', 'https://example.com/game1', 'Manchester United', 'Liverpool', '0-2', 'League');

--retrieve inserted data in games
select * from games
where game_id = 1

--updating the games relation
UPDATE games
SET home_club_id = 2553
WHERE game_id = 1;


--deletion from games relation
DELETE FROM games
WHERE game_id = 1;

-------------------------------------------------------------------------------

--inserting into game_events relation
INSERT INTO game_events (game_id, minute, type, club_id, player_id, description, player_in_id)
VALUES (2222539, 35, 'Goal', 2553, 597, 'Great goal by player X', null);

--retrieve inserted data in game_events
select * from game_events
where game_id = 2222539 and player_id = 597

--updating the game_events relation
UPDATE game_events
SET player_id = 597
WHERE game_id = 2222539;

--deletion from games relation
BEGIN;

DELETE FROM game_events
WHERE game_id = 2222539;

ROLLBACK;
-------------------------------------------------------------------------------

--insertion into competitions relation
INSERT INTO competitions (competition_id, competition_code, name, sub_type, type, country_id, country_name, domestic_league_code, confederation, url)
VALUES ('PL', 'EPL', 'Premier League', 'Professional', 'League', 1, 'England', 'ENG', 'UEFA', 'https://www.premierleague.com/');

--retrieve inserted data in competitions relation
select * from competitions
where competition_id = 'PL';

--update competitions relation
UPDATE competitions
SET competition_id = 'DMQL'
WHERE competition_id = 'PL';

--delete competitions relation record
DELETE FROM competitions
WHERE competition_id = 'DMQL';
-------------------------------------------------------------------------------

--insertn into club_games
INSERT INTO club_games (game_id, club_id, own_goals, own_position, own_manager_name, opponent_id, opponent_goals, opponent_position, opponent_manager_name, hosting, is_win)
VALUES (2222539, 2239, 2, 2, 'Manager A', 2423, 2, 1, 'Manager B', 'Home', 1);

--retrieve inserted data from club_games relationm
select * from club_games
where game_id = 2222539 AND club_id = 2239 AND opponent_id = 2423 

--update the club_games relation
UPDATE club_games
SET club_id = 2423
WHERE game_id = 2222539;

--deletion from club_games relation
BEGIN;

DELETE FROM club_games
WHERE game_id = 2222539;

ROLLBACK;
-------------------------------------------------------------------------------

--insertion into appearances relation
INSERT INTO appearances (appearance_id, game_id, player_id, player_club_id, player_current_club_id, date, player_name, competition_id, yellow_cards, red_cards, goals, assists, minutes_played)
VALUES ('APPEARANCE_ID_1', 2222539,597 , 80, 80, '2024-01-01', 'Player A', 'BE1', 1, 0, 1, 0, 90);

--retrieving from appearances
select * from appearances
where appearance_id = 'APPEARANCE_ID_1'

--update appearances relation
UPDATE appearances
SET appearance_id = 'APPEARANCE_ID_3'
WHERE appearance_id = 'APPEARANCE_ID_1';

--delete record from appearances
DELETE FROM appearances
WHERE appearance_id = 'APPEARANCE_ID_3';
-------------------------------------------------------------------------------

select * from player_valuations;
--inserting into player_valuations relation
INSERT INTO player_valuations (player_id, last_season, datetime, date, dateweek, market_value_in_eur, n, current_club_id, player_club_domestic_competition_id)
VALUES (3132, 2023, CURRENT_TIMESTAMP, '2024-01-01', '2024-01-01', '10,000,000', 126, 1, 'BE1');

--retrieve insereted data from player_valuation
select * from player_valuations
where player_id = 3132 AND player_club_domestic_competition_id = 'BE1'

--updation in player_valuations relation
UPDATE player_valuations
SET player_club_domestic_competition_id = 'BE1'
WHERE player_club_domestic_competition_id = 'DMQL1';

--deltion record from player_valuations relation
BEGIN;

DELETE FROM player_valuations
WHERE player_club_domestic_competition_id = 'BE1';

ROLLBACK;
-------------------------------------------------------------------------------
--SELECT QUeries --

--Simple SELECT Query:
--Retrieve the names and positions of all players.
SELECT name, position
FROM players;


--GROUP BY Query:
--Count the number of appearances per player.
SELECT p.name, a.player_id, COUNT(*) AS num_appearances
FROM appearances a
JOIN players p ON a.player_id = p.player_id
GROUP BY a.player_id, p.name;

--Sub-query:
--Retrieve the names of players who have scored more than equalto 1 goal in a season.
SELECT name
FROM players
WHERE player_id IN (
    SELECT player_id
    FROM appearances
    WHERE goals >=1
);


--JOIN Query:
--Retrieve the names of players along with their current club names.
SELECT p.name, c.name AS current_club
FROM players p
INNER JOIN clubs c ON p.current_club_id = c.club_id;

--Select Queries:
--Retrieve all players along with their current clubs using INNER JOIN.
SELECT p.name, c.name AS current_club
FROM players p
INNER JOIN clubs c ON p.current_club_id = c.club_id;

--Retrieve the total number of appearances per player.
SELECT player_id, COUNT(*) AS num_appearances
FROM appearances
GROUP BY player_id;

--Retrieve the top 5 players with the highest market value.
SELECT p.name, p.highest_market_value_in_eur
FROM players p
JOIN (
    SELECT DISTINCT highest_market_value_in_eur
    FROM players
    ORDER BY highest_market_value_in_eur DESC
    LIMIT 5
) AS top_market_values
ON p.highest_market_value_in_eur = top_market_values.highest_market_value_in_eur;


--Retrieve the average attendance per competition.
SELECT competition_id, ROUND(AVG(attendance)) AS avg_attendance
FROM games
GROUP BY competition_id;


--Determine the average age of players in each club:
SELECT c.club_id, c.name AS club_name, CAST(AVG(EXTRACT(YEAR FROM AGE(p.date_of_birth))) AS INT) AS avg_age
FROM clubs c
JOIN players p ON c.club_id = p.current_club_id
GROUP BY c.club_id, c.name;

--Find the club with the highest squad size:
SELECT name AS club_name, squad_size
FROM clubs
WHERE squad_size = (SELECT MAX(squad_size) FROM clubs);



--Identify players with the highest market value:
SELECT player_id, name AS player_name, market_value_in_eur
FROM players
WHERE market_value_in_eur = (SELECT MAX(market_value_in_eur) FROM players);

--Simple SELECT Query:
--Retrieve the names and positions of all players.
SELECT name, position
FROM players;


--GROUP BY Query:
--Count the number of appearances per player.
SELECT p.name, a.player_id, COUNT(*) AS num_appearances
FROM appearances a
JOIN players p ON a.player_id = p.player_id
GROUP BY a.player_id, p.name;


--Sub-query:
--Retrieve the names of players who have scored more than equalto 1 goal in a season.
SELECT name
FROM players
WHERE player_id IN (
    SELECT player_id
    FROM appearances
    WHERE goals >=1
);



--JOIN Query:
--Retrieve the names of players along with their current club names.
SELECT p.name, c.name AS current_club
FROM players p
INNER JOIN clubs c ON p.current_club_id = c.club_id;

--Select Queries:
--Retrieve all players along with their current clubs using INNER JOIN.
SELECT p.name, c.name AS current_club
FROM players p
INNER JOIN clubs c ON p.current_club_id = c.club_id;

--Retrieve the total number of appearances per player.
SELECT player_id, COUNT(*) AS num_appearances
FROM appearances
GROUP BY player_id;

--Retrieve the top 5 players with the highest market value.
SELECT p.name, p.highest_market_value_in_eur
FROM players p
JOIN (
    SELECT DISTINCT highest_market_value_in_eur
    FROM players
    ORDER BY highest_market_value_in_eur DESC
    LIMIT 5
) AS top_market_values
ON p.highest_market_value_in_eur = top_market_values.highest_market_value_in_eur;


--Retrieve the average attendance per competition.
SELECT competition_id, ROUND(AVG(attendance)) AS avg_attendance
FROM games
GROUP BY competition_id;


--Determine the average age of players in each club:
SELECT c.club_id, c.name AS club_name, CAST(AVG(EXTRACT(YEAR FROM AGE(p.date_of_birth))) AS INT) AS avg_age
FROM clubs c
JOIN players p ON c.club_id = p.current_club_id
GROUP BY c.club_id, c.name;

--Find the club with the highest squad size:
SELECT name AS club_name, squad_size
FROM clubs
WHERE squad_size = (SELECT MAX(squad_size) FROM clubs);



--Identify players with the highest market value:
SELECT player_id, name AS player_name, market_value_in_eur
FROM players
WHERE market_value_in_eur = (SELECT MAX(market_value_in_eur) FROM players);
