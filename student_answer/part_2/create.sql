CREATE TABLE movie (
    movie_id INT AUTO_INCREMENT PRIMARY KEY,
    adult BOOLEAN NOT NULL,
    budget INTEGER,
    original_language TEXT,
    original_title TEXT,
    overview TEXT,
    popularity REAL,
    status TEXT,
    title TEXT NOT NULL,
    vote_average REAL,
    vote_count INTEGER
);
CREATE TABLE movie_genre (
    movie_id INTEGER,
    genre_id INTEGER,
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
    FOREIGN KEY (genre_id) REFERENCES genre(genre_id)
);

CREATE TABLE genre (
    genre_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL
);
CREATE TABLE movie_keyword (
    movie_id INTEGER,
    keyword_id INTEGER,
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
    FOREIGN KEY (keyword_id) REFERENCES keyword(keyword_id)
);

CREATE TABLE keyword (
    keyword_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE movie_language (
    movie_id INTEGER,
    language_id INTEGER,
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);

CREATE TABLE language (
    language_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    code TEXT NOT NULL,
    name TEXT NOT NULL

);

CREATE TABLE movie_company (
    movie_id INTEGER,
    company_id INTEGER,
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
    FOREIGN KEY (company_id) REFERENCES production_company(company_id)
);

CREATE TABLE production_company (
    company_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    origin_country TEXT NOT NULL
);

CREATE TABLE movie_cast (
    movie_cast_id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INTEGER,
    gender_id INTEGER,
    person_id INTEGER,
    character_name TEXT,
    cast_order INT,
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
    FOREIGN KEY (gender_id) REFERENCES gender(gender_id),
    FOREIGN KEY (person_id) REFERENCES person(person_id)
);

CREATE TABLE gender (
    gender_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name TEXT
);

CREATE TABLE person (
    person_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    birthDate TEXT,
    popularity REAL,
    gender_id INT,
    FOREIGN KEY (gender_id) REFERENCES gender(gender_id)
);

CREATE TABLE movie_crew (
    movie_id INTEGER,
    department_id INTEGER,
    person_id INTEGER,
    job TEXT,
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
    FOREIGN KEY (department_id) REFERENCES department(department_id),
    FOREIGN KEY (person_id) REFERENCES person(person_id)
);

CREATE TABLE department (
    department_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name TEXT
);
