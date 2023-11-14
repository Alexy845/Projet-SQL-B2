const q15 = `
SELECT
    type.name AS Type,(
    SELECT coalesce(sum(bs.hp + bs.attack + bs.defense + bs.spe_attack + bs.spe_defense + bs.speed)/ sum(1),0)
    FROM
        base_stat bs
    INNER JOIN
        pokemon_type pt ON bs.pokemon_id = pt.pokemon_id
    INNER JOIN
        pokemon p ON pt.pokemon_id = p.pokemon_id
    WHERE
        p.pokedex_number BETWEEN 1 AND 151
        AND pt.type_id = type.type_id
        ) AS 'Moyenne gen 1 total stat',(

    SELECT coalesce(sum(bs.hp + bs.attack + bs.defense + bs.spe_attack + bs.spe_defense + bs.speed)/ sum(1),0)
    FROM
        base_stat bs
    INNER JOIN
        pokemon_type pt ON bs.pokemon_id = pt.pokemon_id
    INNER JOIN
        pokemon p ON pt.pokemon_id = p.pokemon_id
    WHERE
        p.pokedex_number BETWEEN 252 AND 386
        AND pt.type_id = type.type_id
        ) AS 'Moyenne gen 3 total stat',(

    SELECT coalesce(sum(bs.hp + bs.attack + bs.defense + bs.spe_attack + bs.spe_defense + bs.speed)/ sum(1),0)
    FROM
        base_stat bs
    INNER JOIN
        pokemon_type pt ON bs.pokemon_id = pt.pokemon_id
    INNER JOIN
        pokemon p ON pt.pokemon_id = p.pokemon_id
    WHERE
        p.pokedex_number BETWEEN 494 AND 649
        AND pt.type_id = type.type_id
        ) AS 'Moyenne gen 5 total stat',(

    SELECT coalesce(sum(bs.hp + bs.attack + bs.defense + bs.spe_attack + bs.spe_defense + bs.speed)/ sum(1),0)
    FROM
        base_stat bs
    INNER JOIN
        pokemon_type pt ON bs.pokemon_id = pt.pokemon_id
    INNER JOIN
        pokemon p ON pt.pokemon_id = p.pokemon_id
    WHERE
        p.pokedex_number BETWEEN 722 AND 807
        AND pt.type_id = type.type_id
        ) AS 'Moyenne gen 7 total stat'

FROM
    pokemon

LEFT JOIN
    pokemon_type pt ON pokemon.pokemon_id = pt.pokemon_id
LEFT JOIN
    type ON pt.type_id = type.type_id
LEFT JOIN
    base_stat bs ON pokemon.pokemon_id = bs.pokemon_id
WHERE
    pokemon.pokedex_number IS NOT NULL
GROUP BY
    type.name
ORDER BY
    type.type_id;

`;

module.exports = q15;
