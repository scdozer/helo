CREATE TABLE users (
	ID SERIAL PRIMARY KEY,
    userid varchar(255),
    firstname varchar(255),
    lastname varchar(255),
    gender varchar(255),
    haircolor varchar(255),
    eyecolor varchar(255),
    hobby varchar(255),
    birthday varchar(255),
    birthmonth varchar(255),
    birthyear varchar(255)
)

CREATE TABLE friends (
  userid varchar(255),
  friendid varchar(255),
  PRIMARY KEY (userid, friendid)
)
