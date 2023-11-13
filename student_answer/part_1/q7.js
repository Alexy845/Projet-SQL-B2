const q7 = `
SELECT
    pokemon.pokedex_number AS N°,
    pokemon.name AS 'Nom du pokemon',
    pokemon_type.type_id AS 'Type 1',
    COALESCE(type.name, 'N/A') AS 'Type 2'
FROM
    pokemon
INNER JOIN
    pokemon_type ON pokemon.pokemon_id = pokemon_type.pokemon_id and pokemon_type.slot = 1
INNER JOIN
    type ON pokemon_type.type_id = type.type_id
INNER JOIN
    pokemon_type AS pokemon_type2 ON pokemon.pokemon_id = pokemon_type2.pokemon_id and pokemon_type2.slot = 2
INNER JOIN
    type AS type2 ON pokemon_type2.type_id = type2.type_id
ORDER BY
    pokemon.pokedex_number ASC`;

module.exports = q7;
