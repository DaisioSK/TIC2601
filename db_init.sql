-- Create product table--
CREATE TABLE category (
	cat_id INT(10) PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	img VARCHAR(255) NOT NULL,
	c_time DATETIME DEFAULT NULL,
	m_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	KEY title (title)
);

-- Test insert--
INSERT INTO category (title, img, c_time, m_time) VALUES 
('Category 1', 'img path/test1.png', '2021-10-01', '00:00:00'),
('Category 2', 'img path/test2.png', '2021-10-02', '04:00:00');


-- Create product table--
CREATE TABLE product (
	p_id INT(10) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	price DECIMAL NOT NULL CHECK(price > 0),
	detail TEXT NOT NULL,
	is_sold TINYINT(1) DEFAULT 0,
	c_time DATETIME DEFAULT NULL,
	m_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	seller_id INT(10) REFERENCES user(u_id),
	cat_id INT(10) REFERENCES category(cat_id),
	KEY sold (is_sold),
	KEY name (name)
);


-- Create product's images table--
CREATE TABLE product_img (
	img_id INT(10) PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(255) DEFAULT 'resource/img/default.jpg',
	c_time DATETIME DEFAULT NULL,
	m_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	p_id INT(10) REFERENCES product(p_id) ON DELETE CASCADE ON UPDATE CASCADE
);


-- Create user table--
CREATE TABLE user (
	u_id INT(10) PRIMARY KEY AUTO_INCREMENT,
	role ENUM('user', 'admin') DEFAULT 'user',
	f_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	hp INT(8) NOT NULL,
	password VARCHAR(255) NOT NULL,
	address VARCHAR(255) DEFAULT NULL,
	postal INT(6) NOT NULL,
	c_time DATETIME DEFAULT NULL,
	m_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	UNIQUE KEY email (email),
	KEY name (role, f_name)
);


-- Create comment table--
CREATE TABLE comment (
	c_id INT(10) PRIMARY KEY AUTO_INCREMENT,
	content TEXT,
	c_time DATETIME DEFAULT NULL,
	p_id INT(10) REFERENCES product(p_id),
	sender_id INT(10) REFERENCES user(u_id),
	receiver_id INT(10) REFERENCES user(u_id)
);


-- Create transaction table--
CREATE TABLE transaction (
	t_id INT(10) PRIMARY KEY AUTO_INCREMENT,
	qty INT(10) DEFAULT 1,
	subtotal DECIMAL CHECK(subtotal > 0),
	payment_mode VARCHAR(256) DEFAULT NULL,
	c_time DATETIME DEFAULT NULL,
	p_id INT(10) REFERENCES product(p_id),
	buyer_id INT(10) REFERENCES user(u_id),
	KEY payment_mode (payment_mode)
);