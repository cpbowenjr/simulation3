create table if not exists users (
    id SERIAL PRIMARY KEY,
    username varchar(180),
    email varchar(180),
    phone integer,
    img text,
    auth_id text
)