const q11 = `
SELECT
    pokemon.name AS Pokemon,
    COUNT(move.move_id) AS 'Nombre de capacités'
FROM
    pokemon
LEFT JOIN
    pokemon_move ON pokemon.pokemon_id = pokemon_move.pokemon_id
LEFT JOIN
    move ON pokemon_move.move_id = move.move_id
GROUP BY
    pokemon.name
ORDER BY
    COUNT(move.move_id) DESC
LIMIT 1;
`;

module.exports = q11;
