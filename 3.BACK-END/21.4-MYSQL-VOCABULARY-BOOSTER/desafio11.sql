SELECT 
    C1.ContactName AS Nome,
    C1.Country AS País,
    (SELECT 
            COUNT(*)
        FROM
            w3schools.customers AS C2
        WHERE
            C1.Country = C2.Country) AS `Número de compatriotas`
FROM
    w3schools.customers AS C1
ORDER BY C1.ContactName;
