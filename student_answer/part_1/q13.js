const q13 = `
SELECT pokemon.name AS 'Nom du pokemon',
    COUNT(*) AS 'Nombre capacité avec le même type'
FROM
    pokemon
INNER JOIN
    pokemon_type pt ON pokemon.pokemon_id = pt.pokemon_id
INNER JOIN
    type ON type.type_id = pt.type_id
INNER JOIN
    move ON type.type_id = move.type_id
INNER JOIN
    pokemon_move ON pokemon_move.move_id = move.move_id
WHERE
    pokemon.pokemon_id = pokemon_move.pokemon_id
GROUP BY
    pokemon.name
ORDER BY
    COUNT(*) DESC,
    pokemon.name ASC
LIMIT 10;

`;

module.exports = q13;
