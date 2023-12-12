create table genres (
    name text unique,
    position integer
);

create table movies (
    movie_id serial primary key,
    title text,
    genre cube
);
create index movies_genres_cube on movies using gist (genre);

create table actors (
    actor_id serial primary key,
    name text
);

create table movies_actors (
    movie_id integer references movies not null,
    actor_id integer references actors not null,
    unique (movie_id, actor_id)
);
create index movies_actors_movie_id on movies_actors (movie_id);
create index movies_actors_actor_id on movies_actors (actor_id);
