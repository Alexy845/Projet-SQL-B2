const q10 = `
WITH bestAbility AS (
    SELECT
        name,
        power,
        type_id
    FROM
        move
    GROUP BY
        move.type_id
    HAVING
        power = max(power)),

    badAbility AS (
    SELECT
        name,
        power,
        type_id
    FROM
        move
    GROUP BY
        move.type_id
    HAVING
        power = min(power))


SELECT
    type.name AS 'Type',
    bestAbility.name AS 'Meilleure capacité',
    bestAbility.power AS 'Meilleure puissance',
    badAbility.name AS 'Pire capacité',
    badAbility.power AS 'Pire puissance'
FROM
    type
INNER JOIN
    bestAbility ON bestAbility.type_id = type.type_id
INNER JOIN
    badAbility on badAbility.type_id = type.type_id
GROUP BY
    Type
ORDER BY badAbility.type_id;
`;

module.exports = q10;
