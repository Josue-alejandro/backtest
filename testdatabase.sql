-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2023 at 07:57 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `datos`
--

CREATE TABLE `datos` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `binario` blob DEFAULT NULL,
  `hora` time NOT NULL,
  `seleccion_multiple` enum('opcion1','opcion2','opcion3') NOT NULL,
  `multiseleccion` set('opcion1','opcion2','opcion3') NOT NULL,
  `ubicacion` varchar(255) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `Cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `datos`
--

INSERT INTO `datos` (`id`, `descripcion`, `fecha`, `binario`, `hora`, `seleccion_multiple`, `multiseleccion`, `ubicacion`, `numero`, `precio`, `Cantidad`) VALUES
(9, 'Segundo Dato 2', '2023-02-23', 0x756e646566696e6564, '15:45:00', 'opcion3', 'opcion2,opcion3', 'Montreal', 1273, 330, 0),
(16, 'Tercer Dato', '2023-02-16', 0x756e646566696e6564, '21:23:00', 'opcion3', 'opcion1,opcion2', 'Palmar', 134, 12.24, 0),
(33, 'nuevo registro', '2023-02-16', 0x756e646566696e6564, '12:31:00', 'opcion1', 'opcion1,opcion2', 'Ubicacion', 123, 13.2, 0),
(34, 'nuevo registro', '2023-02-16', 0x756e646566696e6564, '12:31:00', 'opcion1', 'opcion1,opcion2', 'Ubicacion', 123, 13.2, 0),
(41, 'asdasd', '2023-02-15', 0x756e646566696e6564, '12:31:00', 'opcion1', 'opcion2,opcion3', 'Ubicacion', 123, 123, 23),
(42, 'asdasd', '2023-02-14', 0x756e646566696e6564, '12:31:00', 'opcion2', 'opcion1,opcion2', 'Ubicacion', 123, 123, 232),
(43, 'asdasd', '2023-02-01', 0x756e646566696e6564, '00:00:00', 'opcion2', 'opcion2,opcion3', 'asd', 123, 123, 22),
(44, 'asdasd', '2023-02-01', 0x756e646566696e6564, '00:00:00', 'opcion2', 'opcion2,opcion3', 'asd', 123, 123, 22);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` enum('administrativo','visitante') NOT NULL DEFAULT 'visitante'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `rol`) VALUES
(1, 'Juan Pérez', 'juanperez@gmail.com', 'secretpassword1', 'administrativo'),
(2, 'María García', 'mariagarcia@gmail.com', 'secretpassword2', 'visitante');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `datos`
--
ALTER TABLE `datos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `datos`
--
ALTER TABLE `datos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
