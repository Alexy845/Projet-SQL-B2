const q9 = `
SELECT
    type.name AS Type,
    move.name AS Capacité,
    move.power AS Puissance,
    move.accuracy AS Précision,
    move.description AS Description
FROM
    move
INNER JOIN
    type ON move.type_id = type.type_id
WHERE
    move.power > 100
    AND move.accuracy >= 90
    AND move.description NOT LIKE '% tour %'
ORDER BY
    move.power DESC;
`;
module.exports = q9;
