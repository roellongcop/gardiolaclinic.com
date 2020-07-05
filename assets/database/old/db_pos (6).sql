-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2018 at 02:29 PM
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
(1, 'basic', '{"name":"Roel Management System","address":"sunshine","number":"09078267471","facebook":"facebook","gmail":"gmail","twitter":"twitters","skype":"skype@gardiola","yahoo":"yahoo","terms":"We Provide Team-Based, Comprehensive Dental Care For Children And Adults, Including Patients Of All Ages Who Are Anxious Or Have An Underlying Developmental Or Medical Condition That May Add Complexity To The Management Of Their Oral Health.\\n\\nGeneral Dentistry - Preventative And Restorative Dental Care.\\nSpecialized Dental Care To Straighten Crooked Teeth In Children And Adults.\\nTreat Diseases Of The Gums And The Placement Of Dental Implants.\\nWe Are Committed To Helping You Maintain Your Oral Health As An Integral Part Of Your Overall Health And Wellness.","description":"We provide team-based, comprehensive dental care for children and adults, including patients of all ages who are anxious or have an underlying developmental or medical condition that may add complexity to the management of their oral health.\\n\\nGeneral Dentistry - preventative and restorative dental care.\\nSpecialized dental care to straighten crooked teeth in children and adults.\\nTreat diseases of the gums and the placement of dental implants.\\nWe are committed to helping you maintain your oral health as an integral part of your overall health and wellness."}'),
(2, 'history', '<p><img alt="heart" src="http://localhost/gardiolaclinic.com/assets/ckeditor/plugins/smiley/images/heart.png" style="height:23px; width:23px" title="heart" /></p>\r\n');

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
(1, 'Roel', 'R', 'Longcops', 'San Jose', 'admin@gmail.com', 'admin', '09088267471', 'Male', 'doctor', 1, 0, 4193, 'admin', 1),
(2, 'Roel', 'R', 'Longcop', 'San Jose', 'Longcoproelpatient@gmail.com', 'roel', '09088267471', 'Male', 'patient', 1, 0, 4193, 'roel', 0),
(3, 'Annabelle', 'B', 'Gernale', 'San Jose', 'gernale@gmail.com', 'ann', '09088267471', 'Male', 'patient', 1, 0, 4193, 'ann', 0),
(9, '32', '3', '32', '23', 'abelgernale17@gmail.com', '23', '23', 'Male', 'patient', 0, 0, 9858, '23', 0),
(10, 'Das', 'S', 'E2', 'wq', 'Longcoproelpatient@gmail.com', 'qwe', '32323', 'Male', 'patient', 0, 0, 7279, 'qwe', 0),
(11, 'Roel', 'R', 'Longcops', 'San Jose GMA', 'admin@gmail.com', 'aide', '09088267471', 'Male', 'dentalaide', 1, 0, 4193, 'aide', 0),
(12, 'dess', 'l', 'evangelista', 'paliparan', 'dessa@gmail.com', 'dessa', '56789', 'Female', 'doctor', 1, 0, 6835, 'dessa', 0),
(13, 'Roel', 'R', 'Longcops', 'San Jose', 'admin@gmail.com', 'doctor', '09088267471', 'Male', 'doctor', 1, 0, 6096, 'doctor', 0);

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
(1, 'ewq', 'ewq', 'qwe', 'img/uploads/Cleaning.png'),
(3, 'super hero', 'the avengers', 'infinity wars', 'img/uploads/preloader.gif');

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
(1, 'not Consumable', 'not Consumable', 0),
(2, 'consumable', 'consumable items', 0);

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
(9, 'img/uploads/21.jpg'),
(10, 'img/uploads/about-bg.jpg'),
(11, 'img/uploads/admin.png'),
(12, 'img/uploads/avengers-infinity-war-poster-1093756-203x300.jpeg'),
(13, 'img/uploads/bg_pattern_faq.png'),
(14, 'img/uploads/blog1.jpg'),
(15, 'img/uploads/blog2.jpg'),
(16, 'img/uploads/blog3.jpg'),
(17, 'img/uploads/book_bg.jpg'),
(18, 'img/uploads/bridge.jpeg'),
(19, 'img/uploads/bunot.jpg'),
(20, 'img/uploads/cert1.jpg'),
(21, 'img/uploads/cert2.jpg'),
(22, 'img/uploads/cert3.jpg'),
(23, 'img/uploads/cert4.jpg'),
(24, 'img/uploads/cert5.jpg'),
(25, 'img/uploads/Cleaning.png'),
(26, 'img/uploads/clients1.jpg'),
(27, 'img/uploads/clients2.jpg'),
(28, 'img/uploads/clients3.jpg'),
(29, 'img/uploads/clients4.jpg'),
(30, 'img/uploads/clients5.jpg'),
(31, 'img/uploads/clinic1.png'),
(33, 'img/uploads/crown.jpg'),
(34, 'img/uploads/doctor_logo.jpg'),
(35, 'img/uploads/doctor1.jpg'),
(36, 'img/uploads/doctor2.jpg'),
(37, 'img/uploads/doctor3.jpg'),
(38, 'img/uploads/doctor4.jpg'),
(39, 'img/uploads/doctor5.jpg'),
(40, 'img/uploads/images.png'),
(41, 'img/uploads/inlays.jpg'),
(42, 'img/uploads/logo.svg'),
(43, 'img/uploads/marker.jpg'),
(44, 'img/uploads/menubg.jpg'),
(45, 'img/uploads/numbers-bg.jpg'),
(46, 'img/uploads/Partialdentures.jpg'),
(47, 'img/uploads/preloader.gif'),
(48, 'img/uploads/quote.png'),
(49, 'img/uploads/review1.jpg'),
(50, 'img/uploads/review2.jpg'),
(51, 'img/uploads/review3.jpg'),
(52, 'img/uploads/review4.jpg'),
(53, 'img/uploads/Sealants.jpg'),
(54, 'img/uploads/slide_01.jpg'),
(55, 'img/uploads/slide_02.jpg'),
(56, 'img/uploads/slide_03.jpg'),
(57, 'img/uploads/stories1.jpg'),
(58, 'img/uploads/stories2.jpg'),
(59, 'img/uploads/stories3.jpg'),
(60, 'img/uploads/stories4.jpg'),
(62, 'img/uploads/web_logo.jpg');

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
(2, 'sample item', 1111.00, 100, 10, 20, 'Safe', 2, 2, 1),
(3, 'qwe', 32.00, 123, 2, 33, 'Safe', 1, 1, 1);

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
(1, 'pakcage1', 1, '[{"id":"2","name":"111","unit_name":"pack","qty":"2"}]', 1),
(2, '2323', 1, '[{"id":"2","name":"111","unit_name":"pack","qty":"2"}]', 1),
(3, '233', 1, '[{"id":"2","name":"111","unit_name":"pack","qty":"2"}]', 0),
(4, '123', 1, '[{"id":"2","name":"111","unit_name":"pack","qty":"213"}]', 1);

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
(1, 2, '2018/07/25', '0', 'finished', '8:00 AM - 9:00 AM', ''),
(2, 2, '2018/07/25', '1', 'approved', '9:00 AM - 10:00 AM', ''),
(3, 2, '2018/07/25', 'Extractions', 'deleted', '10:00 AM - 11:00 AM', 'fghj'),
(4, 2, '2018/07/25', 'gum disease', 'finished', '11:00 AM - 12:00 PM', 'There is no Internet connection Try:\r\nChecking the network cables, modem, and\r\nrouter Reconnecting to Wi-Fi Running Windows\r\nNetwork DiagnosticsERR_INTERNET_DISCONNECTED'),
(5, 2, '2018/07/25', 'Extractions', 'approved', '1:00 PM - 2:00 PM', ''),
(6, 2, '2018/07/25', 'teeth whitening', 'approved', '2:00 PM - 3:00 PM', ''),
(7, 2, '2018/07/25', 'gum disease', 'approved', '3:00 PM - 4:00 PM', ''),
(8, 2, '2018/07/25', 'implants', 'approved', '4:00 PM - 5:00 PM', ''),
(9, 2, '2018/07/26', 'implants', 'approved', '8:00 AM - 9:00 AM', ''),
(10, 2, '2018/07/26', 'implants', 'approved', '10:00 AM - 11:00 AM', 'Status\nSingle\nGender\nMale\nBirthdate\nJanuary 20, 1994\nAge\n24\nAddress\nGMA\nDENTAL ASSESSMENT REPORT\nASSESSMENT DATE: JULY 31, 2018\nCHIEF COMPLAINT:\npain\n\nMEDICAL HISTORY:\nheart_ailment\n\nDENTAL HISTORY:\nPermanent Filling\n\nBLOOD PRESSURE:\n120/80\n\nDIAGNOSIS:\nOral Deposits\n\nTREATMENT:\nPermanent Filling\n\nANTIBIOTICS/PAIN RELIEVER:\ncefalexin / paracetamol'),
(11, 2, '2018/07/27', 'Extractions', 'pending', '10:00 AM - 11:00 AM', '<button class="btn btn-default pull-left" @click="cancel">\n						<i class="fa fa-angle-left"></i>\n					</button>'),
(12, 2, '2018/07/26', 'implants', 'pending', '9:00 AM - 10:00 AM', ''),
(13, 2, '2018/07/26', 'implants', 'pending', '9:00 AM - 10:00 AM', ''),
(14, 2, '2018/07/03', 'implants', 'pending', '9:00 AM - 10:00 AM', ''),
(15, 2, '2018/07/02', 'Extractions', 'pending', '9:00 AM - 10:00 AM', ''),
(16, 2, '2018/07/02', 'teeth whitening', 'pending', '9:00 AM - 10:00 AM', ''),
(17, 2, '2018/07/05', 'implants', 'pending', '1:00 PM - 2:00 PM', ''),
(18, 2, '2018/07/11', 'teeth whitening', 'pending', '9:00 AM - 10:00 AM', ''),
(19, 2, '2018/07/11', 'Extractions', 'pending', '2:00 PM - 3:00 PM', ''),
(20, 2, '2018/07/18', 'Extractions', 'pending', '8:00 AM - 9:00 AM', ''),
(21, 2, '2018/07/19', 'Extractions', 'pending', '10:00 AM - 11:00 AM', ''),
(22, 2, '2018/07/17', 'implants', 'pending', '8:00 AM - 9:00 AM', ''),
(23, 2, '2018/07/26', 'implants', 'pending', '9:00 AM - 10:00 AM', ''),
(24, 2, '2018/07/26', 'cleaning', 'approved', '10:00 AM - 11:00 AM', ''),
(25, 2, '2018/07/27', 'implants', 'approved', '2:00 PM - 3:00 PM', ''),
(26, 2, '2018/07/27', 'implants', 'pending', '11:00 AM - 12:00 PM', ''),
(27, 2, '2018/07/27', 'implants', 'pending', '9:00 AM - 10:00 AM', ''),
(28, 1, '2018/07/28', 'implants', 'pending', '8:00 AM - 9:00 AM', '');

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
(1, 'teeth whitening', '<p>Tooth whitening can be a very effective way of lightening the natural colour of your teeth without removing any of the tooth surface.</p>\r\n', 100.00, 0),
(2, 'implants', '<p>Dental implants may be an option for people who have lost a tooth or teeth due to periodontal disease, an injury, or some other reason.</p>\r\n', 200.00, 0),
(3, 'Extractions', '<p>In orthodontics if the teeth are crowded, sound teeth may be extracted to create space so the rest of the teeth can be straightened.</p>\r\n', 300.00, 0),
(4, 'gum disease', '<p>Plaque is the primary cause of gum disease. However, other factors can contribute to periodontal disease.</p>\r\n', 500.00, 0),
(5, 'cleaning', '<p><img src="http://localhost/gardiolaclinic.com/img/uploads/about-bg.jpg" style="height:50px; width:50px" />sample</p>\r\n', 2000.00, 0),
(6, '3213', '<p>123</p>\r\n', 231.00, 0),
(7, '2313', '<p>23</p>\r\n', 231.00, 0),
(8, '321', '<p>123</p>\r\n', 123.00, 0),
(9, '321', '<p>231</p>\r\n', 312.00, 0),
(10, '32', '<p>23</p>\r\n', 32.00, 0),
(11, '213', '<p>32</p>\r\n', 321.00, 0);

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
(1, 'son park', '45678', 'sunshine', 0),
(2, 'roel shop', '456789', 'san jose', 0);

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
(1, 'pack', 0),
(2, 'pieces', 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_account`
--
ALTER TABLE `tbl_account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `tbl_carousel`
--
ALTER TABLE `tbl_carousel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_image`
--
ALTER TABLE `tbl_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT for table `tbl_item`
--
ALTER TABLE `tbl_item`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_opening`
--
ALTER TABLE `tbl_opening`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_package`
--
ALTER TABLE `tbl_package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_reservation`
--
ALTER TABLE `tbl_reservation`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `tbl_service`
--
ALTER TABLE `tbl_service`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `tbl_supplier`
--
ALTER TABLE `tbl_supplier`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_unit`
--
ALTER TABLE `tbl_unit`
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
