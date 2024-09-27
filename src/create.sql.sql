--competitions relation
CREATE TABLE competitions (
    competition_id VARCHAR PRIMARY KEY,
    competition_code VARCHAR,
    name VARCHAR,
    sub_type VARCHAR,
    type VARCHAR,
    country_id INTEGER,
    country_name VARCHAR,
    domestic_league_code VARCHAR,
    confederation VARCHAR,
    url VARCHAR
);

--clubs relation
CREATE TABLE clubs (
    club_id SERIAL PRIMARY KEY,
    club_code VARCHAR,
    name VARCHAR,
    domestic_competition_id VARCHAR,
    squad_size INTEGER,
    average_age NUMERIC,
    foreigners_number INTEGER,
    foreigners_percentage NUMERIC,
    national_team_players INTEGER,
    stadium_name VARCHAR,
    stadium_seats INTEGER,
    net_transfer_record VARCHAR,
    last_season INTEGER,
    url VARCHAR
);

--players relation
CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    name VARCHAR,
    last_season INTEGER,
    current_club_id INTEGER REFERENCES clubs(club_id),
    player_code VARCHAR,
    country_of_birth VARCHAR,
    city_of_birth VARCHAR,
    country_of_citizenship VARCHAR,
    date_of_birth DATE,
    sub_position VARCHAR,
    position VARCHAR,
    foot VARCHAR,
    height_in_cm INTEGER,
    market_value_in_eur NUMERIC,
    highest_market_value_in_eur NUMERIC,
    contract_expiration_date DATE,
    agent_name VARCHAR,
    image_url VARCHAR,
    url VARCHAR,
    current_club_domestic_competition_id VARCHAR,
    current_club_name VARCHAR
);

--games relation
CREATE TABLE games (
    game_id SERIAL PRIMARY KEY,
    competition_id VARCHAR REFERENCES competitions(competition_id),
    season INTEGER,
    round VARCHAR,
    date DATE,
    home_club_id INTEGER REFERENCES clubs(club_id),
    away_club_id INTEGER REFERENCES clubs(club_id),
    home_club_goals INTEGER,
    away_club_goals INTEGER,
    home_club_position INTEGER,
    away_club_position INTEGER,
    home_club_manager_name VARCHAR,
    away_club_manager_name VARCHAR,
    stadium VARCHAR,
    attendance NUMERIC,
    referee VARCHAR,
    url VARCHAR,
    home_club_name VARCHAR,
    away_club_name VARCHAR,
    aggregate VARCHAR,
    competition_type VARCHAR
);

--club_games relation
CREATE TABLE club_games (
    game_id INTEGER REFERENCES games(game_id),
    club_id INTEGER REFERENCES clubs(club_id),
    own_goals INTEGER,
    own_position INTEGER,
    own_manager_name VARCHAR,
    opponent_id INTEGER REFERENCES clubs(club_id),
    opponent_goals INTEGER,
    opponent_position INTEGER,
    opponent_manager_name VARCHAR,
    hosting VARCHAR,
    is_win INTEGER
);

--appearances relation
CREATE TABLE appearances (
    appearance_id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES games(game_id),
    player_id INTEGER REFERENCES players(player_id),
    player_club_id INTEGER,
    player_current_club_id INTEGER,
    date DATE,
    player_name VARCHAR,
    competition_id VARCHAR,
    yellow_cards INTEGER,
    red_cards INTEGER,
    goals INTEGER,
    assists INTEGER,
    minutes_played INTEGER
);

--game_events relation
CREATE TABLE game_events (
    game_id INTEGER REFERENCES games(game_id),
    minute INTEGER,
    type VARCHAR,
    club_id INTEGER REFERENCES clubs(club_id),
    player_id INTEGER REFERENCES players(player_id),
    description VARCHAR,
    player_in_id INTEGER
);

--player_valuations relation
CREATE TABLE player_valuations (
    player_id INTEGER REFERENCES players(player_id),
    last_season INTEGER,
    datetime TIMESTAMP WITHOUT TIME ZONE,
    date DATE,
    dateweek DATE,
    market_value_in_eur VARCHAR,
    n INTEGER,
    current_club_id INTEGER REFERENCES clubs(club_id),
    player_club_domestic_competition_id VARCHAR
);
