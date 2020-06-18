-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql10.freemysqlhosting.net
-- Generation Time: Jun 12, 2020 at 11:51 PM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql10346493`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(100) NOT NULL,
  `status` varchar(50) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `description` varchar(200) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `amount` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `status`, `time`, `description`, `payment_method`, `user_id`, `address`, `amount`) VALUES
(1, 'Nuevo', '2020-06-12 23:40:20', '1 Milanesa napolitana con papas fritas, 1 lomo al champignon', 'tarjeta', 'Armandoestebanquito', 'olimpia 1409', '55'),
(2, 'Nuevo', '2020-06-12 23:40:27', '1 tallarines a la pomarola', 'efectivo', 'NicolasMarri', 'Av.Colón 5050', '650');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `price` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `description`, `price`) VALUES
(1, 'Lomo al champignon con papas a la crema', '$ 300'),
(2, 'tallarines a la pomarola', '$ 250'),
(3, 'Milanesa a la napolitana con papas fritas', '$ 300');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

[6:30 p. m., 17/6/2020] Lucas Primo: router.post('/order', async (req, res) => {
    const user = req.user;
    try {
        const { status, description, payment_method, address, product_id } = req.body
        const insertOrderQuery = 'INSERT INTO orders (id, status, time, description, payment_method, user_id, address, product_id) VALUES (?,?,?,?,?,?,?,?);';
        await dbConnection.query(insertOrderQuery,
            { replacements: [Math.floor(Math.random() * 10000000), status, new Date(), description, payment_method, user.id, address, product_id] });
        return res.status(200).json({ status: 'order created' });
    } catch (error) {
        return res.status(500).json({ error: error })
    }
})


 CREATE TABLE `orders` (
  `id` int(100) NOT NULL,
  `status` varchar(50) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `description` varchar(200) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `product_id` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `status`, `time`, `description`, `payment_method`, `user_id`, `address`, `product_id`) VALUES
(1, 'Nuevo', '2020-06-12 23:40:20', '1 Milanesa napolitana con papas fritas, 1 lomo al champignon', 'tarjeta', 'Armandoestebanquito', 'olimpia 1409', '1'),
(2, 'Nuevo', '2020-06-12 23:40:27', '1 tallarines a la pomarola', 'efectivo', 'NicolasMarri', 'Av.Colón 5050', '2');


-- --
-- -- Dumping data for table `users`
-- --

INSERT INTO `users` (`id`, `user`, `name`, `email`, `phone`, `address`, `password`, `rol`) VALUES
(1, 'nicolasmarri', 'Nicolas Marri', 'nicomarri22@gmail.com', '351-3039834', 'AV.colon 5050', 'nico123', 'admin'),
(2, 'armandoestebanquito', 'Armando Esteban Quito', 'armandinho88@gmail.com', '253-3456345', 'olimpia 1409', 'arman100pre', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
