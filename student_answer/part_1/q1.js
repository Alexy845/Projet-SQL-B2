const q1 = `
SELECT
    pokemon.pokedex_number AS N°,
    pokemon.name AS Pokemon,
    pokemon.description AS Description
FROM
    pokemon
WHERE
    LENGTH(pokemon.description) < 75
ORDER BY
    pokemon.pokedex_number ASC;

`;

module.exports = q1;
