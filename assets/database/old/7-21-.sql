-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2018 at 09:46 AM
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
(8, 'basic', '{"name":"gardiola","address":"sunshine","number":"09078267471","facebook":"facebook","gmail":"gmail","twitter":"twitter","skype":"skype","yahoo":"yahoo","terms":"sample terms"}');

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
(2, 'Roel', 'R', 'Longcops', 'San Jose', 'Longcoproelpatient@gmail.com', 'roel', '09088267471', 'Male', 'patient', 0, 0, 4193, 'roel', 0),
(3, 'Annabelle', 'B', 'Gernale', 'San Jose', 'gernale@gmail.com', 'ann', '09088267471', 'Male', 'patient', 1, 0, 4193, 'ann', 0);

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
(10, '123123', '123123', 1);

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
(2, 'samples', 111.00, 111, 11, 20, '1477581434', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAeAQMAAAC/hKb5AAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAACdJREFUKJFj+Mx/mJ///OfP9jY8hw9/ZrbhP8MPxB8YRsVHxYegOABfQUOAgyk5MAAAAABJRU5ErkJggg==">', 'Safe', 7, 3, 23);

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
(1, 'roelito', 8, '[{"id":"1","name":"piatoss","unit_name":"dozens"},{"id":"2","name":"samples","unit_name":"bulks","qty":"1"}]', 0),
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
(1, 3, '07/16/2018', 'Dentures and Partial Dentures', 'deleted', '13:00 PM', ''),
(2, 3, '07/16/2018', 'Dentures and Partial Dentures', 'approved', '13:00 PM', 'bagong recom'),
(3, 1, '07/16/2018', 'Dentures and Partial Dentures', 'deleted', '13:00 PM', '<script> var d = new Date(); document.getElementById("demo").innerHTML = d.getFullYear(); </script>');

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
(5, 'Dentures and Partial Dentures', 'aldwen', 0, 0),
(6, 'Bridges', '<h3><br />\r\n<img alt="" class="thubnail" src="http://localhost/gardiolaclinic.com/img/uploads/Hydrangeas.jpg" style="float:left; height:100px; margin-right:10px; width:100px" />Type the title here<img class="img-circle" src="http://localhost/gardiolaclinic.com/img/uploads/doctor1.jpg" style="height:300px; width:300px" /></h3>\r\n\r\n<p>Type the text here</p>\r\n', 0, 0),
(8, 'Inlays and Onlay Restoration', 'Dental inlays and onlays are restorations used to repair rear teeth with mild to moderate decay or cracked and fractured teeth that are not sufficiently damaged to need a crown.  Ideal candidates for inlay or onlay work typically have too much damage or decay in the tooth structure to be successfully treated using a filling, but have sufficient healthy tooth remaining to avoid the need for a crown. This allows the dentist to conserve more of the patient’s original tooth structure.  There are other benefits to inlays and onlays in comparison to metal fillings:  Inlays and onlays are durable — they’re made from tough, hard-wearing materials which last up to 30 years. They help to strengthen teeth by up to 75 percent, unlike traditional metal fillings which can actually reduce the strength of the teeth by up to 50 percent. Inlays and onlays prolong tooth life and prevent the need for more dental treatment in the future. Dental inlays and onlays are used when old fillings need to be removed or replaced. A dental inlay is similar to a filling and fits inside the cusp tips (top edges) of the tooth. A dental onlay is more extensive and extends over the cusps of the treated tooth.  During treatment the dentist removes the old fillings under local anesthesia and takes an impression of the tooth, which is sent to the dental laboratory. The new inlay or onlay is made from this mold in porcelain, gold or composite resin material. The inlay or onlay is then cemented into place at the next appointment. The inlay or onlay blends successfully with the treated tooth and the rest of the teeth to achieve a natural, uniform appearance.  How are inlays and onlays done? It takes two appointments for the inlays and onlays treatment to be completed and to be finally bonded to the damaged area of the tooth.  Inlays and onlays are performed using very similar procedures. At the first appointment, your dentist begins the procedure by numbing the area to be treated with local anesthetic. Any decay or damage is removed by drilling, which cleans and prepares the tooth for the dental inlay or onlay.  Using a small tray filled with dental putty that fits over the teeth, the dentist takes a mold (impression) of the damaged tooth. This impression is sent off to the dental laboratory, where a dental inlay or onlay is created that will fit your tooth exactly. Inlays and onlays are usually made from porcelain, which often most closely matches the normal color of the tooth, but they can also be made from composite resin or gold. While the inlay or onlay is being created at the lab, the dentist creates a temporary restoration (cover or filling) for your tooth to protect it until your next appointment.  At the second appointment, your dentist will remove the temporary restoration and then take time to ensure the inlay or onlay fits correctly. Only when the inlay or onlay fits perfectly will the dentist bond the inlay or onlay to the tooth with a strong resin adhesive. The inlay and onlay treatment is completed with a polish to ensure a smooth and aesthetically pleasing finish.  Each visit to the dentist for inlay or onlay treatment takes about an hour, with the first appointment taking slightly longer due to the preparation process. There will probably be a little discomfort after the inlay or onlay procedure, and the new tooth surface may feel a little odd, but you soon get used to the new tooth surface and how it feels and looks in your mouth. The tissue around the treated tooth may feel sore or sensitive, but this should subside in a couple of days. If you do feel some discomfort, you can take over-the-counter pain medication to alleviate the symptoms.', 0, 0),
(21, 'Sealants', '<p style="text-align:justify">Be sure to add a dental visit to this year&#39;s spring cleaning list. A professional dental cleaning at least twice a year can improve your oral health, reports the Academy of General Dentistry (AGD), an organization of general dentists dedicated to continuing dental education. The AGD strongly recommends that a dentist or hygienist perform a dental cleaning every six months. This professional dental cleaning reinforces the home-care oral health regimen of brushing and flossing and gives the dentist an opportunity to locate areas in the mouth that may need special attention. People who regularly practice good oral hygiene at home with proper brushing and flossing techniques typically do not experience discomfort during a cleaning. However, those who have neglected their oral hygiene habits may experience some discomfort or sensitivity during a dental cleaning. The dentist can use a topical anesthetic before the cleaning to alleviate any discomfort. During a dental cleaning, you&rsquo;ll receive diagnostic and preventive services from your dentist as well as any needed educational information. Diagnostic services may include: Reviewing and updating medical history, including information about heart problems, pregnancy, diabetes and medications, which may have an impact on your oral health Oral cancer examination and screening Evaluation of gum tissue Checking biting, chewing and swallowing patterns X-rays or examination of teeth to detect decay Referral to specialists for specific treatment Preventive services may include: Removal of plaque and tartar Stain removal Fluoride application Sealants (for children) Polishing teeth, including fillings and crowns Cleaning and adjustment of dentures and partial dentures Educational services may include: Tooth brushing and flossing instructions Nutritional counseling Recommendations for future treatment: when to return for follow-up hygiene treatment, periodontal (gum) concerns or restorative options Evaluation of self-care effectiveness Tobacco-cessation counseling</p>\r\n', 0, 0),
(35, 'something', '<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><img id="Picture_x0020_2" src="http://localhost/gardiolaclinic.com/img/uploads/doctor2.jpg" style="height:200px; left:0px; margin-left:350.25pt; margin-top:-22.65pt; position:absolute; text-align:left; width:200px; z-index:251660288" /> <span style="color:#000000"><strong><span style="font-size:20.0pt">ROEL R. LONGCOP</span></strong></span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt">Blk 18 Lot 39 Brgy. San Jose G.M.A. Cavite</span></span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:12.0pt">09073374270</span></span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><span style="font-size:12.0pt">longcop</span></span><a href="mailto:angelagernale02@yahoo.com"><span style="color:#000000"><span style="font-size:12.0pt">roel@gmail.com</span></span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:14.0pt">OBJECTIVES</span></span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Looking for a job where I can use my educational qualification and knowledge as well as improving myself in all aspects through working with others.</span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:14.0pt">QUALIFICATION AND SKILLS</span></span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<ul>\r\n	<li style="text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Computer literate (Excel, Word, PowerPoint)</span></span></span></li>\r\n	<li style="text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Basic programming skills</span></span></span>\r\n	<ul style="list-style-type:circle">\r\n		<li style="text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Visual Basic</span></span></span></li>\r\n		<li style="text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">HTML</span></span></span></li>\r\n		<li style="text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">CSS</span></span></span></li>\r\n		<li style="text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">JAVASCRIPT</span></span></span></li>\r\n		<li style="text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">PHP</span></span></span></li>\r\n	</ul>\r\n	</li>\r\n	<li style="text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Familiar in VueJs (<em>javascript framework</em>) codeIgniter (<em>PHP framework and development toolkit</em>) and Adobe Photoshop CS6.</span></span></span></li>\r\n	<li style="text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Others: Responsible, hardworking, self-motivated, trustworthy, can work under supervision and willing to do the field work.</span></span></span></li>\r\n</ul>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:14.0pt">PERSONAL INFORMATION</span></span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Age<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>:<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>24</span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Date of Birth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; January 20, 1994</span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Place of Birth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; G.M.A., Cavite</span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Civil Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Single</span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Language&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Filipino/ English</span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:14.0pt">EDUCATIONAL ATTAINMENT</span></span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>2014 &ndash;2018&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bachelor of Science in Information Technology</span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Cavite State University - Carmona Campus</strong></span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Carmona, Cavite</span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2007 - 2011&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>San Jose Community High School</strong></span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>G.M.A., Cavite</span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2000 - 2007&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>San Jose Elementary School</strong></span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>G.M.A., Cavite</span></span></span></p>\r\n\r\n<p style="margin-left:0.5in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:14.0pt">WORK EXPERIENCE:</span></span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in">&nbsp;</p>\r\n\r\n<table cellspacing="0" class="MsoTableGrid" style="border-collapse:collapse; border:undefined; margin-left:.25pt">\r\n	<tbody>\r\n		<tr>\r\n			<td style="vertical-align:top; width:242.75pt">\r\n			<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong>General Mariano Alvarez Municipality</strong></span></span></span></p>\r\n\r\n			<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">G.M.A. Cavite</span></span></span></p>\r\n\r\n			<p style="margin-left:0in; margin-right:0in">&nbsp;</p>\r\n			</td>\r\n			<td style="vertical-align:top; width:224.75pt">\r\n			<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">On-the-job Training</span></span></span></p>\r\n\r\n			<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Office Staff and Office Representative</span></span></span></p>\r\n\r\n			<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">June &ndash; July 2017,&nbsp; 200 Hours</span></span></span></p>\r\n\r\n			<p style="margin-left:0in; margin-right:0in">&nbsp;</p>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td style="vertical-align:top; width:242.75pt">\r\n			<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong>Maron Builders Company</strong></span></span></span></p>\r\n\r\n			<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Silmer Village Bi&ntilde;an Laguna</span></span></span></p>\r\n			</td>\r\n			<td style="vertical-align:top; width:224.75pt">\r\n			<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Finisher</span></span></span></p>\r\n\r\n			<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">2012 - 2014</span></span></span></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p style="margin-left:0in; margin-right:0in">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:14.0pt">CERTIFICATES: </span></span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in">&nbsp;</p>\r\n\r\n<ul>\r\n	<li><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&ldquo;MaxIT 2017: Coding the Future Right&rdquo;</span></span></span></li>\r\n</ul>\r\n\r\n<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Cavite State University &ndash; Carmona Campus</span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">November 11, 2017</span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in">&nbsp;</p>\r\n\r\n<ul>\r\n	<li><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&ldquo;Seize the Future: An Ultimate Guide of what I.T. can Offer&rdquo;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></li>\r\n</ul>\r\n\r\n<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&nbsp;Cavite State University &ndash; Carmona Campus</span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&nbsp;November 23, 2017</span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in">&nbsp;</p>\r\n\r\n<ul>\r\n	<li style="text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&ldquo;Technopreneurship: Empower Business through Technology&rdquo;</span></span></span></li>\r\n</ul>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Cavite State University &ndash; Carmona Campus</span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; November 25, 2017</span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<ul>\r\n	<li><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&ldquo;DEVolution Z: Revolving Android Development in Today&rsquo;s Generation&rdquo;</span></span></span></li>\r\n</ul>\r\n\r\n<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Cavite State University &ndash; Carmona Campus</span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; November 25, 2017</span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:center"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><em>I hereby certify that above information is true and correct to the best of my knowledge and belief.</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:right">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:right">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:right">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:right">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:right">&nbsp;</p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:right"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong><u><span style="font-size:12.0pt">ROEL RIVERA LONGCOP</span></u></strong></span></span></span></p>\r\n\r\n<p style="margin-left:0in; margin-right:0in; text-align:justify"><span style="color:#000000"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong><span style="font-size:12.0pt">Applicant Signature</span></span></span></span></p>\r\n', 2132, 0);

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
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
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
