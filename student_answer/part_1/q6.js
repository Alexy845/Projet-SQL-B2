const q6 = `
SELECT
    pokemon.pokedex_number AS N°,
    pokemon.name AS Pokemon,
    ability.name AS Talent,
    ability.description AS 'Description talent'
FROM
    pokemon
INNER JOIN
    pokemon_ability ON pokemon.pokemon_id = pokemon_ability.pokemon_id
INNER JOIN
    ability ON pokemon_ability.ability_id = ability.ability_id
GROUP BY ability.ability_id
HAVING COUNT(ability.name) = 1
ORDER BY pokemon.pokedex_number ASC;

`;

module.exports = q6;
