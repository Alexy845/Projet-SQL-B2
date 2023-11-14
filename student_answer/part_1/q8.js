const q8 = `
SELECT
    type.name AS 'Nom du type',
    COUNT(pokemon.pokemon_id) AS 'Nombre de pokemon',
    SUM(CASE WHEN pt.slot = 1 THEN 1 ELSE NULL END) AS 'Nombre de pokemon avec le type slot 1',
    SUM(CASE WHEN pt.slot = 2 THEN 1 ELSE NULL END) AS 'Nombre de pokemon avec le type slot 2'
FROM
    type
LEFT JOIN
    pokemon_type pt ON type.type_id = pt.type_id
LEFT JOIN
    pokemon ON pt.pokemon_id = pokemon.pokemon_id
GROUP BY
    type.type_id
ORDER BY
    "Nombre de pokemon" DESC, "Nombre de pokemon avec le type slot 1" DESC;
`;

module.exports = q8;
