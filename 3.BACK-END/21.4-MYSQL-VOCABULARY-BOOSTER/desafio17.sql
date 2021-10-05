USE w3schools;

DELIMITER $$

CREATE TRIGGER inserir_hora_do_pedido
BEFORE INSERT ON orders
FOR EACH ROW

BEGIN
SET NEW.OrderDate = DATE(NOW());
END $$

DELIMITER ;
