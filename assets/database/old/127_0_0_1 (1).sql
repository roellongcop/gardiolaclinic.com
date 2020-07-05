-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2018 at 12:22 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pos`
--
CREATE DATABASE IF NOT EXISTS `db_pos` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `db_pos`;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `is_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`id`, `name`, `description`, `is_deleted`) VALUES
(1, 'Cleaning Only1', 'Tools equipment1', 1),
(2, 'Qwe3', 'Qwe3', 1),
(3, 'Shoes2', 'Forfeet2', 1),
(4, 'Foods Only5', 'Eating5', 1),
(5, 'Sample4', 'ForSample4', 1),
(6, 'Roel', 'Roel sample', 1),
(7, 'Wqe', 'Qwe', 1),
(8, '41', '41a', 1),
(9, '31', '31a', 1),
(10, '21', '21a', 1),
(11, '11', '11a', 1),
(12, '1123', '22123', 1),
(13, 'Dzx', 'Cxzc', 1),
(14, 'Eqweqwe', 'Wqewqe', 1),
(15, 'Dsad', 'Sads', 1),
(16, 'Dsadsa', 'Dasdsad', 1),
(17, 'Ds', 'Dsa', 1),
(18, 'Qwe', 'Qwe', 1),
(19, 'Xx', 'Xx', 1),
(20, '1', '1', 1),
(21, '3', '3', 1),
(22, '2', '2', 1),
(23, 'Shoe', 'Feet', 0),
(24, 'Drink', 'Waters', 0),
(25, 'Food', 'Eating', 0),
(26, 'Appliances', 'Harwares', 0),
(27, 'Transportation', 'Items for transportaion', 0),
(28, 'Beauty', 'For beauty product', 0),
(29, 'Clothe', 'For clothing', 0),
(30, 'Bags', 'For holding items', 0),
(31, 'Reading material', 'Books for read', 0),
(32, 'School', 'Supplies', 0),
(33, 'Electric', 'Plugs', 0),
(34, 'Cleaning material', 'Sample', 0),
(35, 'N/A', 'N/A', 0),
(36, 'Zz', 'Sdd', 1),
(37, 'Roelito', 'Longcop', 0),
(38, '222', '222', 1),
(39, '112', '112', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_item`
--

CREATE TABLE `tbl_item` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float(10,2) NOT NULL,
  `max` int(10) NOT NULL,
  `min` int(10) NOT NULL,
  `quantity` int(10) NOT NULL,
  `serial` varchar(15) NOT NULL,
  `barcode` text NOT NULL,
  `stock` varchar(10) NOT NULL,
  `category_id` int(10) NOT NULL,
  `supplier_id` int(10) NOT NULL,
  `unit_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_item`
--

INSERT INTO `tbl_item` (`id`, `name`, `price`, `max`, `min`, `quantity`, `serial`, `barcode`, `stock`, `category_id`, `supplier_id`, `unit_id`) VALUES
(1, 'Television Flat Screen', 13.00, 300, 20, 10, '1068274013', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAeAQMAAAC/hKb5AAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAACdJREFUKJFj+Mx/+DAzDzO/vY3BB2MgxfP5gw3/mQ8Mo+Kj4kNQHADoAQZUY9IFWAAAAABJRU5ErkJggg==">', 'Critical', 25, 2, 5),
(2, 'Evangelista', 350.00, 200, 10, 41, '1045481131', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAeAQMAAAC/hKb5AAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAClJREFUKJFj+Mx/+DAzz58P9vY2HwwOn2c+c+CDDf+ZDwyj4qPiQ1AcAAZjdcbO0IQbAAAAAElFTkSuQmCC">', 'Safe', 23, 4, 9),
(3, 'Laptop', 100.00, 100, 5, 35, '0006089920', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAeAQMAAAC/hKb5AAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAClJREFUKJFj+Mx/+Dw/j42BgY3B+fOfD/Of5/ljw3/mA8Oo+Kj4EBQHANAVSSDofjJcAAAAAElFTkSuQmCC">', 'Safe', 31, 2, 17),
(4, 'Flores Lancer', 200.00, 100, 10, 19, '0013197038', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAeAQMAAAC/hKb5AAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAClJREFUKJFj+Mx/+Dw/j80fG+MP5xkOMx84z2xgw3/mA8Oo+Kj4EBQHADGTP0gg8D61AAAAAElFTkSuQmCC">', 'Safe', 24, 4, 17),
(5, 'Shirts', 1000.00, 100, 10, 3, '479811440', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAAeAQMAAABXBBPSAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAC1JREFUKJFj+Mx/mPnz+c/MNjwGBz5/tj9/xt7GxuDPB3vjAwyjUqNSo1IwKQCJP5S2RfV0sQAAAABJRU5ErkJggg==">', 'Critical', 30, 4, 6),
(6, 'Piatos', 223.00, 11111, 110, 2, '60914227', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAAAeAQMAAADn+zXgAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAACZJREFUKJFj+Mx/+POf85/PG58/8OfDYR7m88yfbRhGBUcFaSkIAD7Xf0S+h9jxAAAAAElFTkSuQmCC">', 'Critical', 34, 5, 7),
(7, 'Nike', 2222.00, 2222, 2, 0, '372359963', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAAeAQMAAABXBBPSAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAC1JREFUKJFj+Mx/mPkM/3l7e+Yz5z8Y258/z/PH3uDDB3vjAwyjUqNSo1IwKQC7mYjCrt45GAAAAABJRU5ErkJggg==">', 'Empty', 32, 6, 7),
(8, 'Nokia Phone', 200.00, 1111, 1, 91, '836009899', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAAeAQMAAABXBBPSAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAACxJREFUKJFj+Mx/2P4w//nPNgYHPp//bH/+/GEbIPhgb3yAYVRqVGpUCiYFAGSOqRo6so0vAAAAAElFTkSuQmCC">', 'Safe', 24, 2, 11),
(9, 'Electric fan (small)', 450.00, 200, 10, 444, '1661280966', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAeAQMAAAC/hKb5AAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAChJREFUKJFj+Mx/mP88Pw+zPb/Bh8PMPMznGQ7b8J/5wDAqPio+BMUB1yYCdskJeuYAAAAASUVORK5CYII=">', 'Full', 34, 3, 12),
(10, 'Zippers', 1111.00, 111, 11, 22, '1753806620', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAeAQMAAAC/hKb5AAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAClJREFUKJFj+Mx/mP/weXt7Y/4Phxk+H+Y/w89jw3/mA8Oo+Kj4EBQHAF49PHiSHNR8AAAAAElFTkSuQmCC">', 'Safe', 33, 6, 17);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sales`
--

CREATE TABLE `tbl_sales` (
  `id` int(11) NOT NULL,
  `item` text NOT NULL,
  `total` float(10,2) NOT NULL,
  `customer_id` varchar(20) NOT NULL,
  `sale_date` varchar(20) NOT NULL,
  `user_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_sales`
--

INSERT INTO `tbl_sales` (`id`, `item`, `total`, `customer_id`, `sale_date`, `user_id`) VALUES
(1, ' (1) Evangelista = 350.00<br> (1) Elpedes Mary Grace = 13.00<br>', 363.00, '2018-06-30-0', '2018-06-30', 2),
(2, ' (7) Electric fan (small) = 3150.00<br> (4) Nokia Phone = 800.00<br> (11) Shirt = 11000.00<br> (4) Flores Lancer = 800.00<br> (22) Longcop laptops = 2200.00<br> (3) Evangelista = 1050.00<br> (9) Elpedes Mary Grace = 117.00<br>', 19117.00, '2018-06-30-1', '2018-06-30', 2),
(3, ' (1) Shirt = 1000.00<br> (1) Evangelista = 350.00<br> (8) Flores Lancer = 1600.00<br>', 2950.00, '2018-06-30-2', '2018-06-30', 2),
(4, ' (2) Shirts = 2000.00<br> (3) Flores Lancer = 600.00<br> (1) Laptop = 100.00<br> (1) Evangelista = 350.00<br>', 3050.00, '2018-07-01-3', '2018-07-01', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_supplier`
--

CREATE TABLE `tbl_supplier` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `is_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_supplier`
--

INSERT INTO `tbl_supplier` (`id`, `name`, `telephone`, `address`, `is_deleted`) VALUES
(1, 'Jeff''s barbershops', '09078267474', 'Poblacion 3s', 0),
(2, 'Dessa''s restaurants', '09078267473', 'Paliparans', 0),
(3, 'Roel''s programming companys', '09078267471', 'San joses', 0),
(4, 'Annabelle''s parlors', '0907826747', 'Pulido', 0),
(5, 'Karl''s restos', '2312', 'Municipal hall', 1),
(6, 'Taba''s com shops', '787979', 'Parish', 0),
(7, '12', '12', '12', 1),
(8, '12', '12', '12', 1),
(9, '12', '12', '12', 1),
(10, 'Dsad', 'Sdas', 'Dasd', 1),
(11, 'Pogi', '1', '1', 1),
(12, 'B', '2', '2', 1),
(13, 'C', '1', '1', 1),
(14, 'D', '2', '2', 1),
(15, '11', '11', '11', 1),
(16, '22', '22', '22', 1),
(17, 'X', 'X', 'X', 1),
(18, 'Y', 'Y', 'Y', 1),
(19, 'Z', 'Z', 'Z', 1),
(20, 'Iam', 'Aa', 'Aa', 1),
(21, 'Bb', 'Bb', 'Bb', 1),
(22, 'Cc', 'Cc', 'Cc', 1),
(23, 'Grace''s mall', '324323432', 'Binan city', 0),
(24, 'N/A', 'N/A', 'N/A', 0),
(25, 'John''s school supplies', '123123123', 'San josenians', 0),
(26, '22', '22', '22', 1),
(27, '11', '111', '11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_unit`
--

CREATE TABLE `tbl_unit` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `is_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_unit`
--

INSERT INTO `tbl_unit` (`id`, `name`, `is_deleted`) VALUES
(1, 'A', 1),
(2, 'A', 1),
(3, 'A', 1),
(4, 'Box is good', 1),
(5, 'Bundle', 0),
(6, 'Dozen', 0),
(7, 'Kilo', 0),
(8, 'Metre', 0),
(9, 'Pack', 0),
(10, 'Sanchet', 0),
(11, 'Bags', 0),
(12, 'Unit', 0),
(13, 'Jag', 0),
(14, 'N/A', 0),
(15, 'Boxes', 0),
(16, 'Cart', 0),
(17, 'Pieces', 0),
(18, 'Litre', 0),
(19, 'Watts', 0),
(20, 'S', 1),
(21, 'A', 1),
(22, 'L', 1),
(23, 'E', 1),
(24, '222', 1),
(25, '1111', 1),
(26, '3333', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(10) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `user` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `username`, `password`, `user`) VALUES
(1, 'admin', 'roel', 'Administrator'),
(2, 'roel', 'roel', 'Assistant');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_item`
--
ALTER TABLE `tbl_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category_id`),
  ADD KEY `supplier_id` (`supplier_id`),
  ADD KEY `unit_id` (`unit_id`);

--
-- Indexes for table `tbl_sales`
--
ALTER TABLE `tbl_sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tbl_supplier`
--
ALTER TABLE `tbl_supplier`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_unit`
--
ALTER TABLE `tbl_unit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT for table `tbl_item`
--
ALTER TABLE `tbl_item`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `tbl_sales`
--
ALTER TABLE `tbl_sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_supplier`
--
ALTER TABLE `tbl_supplier`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `tbl_unit`
--
ALTER TABLE `tbl_unit`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_item`
--
ALTER TABLE `tbl_item`
  ADD CONSTRAINT `tbl_item_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`id`),
  ADD CONSTRAINT `tbl_item_ibfk_2` FOREIGN KEY (`supplier_id`) REFERENCES `tbl_supplier` (`id`),
  ADD CONSTRAINT `tbl_item_ibfk_3` FOREIGN KEY (`unit_id`) REFERENCES `tbl_unit` (`id`);

--
-- Constraints for table `tbl_sales`
--
ALTER TABLE `tbl_sales`
  ADD CONSTRAINT `tbl_sales_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
