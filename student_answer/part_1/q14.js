const q14 = `
WITH base_hp AS (
    SELECT
        *
    FROM (
        SELECT
            pokemon.name,
            base_stat.hp,
            pokemon_type.type_id
        FROM base_stat
        INNER JOIN 
            pokemon ON base_stat.pokemon_id = pokemon.pokemon_id
        INNER JOIN 
            pokemon_type ON pokemon.pokemon_id = pokemon_type.pokemon_id
        ORDER BY base_stat.hp DESC, (base_stat.defense + base_stat.attack + base_stat.spe_attack + base_stat.spe_defense + base_stat.speed) DESC, pokemon_type.type_id ASC, pokemon.pokedex_number ASC
        )
    GROUP BY type_id HAVING hp = max(hp)
    ), base_attaque AS (
    SELECT *
    FROM (
        SELECT
            pokemon.name,
            base_stat.attack,
            pokemon_type.type_id
        FROM base_stat
        INNER JOIN pokemon ON base_stat.pokemon_id = pokemon.pokemon_id
        INNER JOIN pokemon_type ON pokemon.pokemon_id = pokemon_type.pokemon_id
        ORDER BY base_stat.attack DESC, (base_stat.hp + base_stat.defense + base_stat.spe_attack + base_stat.spe_defense + base_stat.speed) DESC, pokemon_type.type_id ASC, pokemon.pokedex_number ASC
        )
    GROUP BY type_id HAVING attack = max(attack)
    ), base_defense AS (
    SELECT *
    FROM (
        SELECT
            pokemon.name,
            base_stat.defense,
            pokemon_type.type_id
        FROM base_stat
        INNER JOIN pokemon ON base_stat.pokemon_id = pokemon.pokemon_id
        INNER JOIN pokemon_type ON pokemon.pokemon_id = pokemon_type.pokemon_id
        ORDER BY base_stat.defense DESC, (base_stat.hp + base_stat.attack + base_stat.spe_attack + base_stat.spe_defense + base_stat.speed) DESC, pokemon_type.type_id ASC, pokemon.pokedex_number ASC
        )
    GROUP BY type_id HAVING defense = max(defense)
    ), base_spe_attaque AS (
    SELECT *
    FROM (
        SELECT
            pokemon.name,
            base_stat.spe_attack,
            pokemon_type.type_id
        FROM base_stat
        INNER JOIN pokemon ON base_stat.pokemon_id = pokemon.pokemon_id
        INNER JOIN pokemon_type ON pokemon.pokemon_id = pokemon_type.pokemon_id
        ORDER BY base_stat.spe_attack DESC, (base_stat.hp + base_stat.attack + base_stat.defense + base_stat.spe_defense + base_stat.speed) DESC, pokemon_type.type_id ASC, pokemon.pokedex_number ASC
        )
    GROUP BY type_id HAVING spe_attack = max(spe_attack)
    ), base_spe_defense AS (
    SELECT * 
    FROM (
        SELECT 
            pokemon.name, 
            base_stat.spe_defense,
            pokemon_type.type_id
        FROM base_stat
        INNER JOIN pokemon ON base_stat.pokemon_id = pokemon.pokemon_id
        INNER JOIN pokemon_type ON pokemon.pokemon_id = pokemon_type.pokemon_id
        ORDER BY base_stat.spe_defense DESC, (base_stat.hp + base_stat.attack + base_stat.spe_attack + base_stat.defense + base_stat.speed) DESC, pokemon_type.type_id ASC, pokemon.pokedex_number ASC
    )
    GROUP BY type_id HAVING spe_defense = max(spe_defense)
    ), base_vitesse AS (
    SELECT *
    FROM (
        SELECT 
            pokemon.name, 
            base_stat.speed,
            pokemon_type.type_id
        FROM base_stat
        INNER JOIN pokemon ON base_stat.pokemon_id = pokemon.pokemon_id
        INNER JOIN pokemon_type ON pokemon.pokemon_id = pokemon_type.pokemon_id
    ORDER BY speed DESC, (base_stat.hp + base_stat.attack + base_stat.defense + base_stat.spe_attack + base_stat.spe_defense) DESC, pokemon_type.type_id ASC, pokemon_type.pokemon_type_id ASC
    )
    GROUP BY type_id HAVING speed = max(speed)
)

SELECT type.name AS 'Type',
       base_hp.name AS 'HP',
       base_attaque.name AS 'Attaque',
       base_defense.name AS 'Défense',
       base_spe_attaque.name AS 'Spé. Attaque',
       base_spe_defense.name AS 'Spé. Défense',
       base_vitesse.name AS 'Vitesse'
FROM type
INNER JOIN pokemon_type ON type.type_id = pokemon_type.type_id
INNER JOIN pokemon ON pokemon_type.pokemon_id = pokemon.pokemon_id
INNER JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id
INNER JOIN base_hp ON base_hp.type_id = type.type_id
INNER JOIN base_attaque ON base_attaque.type_id = type.type_id
INNER JOIN base_defense ON base_defense.type_id = type.type_id
INNER JOIN base_spe_attaque ON base_spe_attaque.type_id = type.type_id
INNER JOIN base_spe_defense ON base_spe_defense.type_id = type.type_id
INNER JOIN base_vitesse ON base_vitesse.type_id = type.type_id
GROUP BY Type
ORDER BY base_vitesse.type_id;
`;

module.exports = q14;
