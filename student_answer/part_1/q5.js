const q5 = `
SELECT
    pokemon.pokedex_number AS 'N°',
    pokemon.name AS 'Pokemon'
FROM
    pokemon
INNER JOIN
    pokemon_ability ON pokemon.pokemon_id = pokemon_ability.pokemon_id
INNER JOIN
    ability ON pokemon_ability.ability_id = ability.ability_id
WHERE
    ability.name = 'Coloforce'
ORDER BY
    pokemon.pokedex_number ASC;
`;

module.exports = q5;
