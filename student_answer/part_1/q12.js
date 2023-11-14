const q12 = `
SELECT
    pokemon.pokedex_number AS N°,
    pokemon.name AS 'Nom du pokemon',
    ability.name AS 'Nom du talent'
FROM
    pokemon
INNER JOIN
    pokemon_type ON pokemon.pokemon_id = pokemon_type.pokemon_id
INNER JOIN
    type ON pokemon_type.type_id = type.type_id
INNER JOIN
    pokemon_ability ON pokemon.pokemon_id = pokemon_ability.pokemon_id
INNER JOIN
    ability ON pokemon_ability.ability_id = ability.ability_id
WHERE
    type.name = 'Acier' and is_hidden = 1
ORDER BY
    pokemon.pokedex_number;
`;

module.exports = q12;
