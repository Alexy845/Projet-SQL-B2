const q7 = `
SELECT
    pokemon.pokedex_number AS N°,
    pokemon.name AS 'Nom du pokemon',
    type.name AS 'Type 1',
    COALESCE(type2.name, 'N/A') AS 'Type 2'
FROM
    pokemon
INNER JOIN
    pokemon_type pt1 ON pt1.pokemon_id = pokemon.pokemon_id and pt1.slot = 1
INNER JOIN
    type ON pt1.type_id = type.type_id
LEFT JOIN
    pokemon_type pt2 ON pt2.pokemon_id = pokemon.pokemon_id and pt2.slot = 2
LEFT JOIN
    type AS type2 ON pt2.type_id = type2.type_id
ORDER BY
    pokemon.pokedex_number ASC`;

module.exports = q7;
