-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2018 at 06:07 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

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
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `is_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_about`
--

INSERT INTO `tbl_about` (`id`, `name`, `description`, `is_deleted`) VALUES
(1, 'basic', '{\"name\":\"Gardiola Clinic Management System\",\"address\":\"sunshine blk 1\",\"number\":\"09087823231\",\"facebook\":\"gardiola\",\"gmail\":\"gardiola@gmail.com\",\"twitter\":\"gardiola@twitter\",\"skype\":\"gardiola@sype\",\"yahoo\":\"gardiola@yahoo.\",\"description\":\"The PHP Closing Tag On A PHP Document ?> Is Optional To The PHP Parser. However, If Used, Any Whitespace Following The Closing Tag, Whether Introduced By The Developer, User, Or An FTP Application, Can Cause Unwanted Output, PHP Errors, Or If The Latter Are Suppressed, Blank Pages. For This Reason, All PHP Files MUST OMIT The PHP Closing Tag And End With A Single Empty Line Instead.\",\"terms\":\"The PHP closing tag on a PHP document ?> is optional to the PHP parser. However, if used, any whitespace following the closing tag, whether introduced by the developer, user, or an FTP application, can cause unwanted output, PHP errors, or if the latter are suppressed, blank pages. For this reason, all PHP files MUST OMIT the PHP closing tag and end with a single empty line instead.\"}', 0),
(2, 'Codeigniter', '<p><img src=\"http://localhost/gardiolaclinic.com/img/uploads/800px_COLOURBOX14313782.jpg\" style=\"float:right; height:300px; width:300px\" /><span style=\"font-size:24px\">Sample Codings Using Codeigniter 3.1.9&nbsp;<img alt=\"yes\" src=\"http://localhost/gardiolaclinic.com/assets/ckeditor/plugins/smiley/images/thumbs_up.png\" style=\"height:23px; width:23px\" title=\"yes\" /></span></p>\r\n\r\n<p><span style=\"font-size:24px\">edited...</span></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><span style=\"font-size:24px\">Sample Codings Using Codeigniter 3.1.9&nbsp;<img alt=\"yes\" src=\"http://localhost/gardiolaclinic.com/assets/ckeditor/plugins/smiley/images/thumbs_up.png\" style=\"height:23px; width:23px\" title=\"yes\" /></span></p>\r\n\r\n<p><span style=\"font-size:24px\">edited...</span></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><span style=\"font-size:24px\">Sample Codings Using Codeigniter 3.1.9&nbsp;<img alt=\"yes\" src=\"http://localhost/gardiolaclinic.com/assets/ckeditor/plugins/smiley/images/thumbs_up.png\" style=\"height:23px; width:23px\" title=\"yes\" /></span></p>\r\n\r\n<p><span style=\"font-size:24px\">edited...</span></p>\r\n', 0),
(3, 'History', '<p style=\"text-align:justify\"><img src=\"http://localhost/gardiolaclinic.com/img/uploads/il_fullxfull.1135668764_dqu4.jpg\" style=\"float:left; height:500px; width:500px\" /><span style=\"font-family:Comic Sans MS,cursive\"><span style=\"font-size:20px\">Sample Certificate</span></span></p>\r\n\r\n<p style=\"margin-left:80px; text-align:justify\">&nbsp; &nbsp; &nbsp; &nbsp; The PHP Closing Tag On A PHP Document ?&gt; Is Optional To The PHP Parser. However, If Used, Any Whitespace Following The Closing Tag, Whether Introduced By The Developer, User, Or An FTP Application, Can Cause Unwanted Output, PHP Errors, Or If The Latter Are Suppressed, Blank Pages. For This Reason, All PHP Files MUST OMIT The PHP Closing Tag And End With A Single Empty Line Instead.</p>\r\n', 0);

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
(10001, 'Aide', 'A', 'Aide', 'Sunshine', 'aide@gmail.com', 'aide', '09898984547', 'Male', 'dentalaide', 1, 0, 445752322, 'aide', 0),
(10002, 'Roel', 'R', 'Longcop', 'San Jose', 'longcoproel2@gmail.com', 'roel', '09073374270', 'Male', 'patient', 1, 0, 445755703, 'roel', 0),
(10018, 'Doctor', 'D', 'Doctor', 'Sunshine', 'aide@gmail.com', 'doc', '09898984547', 'Male', 'doctor', 1, 0, 445752322, 'doc', 0),
(10019, 'Dessa', 'D', 'Dessa', 'Paliparan', 'dess@gamil.com', 'walkin579288558', '2345678', 'Male', 'patient', 1, 0, 385150745, 'walkin356640311', 0),
(10023, 'Sample', 'D', 'Dad', 'Das', 'longcoproel@gmail.com', 'walkin1467265920', '123123', 'Male', 'patient', 1, 0, 256898780, 'walkin424465576', 0),
(10026, 'Sample', 'S', 'Sample', 'Sample', 'longcoproel@gmail.com', 'walkin1888919808', '12312', 'Male', 'patient', 1, 0, 705758844, 'walkin1258627122', 0);

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
(2, 'Consumable', 'Consumable Items', 0);

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
(1, 'img/uploads/800px_COLOURBOX14313782.jpg'),
(2, 'img/uploads/49829786-dental-care-certificate-suitable-for-young-children.jpg'),
(3, 'img/uploads/il_fullxfull.1135668764_dqu4.jpg');

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
  `unit_id` int(10) NOT NULL,
  `is_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_item`
--

INSERT INTO `tbl_item` (`id`, `name`, `price`, `max`, `min`, `quantity`, `stock`, `category_id`, `supplier_id`, `unit_id`, `is_deleted`) VALUES
(1, 'Shoes', 123.00, 12322, 2, 23, 'Safe', 2, 1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_opening`
--

CREATE TABLE `tbl_opening` (
  `id` int(11) NOT NULL,
  `day` varchar(20) NOT NULL,
  `open` varchar(20) NOT NULL,
  `close` varchar(20) NOT NULL,
  `is_deleted` int(1) NOT NULL
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

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reservation`
--

CREATE TABLE `tbl_reservation` (
  `id` int(10) NOT NULL,
  `patient_id` int(10) NOT NULL,
  `daystart` text NOT NULL,
  `typeser` varchar(50) NOT NULL,
  `r_status` varchar(15) NOT NULL,
  `timestart` varchar(20) NOT NULL,
  `recommendation` text NOT NULL,
  `details` text NOT NULL,
  `diagnosis_treatment` text NOT NULL,
  `img_before` text NOT NULL,
  `img_after` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_reservation`
--

INSERT INTO `tbl_reservation` (`id`, `patient_id`, `daystart`, `typeser`, `r_status`, `timestart`, `recommendation`, `details`, `diagnosis_treatment`, `img_before`, `img_after`) VALUES
(1, 10002, '2018/08/25', 'Teeth Whitening', 'approved', '8:00 AM - 9:00 AM', 'N/A', '', '{\"diagnosis\":[\"Gingivitis\",\"Chronic Pulpitis\",\"Oral Deposits\",\"Acute Pulpitis\"],\"treatment\":[\"RCT\",\"Oral Prophylaxis\"],\"other_diagnosis\":\"\",\"other_treatment\":\"\"}', 'img/uploads/after1.jpg', 'img/uploads/before3.jpg'),
(2, 10002, '2018/08/26', 'Implants', 'finished', '9:00 AM - 10:00 AM', 'N/A', '', '', '', ''),
(3, 10019, '2018/08/30', 'Implants', 'pending', '9:00 AM - 10:00 AM', 'N/A', '{\"complaints\":[\"Checkup\",\"nilagnat\"],\"medical_history\":[\"Severe Headache\"],\"dental_history\":[\"RCT\",\"extraction\"]}', '', '', ''),
(4, 10023, '2018/08/25', 'Teeth Whitening', 'pending', '10:00 AM - 11:00 AM', 'N/A', '{\"complaints\":[\"Swelling\"],\"medical_history\":[\"Anemia\"],\"dental_history\":[\"RCT\"]}', '', '', ''),
(5, 10024, '2018/08/25', 'Implants', 'pending', '9:00 AM - 10:00 AM', 'N/A', 'null', '', '', ''),
(6, 10025, '2018/08/25', 'Implants', 'pending', '11:00 AM - 12:00 PM', 'N/A', '{\"complaints\":[\"Pain\"],\"medical_history\":[\"Heart Ailment\"],\"dental_history\":[\"Oral Prophylaxis\"]}', '', '', ''),
(7, 10026, '2018/08/25', 'Implants', 'pending', '11:00 AM - 12:00 PM', 'N/A', '{\"complaints\":[\"Checkup\"],\"medical_history\":[\"Anemia\"],\"dental_history\":[\"Alveolectomy\"]}', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_service`
--

CREATE TABLE `tbl_service` (
  `id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
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
(1, 'Roel\'s Company', '3456789', 'San Jose Market', 0),
(2, 'Annabelle\'s Tailoring Shop', '4393284', 'Pulido', 0),
(3, 'Dessa\'s Shop', '0902390239', 'Paliparan', 0);

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
(1, 'Metres', 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_account`
--
ALTER TABLE `tbl_account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10027;
--
-- AUTO_INCREMENT for table `tbl_carousel`
--
ALTER TABLE `tbl_carousel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_image`
--
ALTER TABLE `tbl_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_item`
--
ALTER TABLE `tbl_item`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tbl_opening`
--
ALTER TABLE `tbl_opening`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_package`
--
ALTER TABLE `tbl_package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_reservation`
--
ALTER TABLE `tbl_reservation`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
