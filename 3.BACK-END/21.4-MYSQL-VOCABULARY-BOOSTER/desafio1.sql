SELECT 
    C.COUNTRY_NAME AS País,
    CASE R.REGION_NAME
        WHEN 'Europe' THEN 'incluído'
        ELSE 'não incluído'
    END AS `Status Inclusão`
FROM
    hr.countries AS C
        INNER JOIN
    hr.regions AS R ON C.region_id = R.region_id
ORDER BY COUNTRY_NAME;
