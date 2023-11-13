const q3 = `
SELECT
    move.name AS Nom,
    move.category AS Catégorie,
    move.power AS Puissance,
    move.pp AS 'Point de pouvoir',
    move.accuracy AS Précision,
    move.description AS Description
FROM
    move
INNER JOIN
    type
ON
    move.type_id = type.type_id
WHERE
    type.name = 'Roche'
ORDER BY
    category ASC;
`;

module.exports = q3;
