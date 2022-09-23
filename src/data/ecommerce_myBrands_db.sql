DROP DATABASE IF EXISTS ecommerce_mybrands_db;

-- Cria banco de dados
CREATE DATABASE IF NOT EXISTS ecommerce_mybrands_db;

-- Seleciona banco de  dados para uso
USE ecommerce_mybrands_db;

-- Cria tabela de usuário
CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR (100) NOT NULL,
    birthdate DATE,
    cpf VARCHAR (11) NOT NULL,
    picture VARCHAR (250),
    phone VARCHAR(10) NOT NULL,
    celphone VARCHAR(11) NOT NULL,
    is_admin TINYINT DEFAULT 0,
    bredIn DATETIME,
    changedIn DATETIME
);

-- Alterar tabela
-- ALTER TABLE users ADD criadoEm DATETIME;
-- ALTER TABLE users ADD alteradoEm DATETIME;

-- Insere um ou mais usuário
INSERT INTO users (name, email, senha, birthdate, cpf, picture, phone, celphone, is_admin, bredIn, changedIn)
VALUES 
	("Renata Pereira", "renata@email.com", md5("123"),"1999-11-10", "24150385041","https://i.pravatar.cc/300?img=1","1130313130","11999999999",0,NOW(),NOW()),
    ("Thiago Gomes", "cava.lo.marinho@email.com", md5("1234"),"1987-12-30", "37238095025","https://i.pravatar.cc/300?img=12","2733333333","27999969969",0,NOW(),NOW()),
    ("Leticia Correia", "correia@email.com", md5("1235"),"2000-03-01", "02424325065","https://i.pravatar.cc/300?img=10","4139319930","41939393939",0,NOW(),NOW()),
    ("Reginaldo Silva", "regis@email.com", md5("1236"),"1998-04-12", "13644998000","https://i.pravatar.cc/300?img=3","7432323120","74992292929",0,NOW(),NOW()),
    ("Joaquim Souza", "joaquim.souza@email.com", md5("1237"),"1980-08-22", "10619473002","https://i.pravatar.cc/300?img=6","3532627131","35922642829",1,NOW(),NOW());

-- Lista todos os usuários
SELECT * FROM users;

-- Limita quantidade de linhas
SELECT * FROM users
ORDER BY name
LIMIT 5 OFFSET 5;

SELECT * FROM users
WHERE id >= 3 AND id <= 10;

SELECT * FROM users
WHERE id BETWEEN 3 AND 10;

-- Tabela para produtos
CREATE TABLE products (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(250) NOT NULL,
  category VARCHAR (50) NOT NULL,
  brand VARCHAR(200),
  price DECIMAL(10,2) NOT NULL,
  inventory INT (250) NOT NULL,
  available INT UNSIGNED DEFAULT 0,
  urlImage VARCHAR (250) NOT NULL
);

-- Insere um ou mais produtos
INSERT INTO products (name, category, brand, price, inventory, available, urlImage)
VALUES 
	("AMD Radeon RX 550, 8GB, Preto", "motherboard", "AMD", 4769.00, 12, 1,
    "https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-b450-aorus-pro-chipset-b450-amd-am4-atx-ddr4_91015.png"),
    ("Redragon Cobra, Chroma RGB, 12400DPI, 7 Botões, Preto", "mouse", "Redragon", 1540.30, 15 ,1,
    "https://img.terabyteshop.com.br/produto/g/upgrade1277_142961.jpg"),
    ("Cloud Stinger, Drivers 50mm, Múltiplas Plataformas, P2 e P3", "motherboard", "HyperX", 1399.00, 18,1,
    "https://img.terabyteshop.com.br/produto/g/placa-mae-asus-tuf-gaming-x570-plus-chipset-x570-amd-am4-atx-ddr4_124480.png"),
    ("SSD Kingston A400, 120GB, Sata III, Leitura 500MBs Gravação 320MBs, SA400S37/120G", "ssd", "Kingston", 180.00, 120,1,
    "https://img.terabyteshop.com.br/produto/g/ssd-kingston-a400-120gb-sa400s37120g-sata-iii-leitura-500mbs-gravacao-320mbs_58311.jpg"),
    ("Placa de Vídeo Gigabyte GeForce RTX 3060 EAGLE OC 12G, LHR, 12GB, GDDR6, DLSS, Ray Tracing, GV-N3060EAGLE OC-12GD", "video card", "Gigabyte", 2599.00, 40,1,
    "https://img.terabyteshop.com.br/produto/g/placa-de-video-gigabyte-geforce-rtx-3060-eagle-oc-12g-lhr-12gb-gddr6-dlss-ray-tracing-gv-n3060eagle-oc-12gd_142662.png"),
    ("Placa de Vídeo PowerColor AMD Radeon RX 6400 ITX, 4GB, GDDR6, FSR, Ray Tracing, AXRX 6400 4GBD6-DH", "video card", "PowerColor", 1099.00, 4,1,
    "https://img.terabyteshop.com.br/produto/g/placa-de-video-powercolor-amd-radeon-rx-6400-itx-4gb-gddr6-fsr-ray-tracing-axrx-6400-4gbd6-dh_146452.png"),
    ("SSD Geil Zenith Z3, 256GB, Sata III, Leitura 520MBs e Gravação 470MBs, GZ25Z3-256GP", "ssd", "Zenith", 300.00, 14,1,
    "https://img.terabyteshop.com.br/produto/g/ssd-geil-zenith-z3-256gb-sata-iii-leitura-520mbs-e-gravacao-470mbs-gz25z3-256gp_122765.png"),
    ("Placa de Vídeo Inno3D GeForce GTX 1650 Twin X2, 4GB GDDR6, 128Bit, N16502K-04D6", "motherboard", "Inno3d", 1769.00, 12,1,
    "https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-b450-aorus-pro-chipset-b450-amd-am4-atx-ddr4_91015.png");

    -- Tabela para pedidos
CREATE TABLE requests(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  create_at DATETIME NOT NULL,
  status ENUM("processando", "a caminho", "entregue") DEFAULT "processando",
  user_id INT UNSIGNED,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Tabela intermediária de pedidos e produtos
CREATE TABLE requests_products(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  requests_id INT UNSIGNED,
  product_id INT UNSIGNED,
  FOREIGN KEY (requests_id) REFERENCES requests(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);


-- Lista produtos
SELECT * FROM products;

-- Insere um ou mais pedidos por produtos
INSERT INTO requests (create_at, status, user_id)
VALUES 
	("2022-08-20 12:22:00", "entregue", 2),
    ("2022-02-18 20:49:00", "entregue", 3),
    ("2022-04-20 21:29:00", "processando", 1),
    ("2022-05-28 22:59:00", "processando", 4);
    
-- Lista pedidos
SELECT * FROM  requests;

-- Insere um ou mais produtos
INSERT INTO requests_products (requests_id, product_id)
VALUES 
	(6, 5),
    (6, 2),
    (7, 1),
    (8, 5),
    (8, 6);
    
-- Lista pedidos-produtos
SELECT * FROM requests_products;

-- Lista pedidos concatenado com pedidos-produtos e produtos
SELECT * FROM requests 
INNER JOIN requests_products ON requests.id = requests_products.requests_id
INNER JOIN products ON products.id = requests_products.product_id;

-- Lista pedidos concatenado com pedidos-produtos e produtos
-- aplicado com alias
SELECT * FROM requests AS r
INNER JOIN requests_products AS rp ON r.id = rp.requests_id
INNER JOIN products AS p ON p.id = rp.product_id;

-- Lista usuarios concatenado com pedidos
SELECT * FROM users
INNER JOIN requests ON users.id = requests.user_id;

-- Lista usuarios concatenado com pedidos
-- aplicado com alias
SELECT * FROM users AS u
INNER JOIN requests AS r ON u.id = r.user_id;

SELECT * FROM users AS u
LEFT JOIN requests AS r ON u.id = r.user_id;

SELECT * FROM requests AS r
INNER JOIN requests_products AS rp ON r.id = rp.requests_id
RIGHT JOIN products AS p ON p.id = rp.product_id;

-- Criando tabela para armazenar as imagens dos protutos. 
CREATE TABLE image_products (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  urlImage VARCHAR(250) NOT NULL
);

-- Tabela intermediária de imagens e produtos
CREATE TABLE imagnes_products(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  image_products_id INT UNSIGNED,
  product_id INT UNSIGNED,
  FOREIGN KEY (image_products_id) REFERENCES image_products(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
INSERT INTO imagnes_products (image_products_id, product_id)
VALUES 
	(1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6,6),
    (7,7),
    (8,8);
    
SELECT * FROM imagnes_products;

INSERT INTO image_products (urlImage) VALUES
	("https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-b450-aorus-pro-chipset-b450-amd-am4-atx-ddr4_91015.png"),
    ("https://img.terabyteshop.com.br/produto/g/upgrade1277_142961.jpg"),
    ("https://img.terabyteshop.com.br/produto/g/placa-mae-asus-tuf-gaming-x570-plus-chipset-x570-amd-am4-atx-ddr4_124480.png"),
    ("https://img.terabyteshop.com.br/produto/g/ssd-kingston-a400-120gb-sa400s37120g-sata-iii-leitura-500mbs-gravacao-320mbs_58311.jpg"),
    ("https://img.terabyteshop.com.br/produto/g/placa-de-video-gigabyte-geforce-rtx-3060-eagle-oc-12g-lhr-12gb-gddr6-dlss-ray-tracing-gv-n3060eagle-oc-12gd_142662.png"),
    ("https://img.terabyteshop.com.br/produto/g/placa-de-video-powercolor-amd-radeon-rx-6400-itx-4gb-gddr6-fsr-ray-tracing-axrx-6400-4gbd6-dh_146452.png"),
    ("https://img.terabyteshop.com.br/produto/g/ssd-geil-zenith-z3-256gb-sata-iii-leitura-520mbs-e-gravacao-470mbs-gz25z3-256gp_122765.png"),
    ("https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-b450-aorus-pro-chipset-b450-amd-am4-atx-ddr4_91015.png");

SELECT * FROM PRODUCTS JOIN IMAGE_PRODUCTS ON image_products.id = products.id;

-- Inserindo novos produtos (AMD):
INSERT INTO products (name, category, brand, price, inventory, available, urlImage)
VALUES 
	("Processador AMD Ryzen 5 5600X 3.7GHz (4.6GHz Turbo), 6-Cores 12-Threads, Cooler Wraith Stealth, AM4, 100-100000065BOX", "processor", "AMD", 1259.90, 10, 1,
    "https://img.terabyteshop.com.br/produto/g/processador-amd-ryzen-5-5600x-37ghz-46ghz-turbo-6-cores-12-threads-cooler-wraith-stealth-am4_139055.png"),
    ("Placa Mãe Biostar B550MX/E PRO, Chipset B550, AMD AM4, mATX, DDR4", "motherboard", "AMD", 529.99, 6 ,1,
    "https://img.terabyteshop.com.br/produto/g/placa-mae-biostar-b550mxe-pro-chipset-b550-amd-am4-matx-ddr4_138264.jpg"),
    ("Placa de Vídeo AsRock Challenger AMD Radeon RX 6400, ITX, 4GB, GDDR6, FRS, Ray Tracing, RX6400 CLI 4G", "video card", "AMD", 999.00, 20,1,
    "https://img.terabyteshop.com.br/produto/g/placa-de-video-asrock-challenger-itx-amd-radeon-rx-6400-4gb-gddr6-frs-ray-tracing-rx6400-cli-4g_141469.jpg"),
    ("Placa Mãe Gigabyte A320M S2H, Chipset A320, AMD AM4, mATX, DDR4, GA-A320M-S2H","motherboard","AMD",365.00,2,1,"https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-ga-a320m-s2h-ddr4-am4_53707.jpg");