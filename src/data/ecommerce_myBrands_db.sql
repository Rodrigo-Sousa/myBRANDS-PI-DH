-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22/09/2025 às 16:25
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ecommerce_mybrands_db`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `image_products`
--

CREATE TABLE `image_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `urlImage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `image_products`
--

INSERT INTO `image_products` (`id`, `urlImage`) VALUES
(1, 'https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-b450-aorus-pro-chipset-b450-amd-am4-atx-ddr4_91015.png'),
(2, 'https://img.terabyteshop.com.br/produto/g/upgrade1277_142961.jpg'),
(3, 'https://img.terabyteshop.com.br/produto/g/placa-mae-asus-tuf-gaming-x570-plus-chipset-x570-amd-am4-atx-ddr4_124480.png'),
(4, 'https://img.terabyteshop.com.br/produto/g/ssd-kingston-a400-120gb-sa400s37120g-sata-iii-leitura-500mbs-gravacao-320mbs_58311.jpg'),
(5, 'https://img.terabyteshop.com.br/produto/g/placa-de-video-gigabyte-geforce-rtx-3060-eagle-oc-12g-lhr-12gb-gddr6-dlss-ray-tracing-gv-n3060eagle-oc-12gd_173642.jpg'),
(6, 'https://img.terabyteshop.com.br/produto/g/placa-de-video-gigabyte-geforce-rtx-3060-eagle-oc-12g-lhr-12gb-gddr6-dlss-ray-tracing-gv-n3060eagle-oc-12gd_173642.jpg'),
(7, 'https://img.terabyteshop.com.br/produto/g/ssd-geil-zenith-z3-256gb-sata-iii-leitura-520mbs-e-gravacao-470mbs-gz25z3-256gp_122765.png'),
(8, 'https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-b450-aorus-pro-chipset-b450-amd-am4-atx-ddr4_91015.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `imagnes_products`
--

CREATE TABLE `imagnes_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `image_products_id` int(10) UNSIGNED DEFAULT NULL,
  `product_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `imagnes_products`
--

INSERT INTO `imagnes_products` (`id`, `image_products_id`, `product_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8);

-- --------------------------------------------------------

--
-- Estrutura para tabela `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(250) NOT NULL,
  `category` varchar(50) NOT NULL,
  `brand` varchar(200) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `inventory` int(250) NOT NULL,
  `available` int(10) UNSIGNED DEFAULT 0,
  `urlImage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `brand`, `price`, `inventory`, `available`, `urlImage`) VALUES
(1, 'AMD Radeon RX 550, 8GB, Preto', 'motherboard', 'AMD', 4769.00, 12, 1, 'https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-b450-aorus-pro-chipset-b450-amd-am4-atx-ddr4_91015.png'),
(2, 'Redragon Cobra, Chroma RGB, 12400DPI, 7 Botões, Preto', 'mouse', 'Redragon', 1540.30, 15, 1, 'https://img.terabyteshop.com.br/produto/g/upgrade1277_142961.jpg'),
(3, 'Cloud Stinger, Drivers 50mm, Múltiplas Plataformas, P2 e P3', 'motherboard', 'HyperX', 1399.00, 18, 1, 'https://img.terabyteshop.com.br/produto/g/placa-mae-asus-tuf-gaming-x570-plus-chipset-x570-amd-am4-atx-ddr4_124480.png'),
(4, 'SSD Kingston A400, 120GB, Sata III, Leitura 500MBs Gravação 320MBs, SA400S37/120G', 'ssd', 'Kingston', 180.00, 120, 1, 'https://img.terabyteshop.com.br/produto/g/ssd-kingston-a400-120gb-sa400s37120g-sata-iii-leitura-500mbs-gravacao-320mbs_58311.jpg'),
(5, 'Placa de Vídeo Gigabyte GeForce RTX 3060 EAGLE OC 12G, LHR, 12GB, GDDR6, DLSS, Ray Tracing, GV-N3060EAGLE OC-12GD', 'video card', 'Gigabyte', 2599.00, 40, 1, 'https://img.terabyteshop.com.br/produto/g/placa-de-video-gigabyte-geforce-rtx-3060-eagle-oc-12g-lhr-12gb-gddr6-dlss-ray-tracing-gv-n3060eagle-oc-12gd_173642.jpg'),
(6, 'Placa de Vídeo PowerColor AMD Radeon RX 6400 ITX, 4GB, GDDR6, FSR, Ray Tracing, AXRX 6400 4GBD6-DH', 'video card', 'PowerColor', 1099.00, 4, 1, 'https://img.terabyteshop.com.br/produto/g/placa-de-video-powercolor-amd-radeon-rx-6400-itx-4gb-gddr6-fsr-ray-tracing-axrx-6400-4gbd6-dh_146452.png'),
(7, 'SSD Geil Zenith Z3, 256GB, Sata III, Leitura 520MBs e Gravação 470MBs, GZ25Z3-256GP', 'ssd', 'Zenith', 300.00, 14, 1, 'https://img.terabyteshop.com.br/produto/g/ssd-geil-zenith-z3-256gb-sata-iii-leitura-520mbs-e-gravacao-470mbs-gz25z3-256gp_122765.png'),
(8, 'Placa de Vídeo Inno3D GeForce GTX 1650 Twin X2, 4GB GDDR6, 128Bit, N16502K-04D6', 'motherboard', 'Inno3d', 1769.00, 12, 1, 'https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-b450-aorus-pro-chipset-b450-amd-am4-atx-ddr4_91015.png'),
(9, 'Processador AMD Ryzen 5 5600X 3.7GHz (4.6GHz Turbo), 6-Cores 12-Threads, Cooler Wraith Stealth, AM4, 100-100000065BOX', 'processor', 'AMD', 1259.90, 10, 1, 'https://img.terabyteshop.com.br/produto/g/processador-amd-ryzen-5-5600x-37ghz-46ghz-turbo-6-cores-12-threads-cooler-wraith-stealth-am4_139055.png'),
(10, 'Placa Mãe Biostar B550MX/E PRO, Chipset B550, AMD AM4, mATX, DDR4', 'motherboard', 'AMD', 529.99, 6, 1, 'https://img.terabyteshop.com.br/produto/g/placa-mae-biostar-b550mxc-pro-chipset-b550-amd-am4-matx-ddr4_174623.jpg'),
(11, 'Placa de Vídeo AsRock Challenger AMD Radeon RX 6400, ITX, 4GB, GDDR6, FRS, Ray Tracing, RX6400 CLI 4G', 'video card', 'AMD', 999.00, 20, 1, 'https://img.terabyteshop.com.br/produto/g/placa-de-video-asrock-challenger-itx-amd-radeon-rx-6400-4gb-gddr6-frs-ray-tracing-rx6400-cli-4g_141469.jpg'),
(12, 'Placa Mãe Gigabyte A320M S2H, Chipset A320, AMD AM4, mATX, DDR4, GA-A320M-S2H', 'motherboard', 'AMD', 365.00, 2, 1, 'https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-ga-a320m-s2h-ddr4-am4_53707.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `requests`
--

CREATE TABLE `requests` (
  `id` int(10) UNSIGNED NOT NULL,
  `create_at` datetime NOT NULL,
  `status` enum('processando','a caminho','entregue') DEFAULT 'processando',
  `user_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `requests`
--

INSERT INTO `requests` (`id`, `create_at`, `status`, `user_id`) VALUES
(1, '2022-08-20 12:22:00', 'entregue', 2),
(2, '2022-02-18 20:49:00', 'entregue', 3),
(3, '2022-04-20 21:29:00', 'processando', 1),
(4, '2022-05-28 22:59:00', 'processando', 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `requests_products`
--

CREATE TABLE `requests_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `requests_id` int(10) UNSIGNED DEFAULT NULL,
  `product_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `requests_products`
--

INSERT INTO `requests_products` (`id`, `requests_id`, `product_id`) VALUES
(1, 6, 5),
(2, 6, 2),
(3, 7, 1),
(4, 8, 5),
(5, 8, 6);

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `birthdate` date DEFAULT NULL,
  `cpf` varchar(11) NOT NULL,
  `picture` varchar(250) DEFAULT NULL,
  `phone` varchar(10) NOT NULL,
  `celphone` varchar(11) NOT NULL,
  `is_admin` tinyint(4) DEFAULT 0,
  `bredIn` datetime DEFAULT NULL,
  `changedIn` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `senha`, `birthdate`, `cpf`, `picture`, `phone`, `celphone`, `is_admin`, `bredIn`, `changedIn`) VALUES
(1, 'Renata Pereira', 'renata@email.com', '$2a$12$a0CWtXE6ZC6hOgZ5dso2uuHRfDpKHoIfSDsJJClfhqnp5q9MZe7ci', '1999-11-10', '24150385041', 'https://i.pravatar.cc/300?img=1', '1130313130', '11999999999', 0, '2025-09-22 10:27:21', '2025-09-22 10:27:21'),
(2, 'Thiago Gomes', 'cava.lo.marinho@email.com', '$2a$12$TDkHzZvN/HOBKTCh7g730ekHcrY/EM/O4N0R3ORLeTGfxclU8YnJ6', '1987-12-30', '37238095025', 'https://i.pravatar.cc/300?img=12', '2733333333', '27999969969', 0, '2025-09-22 10:27:21', '2025-09-22 10:27:21'),
(3, 'Leticia Correia', 'correia@email.com', '$2a$12$X1ZUDZN3O4f9MEdgx9l5GuEgvryxlic52dI2kUJZWQmXpQOZSWgUm', '2000-03-01', '02424325065', 'https://i.pravatar.cc/300?img=10', '4139319930', '41939393939', 0, '2025-09-22 10:27:21', '2025-09-22 10:27:21'),
(4, 'Reginaldo Silva', 'regis@email.com', '$2a$12$lw2SpPYY.mT2bhaNyPNJxuTKNDPdw8K67eZ7Lu6xF0BNE.SpiJCP6', '1998-04-12', '13644998000', 'https://i.pravatar.cc/300?img=3', '7432323120', '74992292929', 0, '2025-09-22 10:27:21', '2025-09-22 10:27:21'),
(5, 'Joaquim Souza', 'joaquim.souza@email.com', '$2a$12$uuNqug53ETwzc3g/raTox.SVsqGIJvM3EI0PwoFOSmpPDFJiiy50e', '1980-08-22', '10619473002', 'https://i.pravatar.cc/300?img=6', '3532627131', '35922642829', 1, '2025-09-22 10:27:21', '2025-09-22 10:27:21'),
(6, 'Teste do Dia', 'testedodia@email.com.br', '$2b$10$H.E6p57lmyuuNm2gMo6wG.yKQLgJnk95oUssqCvun.6K9btixrQXi', '1998-04-24', '84422542001', 'https://i.pravatar.cc/300?img=50', '1130303031', '1199989989', 0, NULL, NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `image_products`
--
ALTER TABLE `image_products`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `imagnes_products`
--
ALTER TABLE `imagnes_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `image_products_id` (`image_products_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Índices de tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices de tabela `requests_products`
--
ALTER TABLE `requests_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `requests_id` (`requests_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `image_products`
--
ALTER TABLE `image_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `imagnes_products`
--
ALTER TABLE `imagnes_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `requests_products`
--
ALTER TABLE `requests_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `imagnes_products`
--
ALTER TABLE `imagnes_products`
  ADD CONSTRAINT `imagnes_products_ibfk_1` FOREIGN KEY (`image_products_id`) REFERENCES `image_products` (`id`),
  ADD CONSTRAINT `imagnes_products_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Restrições para tabelas `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Restrições para tabelas `requests_products`
--
ALTER TABLE `requests_products`
  ADD CONSTRAINT `requests_products_ibfk_1` FOREIGN KEY (`requests_id`) REFERENCES `requests` (`id`),
  ADD CONSTRAINT `requests_products_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
