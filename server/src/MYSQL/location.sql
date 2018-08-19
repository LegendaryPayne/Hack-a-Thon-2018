USE `heroku_6e50db9ee107e65`;
DROP procedure IF EXISTS `spGetAllLocations`;

DELIMITER $$
CREATE PROCEDURE `spGetAllLocations` ()
BEGIN
SELECT *
FROM `heroku_6e50db9ee107e65`.`location`;

END$$

DELIMITER ;


DROP procedure IF EXISTS `spGetLocations`;

DELIMITER $$
CREATE PROCEDURE `spGetLocations` (p_idlocation INT)
BEGIN
SELECT *
FROM `heroku_6e50db9ee107e65`.`location`
WHERE `location`.`idlocation` = p_idlocation;

END$$

DELIMITER ;


DROP procedure IF EXISTS `spUpdateLocations`;
DELIMITER $$
CREATE PROCEDURE `spUpdateLocations` (p_idlocation INT, p_address VARCHAR(200), p_latitude FLOAT, p_longitude FLOAT, p_access TINYINT(4), p_location_notes LONGTEXT)
BEGIN

UPDATE `heroku_6e50db9ee107e65`.`location`
SET
`address` = coalesce(p_address, `address`),
`latitude` = coalesce(p_latitude,`latitude`),
`longitude` = coalesce(p_longitude, `longitude`),
`access` = coalesce(p_access, `access`),
`location_notes` = coalesce(p_location_notes, `location_notes`)
WHERE `idlocation` = p_idlocation;

END$$
DELIMITER ;


DROP procedure IF EXISTS `spDeleteLocations`;
DELIMITER $$
CREATE PROCEDURE `spDeleteLocations` (p_idlocation INT)
BEGIN
DELETE FROM `heroku_6e50db9ee107e65`.`location`
WHERE `location`.`idlocation` = p_idlocation;

END$$
DELIMITER ;

DROP procedure IF EXISTS `spGetBasedOnRadiusOfLocations`;
DELIMITER $$
CREATE PROCEDURE `spGetBasedOnRadiusOfLocations` (p_latitude FLOAT, p_longitude FLOAT, p_radius FLOAT)
BEGIN
SELECT *
FROM `heroku_6e50db9ee107e65`.`location`
WHERE `location`.`latitude` BETWEEN (p_latitude - p_radius) AND (p_latitude - p_radius) AND `location`.`longitude` BETWEEN (p_longitude - p_radius) AND (p_longitude + p_radius);

END$$
DELIMITER ;

DROP procedure IF EXISTS `spAddLocations`;
DELIMITER $$
CREATE PROCEDURE `spAddLocations` (p_address VARCHAR(200), p_latitude FLOAT, p_longitude FLOAT, p_access TINYINT(4), p_location_notes LONGTEXT)
BEGIN
INSERT INTO `heroku_6e50db9ee107e65`.`location`
(`address`,
`lattitude`,
`longitude`,
`access`,
`location_notes`)
VALUES
(p_address,
p_lattitude,
p_longitude,
p_access,
p_location_notes);

END$$
DELIMITER ;