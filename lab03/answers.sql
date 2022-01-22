-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name 
FROM users
ORDER BY last_name;



-- Exercise 4
SELECT id, user_id, image_url FROM posts WHERE id = 26 ;


-- Exercise 5
SELECT id, user_id, image_url FROM posts WHERE id = 26 OR id = 12;



-- Exercise 6
SELECT COUNT(*) FROM posts;



-- Exercise 7
SELECT  user_id, COUNT(*) FROM posts GROUP BY user_id;



-- Exercise 8
SELECT user_id, username, first_name, last_name FROM users
INNER JOIN users ON posts.user_id = user_id;



-- Exercise 9




-- Exercise 10




-- Exercise 11




-- Exercise 12




-- Exercise 13




-- Exercise 14
