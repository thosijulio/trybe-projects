SELECT 
    P.ProductName AS Produto,
    MIN(OD.Quantity) AS Mínima,
    MAX(OD.Quantity) AS Máxima,
    ROUND(AVG(OD.Quantity), 2) AS Média
FROM
    w3schools.products AS P
        INNER JOIN
    w3schools.order_details AS OD ON OD.ProductID = P.ProductID
GROUP BY P.ProductID
ORDER BY Média , Produto;
