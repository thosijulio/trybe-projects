SELECT 
    C.CustomerName AS `Nome de contato`,
    S.ShipperName AS `Empresa que fez o envio`,
    O.OrderDate AS `Data do pedido`
FROM
    w3schools.customers AS C
        INNER JOIN
    w3schools.orders AS O ON O.CustomerID = C.CustomerID
        INNER JOIN
    w3schools.shippers AS S ON O.ShipperID = S.ShipperID
ORDER BY `Nome de contato` , `Empresa que fez o envio` , `Data do pedido`;
