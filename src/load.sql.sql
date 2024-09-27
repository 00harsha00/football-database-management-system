--players relation
copy public.milestones 
from 'C://Downloads/dmql/players.csv' with csv header;

--games relation
copy public.milestones 
from 'C://Downloads/dmql/games.csv' with csv header;

--clubs relation
copy public.milestones 
from 'C://Downloads/dmql/clubs.csv' with csv header;

--club_games relation
copy public.milestones 
from 'C://Downloads/dmql/club_games.csv' with csv header;

--game_events relation
copy public.milestones 
from 'C://Downloads/dmql/game_events.csv' with csv header;

--player_valuations relation
copy public.milestones 
from 'C://Downloads/dmql/player_valuations.csv' with csv header;

--competitions relation
copy public.milestones 
from 'C://Downloads/dmql/competitions.csv' with csv header;

--appearances relation
copy public.milestones 
from 'C://Downloads/dmql/appearances.csv' with csv header;