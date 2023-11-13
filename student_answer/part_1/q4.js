const q4 = `
SELECT
    ability.ability_id AS Id,
    ability.name AS Talent,
    ability.description AS Description
FROM
    ability
WHERE
    ability.name LIKE '% %'
    OR ability.name LIKE '%-%'
ORDER BY
    LENGTH(ability.description) ASC;
`;

module.exports = q4;
