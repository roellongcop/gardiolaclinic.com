-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 05, 2018 at 11:34 AM
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
(2, 'History', '<p>We Provide Team-Based, Comprehensive Dental Care For Children And Adults, Including Patients Of All Ages Who Are Anxious Or Have An Underlying Developmental Or Medical Condition That May Add Complexity To The Management Of Their Oral Health.</p>\r\n\r\n<p>General Dentistry - Preventative And Restorative Dental Care.<br />\r\nSpecialized Dental Care To Straighten Crooked Teeth In Children And Adults.<br />\r\nTreat Diseases Of The Gums And The Placement Of Dental Implants.<br />\r\nWe Are Committed To Helping You Maintain Your Oral Health As An Integral Part Of Your Overall Health And Wellness.</p>\r\n'),
(3, 'Images', '<p><img src="http://localhost/gardiolaclinic.com/img/uploads/6.jpg" style="height:50px; width:50px" /></p>\r\n'),
(4, 'basic', '{"name":"Gardiola clinic management s","address":"sunshine blk 1","number":"09087823231","facebook":"gardiola","gmail":"gardiola@gmail.com","twitter":"gardiola@twitter","skype":"gardiola@sype","yahoo":"gardiola@yahoo.","description":"Open the Application Preferences\\nSelect \\u201cText Encodings\\u201d on the left.\\nIn \\u201cDefault text encoding for new documents\\u201d, select \\u201cUnicode (UTF-8, no BOM)\\u201d\\nOptional: In \\u201cIf file\\u2019s encoding can\\u2019t be guessed, use\\u201d, select \\u201cUnicode (UTF-8, no BOM)\\u201d\\nSelect \\u201cText Files\\u201d on the left.\\nIn \\u201cDefault line breaks\\u201d, select \\u201cMac OS X and Unix (LF)\\u201d","terms":"The PHP closing tag on a PHP document ?> is optional to the PHP parser. However, if used, any whitespace following the closing tag, whether introduced by the developer, user, or an FTP application, can cause unwanted output, PHP errors, or if the latter are suppressed, blank pages. For this reason, all PHP files MUST OMIT the PHP closing tag and end with a single empty line instead."}');

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
(10001, 'Roel', 'R', 'Longcop', 'San Jose GMA', 'admin@gmail.com', 'aide', '09088267471', 'Male', 'dentalaide', 1, 0, 3509, 'aide', 0),
(10002, 'Roel', 'R', 'Longcop', 'San Jose', 'maronbuilders@gmail.com', 'roel', '4567', 'Male', 'patient', 1, 0, 4292, 'roel', 0),
(10003, 'Dessa', 'L', 'Evangelista', 'Paliparan', 'dess@gmail.com', 'walkin673970161', '09078267471', 'Female', 'patient', 1, 0, 174704255, 'walkin230483243', 0);

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
(1, 'Good Day', 'Jelly Fish', 'long live', 'img/uploads/6.jpg'),
(2, 'Hi', 'Plants', 'brazil', 'img/uploads/Hydrangeas.jpg'),
(3, 'Hello There', 'Dessert', 'africa', 'img/uploads/2.jpg'),
(4, 'Hi', 'Pete', 'penguins', 'img/uploads/Penguins.jpg');

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
(1, 'Not Consumable', 'Not Consumable', 0),
(2, 'Consumable', 'Consumable Items', 0),
(5, 'Clothes', 'Clothing', 0),
(6, 'Shoes', 'For Feet', 0),
(7, 'Ads', 'Asd', 1),
(8, 'Shelter', 'Shelter Items', 0);

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
(1, 'img/uploads/2.jpg'),
(3, 'img/uploads/3.jpg'),
(4, 'img/uploads/4.jpg'),
(5, 'img/uploads/5.jpg'),
(6, 'img/uploads/6.jpg'),
(7, 'img/uploads/7.jpg'),
(8, 'img/uploads/8.jpg'),
(9, 'img/uploads/Chrysanthemum.jpg'),
(15, 'img/uploads/Desert.jpg'),
(16, 'img/uploads/Hydrangeas.jpg'),
(17, 'img/uploads/Jellyfish.jpg'),
(18, 'img/uploads/Koala.jpg'),
(19, 'img/uploads/Lighthouse.jpg'),
(20, 'img/uploads/Penguins.jpg'),
(21, 'img/uploads/Tulips.jpg');

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
  `stock` varchar(10) NOT NULL,
  `category_id` int(10) NOT NULL,
  `supplier_id` int(10) NOT NULL,
  `unit_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_item`
--

INSERT INTO `tbl_item` (`id`, `name`, `price`, `max`, `min`, `quantity`, `stock`, `category_id`, `supplier_id`, `unit_id`) VALUES
(1, 'Shoe', 2000.00, 100, 10, 20, 'Safe', 1, 1, 3),
(2, 'Watch', 200.00, 200, 20, 100, 'Safe', 2, 3, 3),
(3, 'Box, Annabelle, Consumable', 1212.00, 12, 1, 22, 'Full', 2, 3, 5);

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
(1, 'Sunday', 'CLOSED', 'CLOSED'),
(2, 'Tuesday', '09:00 AM', '08:00 AM'),
(3, 'Thursday', '05:00 PM', '07:00 PM'),
(4, 'Wednesday', '12:00 PM', '10:00 AM');

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

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reservation`
--

CREATE TABLE `tbl_reservation` (
  `id` int(10) NOT NULL,
  `patient_id` int(10) NOT NULL,
  `daystart` text NOT NULL,
  `typeser` varchar(50) NOT NULL,
  `r_status` varchar(10) NOT NULL,
  `timestart` varchar(20) NOT NULL,
  `recommendation` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_reservation`
--

INSERT INTO `tbl_reservation` (`id`, `patient_id`, `daystart`, `typeser`, `r_status`, `timestart`, `recommendation`) VALUES
(1, 10002, '2018/07/31', 'Implants', 'approved', '8:00 AM - 9:00 AM', 'N/A'),
(2, 10002, '2018/07/31', 'Teeth Whitening', 'approved', '9:00 AM - 10:00 AM', 'N/A'),
(3, 10002, '2018/07/31', 'Implants', 'approved', '10:00 AM - 11:00 AM', 'N/A'),
(4, 10002, '2018/07/31', 'Implants', 'approved', '11:00 AM - 12:00 PM', 'N/A'),
(5, 10002, '2018/07/31', 'Implants', 'approved', '1:00 PM - 2:00 PM', 'N/A'),
(6, 10002, '2018/07/31', 'Extractions', 'approved', '2:00 PM - 3:00 PM', 'something'),
(7, 10002, '2018/07/31', 'Teeth Whitening', 'approved', '4:00 PM - 5:00 PM', 'N/A'),
(9, 10003, '2018/08/22', 'Teeth Whitening', 'pending', '9:00 AM - 10:00 AM', 'N/A'),
(10, 10002, '2018/08/22', 'Implants', 'pending', '10:00 AM - 11:00 AM', 'N/A'),
(11, 10001, '2018/08/15', 'Implants', 'pending', '11:00 AM - 12:00 PM', 'N/A');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_service`
--

CREATE TABLE `tbl_service` (
  `id` int(10) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `price` float(10,2) NOT NULL,
  `is_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_service`
--

INSERT INTO `tbl_service` (`id`, `name`, `description`, `price`, `is_deleted`) VALUES
(1, 'Teeth Whitening', '<p>Tooth whitening can be a very effective way of lightening the natural colour of your teeth without removing any of the tooth surface.</p>\r\n', 100.00, 0),
(2, 'Implants', '<p>Dental implants may be an option for people who have lost a tooth or teeth due to periodontal disease, an injury, or some other reason.</p>\r\n', 200.00, 0),
(3, 'Extractions', '<p>In orthodontics if the teeth are crowded, sound teeth may be extracted to create space so the rest of the teeth can be straightened.</p>\r\n', 300.00, 0),
(4, 'Gum Disease', '<p>Plaque is the primary cause of gum disease. However, other factors can contribute to periodontal disease.</p>\r\n', 500.00, 0);

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
(1, 'Roel''s Company', '3456789', 'San Jose Market', 0),
(2, 'Annabelle''s Tailoring Shop', '4393284', 'Pulido', 0),
(3, 'Dessa''s Shop', '0902390239', 'Paliparan', 0);

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
(1, 'Pack', 1),
(2, 'Kilo', 1),
(3, 'Pieces4', 0),
(4, 'Unit3', 0),
(5, 'Box2', 0),
(6, 'Metres1', 1),
(7, 'Asdasd', 1),
(8, 'Metre', 0);

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
-- Indexes for table `tbl_image`
--
ALTER TABLE `tbl_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_item`
--
ALTER TABLE `tbl_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_opening`
--
ALTER TABLE `tbl_opening`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_package`
--
ALTER TABLE `tbl_package`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_reservation`
--
ALTER TABLE `tbl_reservation`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_account`
--
ALTER TABLE `tbl_account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10004;
--
-- AUTO_INCREMENT for table `tbl_carousel`
--
ALTER TABLE `tbl_carousel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `tbl_image`
--
ALTER TABLE `tbl_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `tbl_item`
--
ALTER TABLE `tbl_item`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_opening`
--
ALTER TABLE `tbl_opening`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_package`
--
ALTER TABLE `tbl_package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_reservation`
--
ALTER TABLE `tbl_reservation`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `tbl_service`
--
ALTER TABLE `tbl_service`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_supplier`
--
ALTER TABLE `tbl_supplier`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_unit`
--
ALTER TABLE `tbl_unit`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
