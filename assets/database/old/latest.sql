-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 22, 2018 at 04:59 PM
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

-- --------------------------------------------------------

--
-- Table structure for table `tbl_about`
--

CREATE TABLE `tbl_about` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_about`
--

INSERT INTO `tbl_about` (`id`, `name`, `description`) VALUES
(2, 'black', '<p><span style="color:#000000">roel longcop</span></p>\r\n'),
(8, 'basic', '{"name":"Roel Management System","address":"sunshine","number":"09078267471","facebook":"facebook","gmail":"gmail","twitter":"twitter","skype":"skype","yahoo":"yahoo","terms":"sample terms","description":"We provide team-based, comprehensive dental care for children and adults, including patients of all ages who are anxious or have an underlying developmental or medical condition that may add complexity to the management of their oral health.\\n\\nGeneral Dentistry - preventative and restorative dental care.\\nSpecialized dental care to straighten crooked teeth in children and adults.\\nTreat diseases of the gums and the placement of dental implants.\\nWe are committed to helping you maintain your oral health as an integral part of your overall health and wellness."}');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_account`
--

CREATE TABLE `tbl_account` (
  `id` int(11) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `mi` varchar(1) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `cp_num` varchar(11) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `type` varchar(12) NOT NULL,
  `verify` int(1) NOT NULL,
  `status` int(20) NOT NULL,
  `code` int(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `is_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_account`
--

INSERT INTO `tbl_account` (`id`, `fname`, `mi`, `lname`, `address`, `email`, `pass`, `cp_num`, `gender`, `type`, `verify`, `status`, `code`, `username`, `is_deleted`) VALUES
(1, 'Roel', 'R', 'Longcops', 'San Jose', 'admin@gmail.com', 'admin', '09088267471', 'Male', 'doctor', 1, 0, 4193, 'admin', 0),
(2, 'Roel', 'R', 'Longcops', 'San Jose', 'Longcoproelpatient@gmail.com', 'roel', '09088267471', 'Male', 'patient', 1, 0, 4193, 'roel', 0),
(3, 'Annabelle', 'B', 'Gernale', 'San Jose', 'gernale@gmail.com', 'ann', '09088267471', 'Male', 'patient', 1, 0, 4193, 'ann', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_carousel`
--

CREATE TABLE `tbl_carousel` (
  `id` int(11) NOT NULL,
  `greetings` text NOT NULL,
  `title` text NOT NULL,
  `sub_title` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_carousel`
--

INSERT INTO `tbl_carousel` (`id`, `greetings`, `title`, `sub_title`, `image`) VALUES
(8, 'water', 'jelly', 'fish', 'img/uploads/Jellyfish.jpg'),
(9, 'hello', 'title', 'this is sub', 'img/uploads/Desert.jpg'),
(10, 'this is hydreas', 'flower', 'mongolian', 'img/uploads/Hydrangeas.jpg'),
(11, 'hi there', 'petes', 'penguins', 'img/uploads/Penguins.jpg');

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
(1, 'medicines', 'for health', 0),
(2, 'shoes', 'for feet', 0),
(3, 'cups', 'hats', 0),
(4, 'cleaning', 'cleaning tool', 0),
(5, 'alcohol', 'beverages', 0),
(6, 'foods', 'something that can be eaten', 0),
(7, 'clothes', 'cotton item', 0),
(8, 'zzzz', 'qewwqe', 1),
(9, '123123', '123123', 1),
(10, '123123', '123123', 1),
(11, 'consumable', 'items that is consumable', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

CREATE TABLE `tbl_contact` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_contact`
--

INSERT INTO `tbl_contact` (`id`, `name`, `description`) VALUES
(1, 'facebook', 'gardiola'),
(2, 'phone number', '09079267471'),
(3, 'skype', 'Gardiola@skype.Com'),
(4, 'gmail', 'gardiola@gmail.com'),
(5, 'twitter', 'gardiola@twiiter.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_image`
--

CREATE TABLE `tbl_image` (
  `id` int(11) NOT NULL,
  `path` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_image`
--

INSERT INTO `tbl_image` (`id`, `path`) VALUES
(1, 'img/uploads/crown.jpg'),
(2, 'img/uploads/doctor_logo.jpg'),
(3, 'img/uploads/doctor1.jpg'),
(4, 'img/uploads/doctor2.jpg'),
(5, 'img/uploads/doctor3.jpg'),
(6, 'img/uploads/doctor4.jpg'),
(7, 'img/uploads/Desert.jpg'),
(8, 'img/uploads/Hydrangeas.jpg'),
(9, 'img/uploads/Jellyfish.jpg'),
(10, 'img/uploads/Koala.jpg'),
(11, 'img/uploads/Lighthouse.jpg'),
(12, 'img/uploads/Penguins.jpg'),
(13, 'img/uploads/Tulips.jpg');

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
(1, 'piatoss', 2323.00, 3232, 22, 229, '1586833162', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAeAQMAAAC/hKb5AAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAClJREFUKJFj+Mx/2J6f/zOP8R+Dzwc+/+E5f/68Df+ZDwyj4qPiQ1AcAJaBewz010s3AAAAAElFTkSuQmCC">', 'Safe', 7, 3, 28),
(2, 'samples', 111.00, 111, 11, 20, '1477581434', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAeAQMAAAC/hKb5AAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAACdJREFUKJFj+Mx/mJ///OfP9jY8hw9/ZrbhP8MPxB8YRsVHxYegOABfQUOAgyk5MAAAAABJRU5ErkJggg==">', 'Safe', 11, 3, 23);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_opening`
--

CREATE TABLE `tbl_opening` (
  `id` int(11) NOT NULL,
  `day` varchar(20) NOT NULL,
  `open` varchar(20) NOT NULL,
  `close` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_opening`
--

INSERT INTO `tbl_opening` (`id`, `day`, `open`, `close`) VALUES
(1, 'Monday', '06:00 AM', '06:00 PM');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_package`
--

CREATE TABLE `tbl_package` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `service_id` int(11) NOT NULL,
  `items` text NOT NULL,
  `is_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_package`
--

INSERT INTO `tbl_package` (`id`, `name`, `service_id`, `items`, `is_deleted`) VALUES
(1, 'roelito', 6, '[{"id":"2","name":"samples","unit_name":"bulks","qty":"1"}]', 0),
(2, '2323', 6, '[{"id":"1","name":"piatoss","unit_name":"dozens","qty":"2"},{"id":"1","name":"piatoss","unit_name":"dozens","qty":"1"}]', 1),
(3, '12', 5, '[{"id":"2","name":"samples","unit_name":"bulks","qty":"1"},{"id":"1","name":"piatoss","unit_name":"dozens","qty":"12"}]', 1),
(4, '123', 21, '[{"id":"1","name":"piatoss","unit_name":"dozens","qty":"2"}]', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reservation`
--

CREATE TABLE `tbl_reservation` (
  `id` int(10) NOT NULL,
  `patient_id` int(10) NOT NULL,
  `daystart` varchar(12) NOT NULL,
  `typeser` varchar(50) NOT NULL,
  `r_status` varchar(10) NOT NULL,
  `timestart` varchar(10) NOT NULL,
  `recommendation` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_reservation`
--

INSERT INTO `tbl_reservation` (`id`, `patient_id`, `daystart`, `typeser`, `r_status`, `timestart`, `recommendation`) VALUES
(1, 3, '07/16/2018', 'Dentures and Partial Dentures', 'pending', '13:00 PM', ''),
(2, 3, '07/16/2018', 'Dentures and Partial Dentures', 'finished', '13:00 PM', '123'),
(3, 1, '07/16/2018', 'Dentures and Partial Dentures', 'approved', '13:00 PM', '123123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_service`
--

CREATE TABLE `tbl_service` (
  `id` int(10) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `price` int(10) NOT NULL,
  `is_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_service`
--

INSERT INTO `tbl_service` (`id`, `name`, `description`, `price`, `is_deleted`) VALUES
(1, 'teeth whitening', '<p>Tooth whitening can be a very effective way of lightening the natural colour of your teeth without removing any of the tooth surface.</p>\r\n', 500, 0),
(2, 'implants', '<p>Dental implants may be an option for people who have lost a tooth or teeth due to periodontal disease, an injury, or some other reason.</p>\r\n', 500, 0),
(3, 'Extractions', '<p>In orthodontics if the teeth are crowded, sound teeth may be extracted to create space so the rest of the teeth can be straightened.</p>\r\n', 500, 0),
(4, 'gum disease', '<p>Plaque is the primary cause of gum disease. However, other factors can contribute to periodontal disease.</p>\r\n', 500, 0);

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
(1, 'annabelle''s restaurants', '09073374270', 'pulido GMA', 0),
(2, 'roel''s companys', '09078267471', 'San jose', 0),
(3, 'dessa''s salon', '783482648', 'Paliparan', 0),
(4, 'jeff''s barbershop', '84392748', 'Poblacion 3', 0),
(5, 'karl''s eatery', '38482347', 'gma municipal', 0),
(6, 'xxxxxe', 'qweqw', 'eqwe', 1);

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
(1, '32', 1),
(2, '22', 1),
(3, '12', 1),
(4, 'bundles', 0),
(5, 'o', 1),
(6, 'e', 1),
(7, 'l', 1),
(8, 'eqewwqe', 1),
(9, 'peices', 0),
(10, 'o', 1),
(11, 'c', 1),
(12, 'geqweqwe', 1),
(13, 'cqweqw', 1),
(14, 'o', 1),
(15, 'packs', 1),
(16, 'a', 1),
(17, 'e', 1),
(18, 'dozens', 1),
(19, 'sacks', 0),
(20, 'bags', 1),
(21, 'units', 1),
(22, 'orders', 0),
(23, 'bulks', 0),
(24, 'units', 0),
(25, 'bags', 0),
(26, 'kilos', 0),
(27, '10', 1),
(28, 'dozens', 0),
(29, 'bundles', 1),
(30, 'packs', 1),
(31, 'pieces', 1),
(32, '5', 1),
(33, '4', 1),
(34, '3', 1),
(35, '2', 1),
(36, '1', 1),
(37, 'peices', 1),
(38, 'packs', 1),
(39, 'bundles', 1),
(40, 'aaaaa', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_about`
--
ALTER TABLE `tbl_about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_account`
--
ALTER TABLE `tbl_account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_carousel`
--
ALTER TABLE `tbl_carousel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_image`
--
ALTER TABLE `tbl_image`
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
-- Indexes for table `tbl_opening`
--
ALTER TABLE `tbl_opening`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_package`
--
ALTER TABLE `tbl_package`
  ADD PRIMARY KEY (`id`),
  ADD KEY `service_id` (`service_id`);

--
-- Indexes for table `tbl_reservation`
--
ALTER TABLE `tbl_reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `tbl_service`
--
ALTER TABLE `tbl_service`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_about`
--
ALTER TABLE `tbl_about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `tbl_account`
--
ALTER TABLE `tbl_account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_carousel`
--
ALTER TABLE `tbl_carousel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tbl_image`
--
ALTER TABLE `tbl_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `tbl_item`
--
ALTER TABLE `tbl_item`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_opening`
--
ALTER TABLE `tbl_opening`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tbl_package`
--
ALTER TABLE `tbl_package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_reservation`
--
ALTER TABLE `tbl_reservation`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_service`
--
ALTER TABLE `tbl_service`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_supplier`
--
ALTER TABLE `tbl_supplier`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `tbl_unit`
--
ALTER TABLE `tbl_unit`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
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
-- Constraints for table `tbl_package`
--
ALTER TABLE `tbl_package`
  ADD CONSTRAINT `tbl_package_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `tbl_service` (`id`);

--
-- Constraints for table `tbl_reservation`
--
ALTER TABLE `tbl_reservation`
  ADD CONSTRAINT `tbl_reservation_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `tbl_account` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
