CREATE TABLE restaurants(
    restaurant_id bigserial PRIMARY KEY,
    restaurant_name varchar(128) not null 
);

CREATE TABLE branches(
    branch_id serial PRIMARY KEY,
    branch_name varchar(128) not null,
    restaurant int,
        FOREIGN KEY(restaurant)
        REFERENCES restaurants(restaurant_id)
        ON DELETE CASCADE
);

SELECT
    r.restaurant_id AS id,
    r.restaurant_name AS name,
    COUNT(b.branch_id) AS count_branch,
    CASE 
    WHEN 
        LENGTH(r.restaurant_name) > 6
    THEN
        '6dan katta'
    ELSE 
        '6 dan kichik'
    END xolat
FROM    
    restaurants r 
LEFT JOIN
    branches b 
ON
    r.restaurant_id = b.restaurant
GROUP BY
    id,
    name
ORDER BY id
;

CREATE OR REPLACE FUNCTION insertUser() 
RETURNS float 
LANGUAGE plpgsql
AS $$

DECLARE result float;

BEGIN 

END IF;

RETURN result;

END;
$$;
