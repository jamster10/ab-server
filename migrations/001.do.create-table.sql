START TRANSACTION;

CREATE TABLE bookings (
  id SMALLINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(254) NOT NULL,
  address VARCHAR(90) NOT NULL,
  booking_type ENUM('housekeeping', 'dog walk') NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
)
AUTO_INCREMENT=101 ;

-- write seed data specific to certain tables here
INSERT INTO `bookings` VALUES ('1','Irwin Nienow','joy16@gmail.com','5094 Alana Fall\nNienowbury, SD 09406','housekeeping','1999-12-27','09:30:03','1995-02-17 07:26:42','1971-04-25 16:36:49'),
('2','Timothy Fadel','conner.sigmund@hyatt.com','851 McKenzie Branch\nNew Eddburgh, WV 90087','dog walk','1989-03-16','15:39:57','1992-09-21 08:55:30','2006-03-27 18:42:02'),
('3','Miss Abbigail Klocko III','ziemann.dandre@adams.com','6331 Dickens Plaza Apt. 982\nNorth Nolaberg, WY 71469','housekeeping','2013-09-08','21:54:06','1984-10-26 08:54:43','2007-09-30 03:37:10'),
('4','Haley Brekke MD','hward@yahoo.com','110 Torp Ramp Suite 293\nEast Nedra, LA 46670','dog walk','2018-07-12','10:29:10','1997-08-26 08:59:52','2010-08-24 05:43:54'),
('5','Augustine Kozey','georgette24@gmail.com','591 Mayra Courts Suite 631\nAdrienstad, MS 05162-5968','dog walk','2016-07-19','17:11:38','1996-08-18 22:10:56','2013-07-19 18:57:21'),
('6','Hollis Paucek','ratke.jillian@gmail.com','238 Billie Lock\nNew Millerberg, NE 69718','dog walk','1989-12-16','02:54:32','2015-08-09 18:49:44','1992-08-19 05:59:39'),
('7','Roel Ledner','mathew51@yahoo.com','215 Huel Throughway\nHamillbury, PA 28816-8798','housekeeping','1979-05-10','18:39:16','2019-05-05 21:31:11','1999-08-25 00:33:02'),
('8','Kamron Dooley','marcia88@gmail.com','8046 Bianka Loop\nSmithburgh, NC 94980','dog walk','1972-11-01','19:26:13','2016-01-17 12:42:17','2008-01-04 23:59:06'),
('9','Marian Deckow','jessica38@gmail.com','0896 Mariana Harbors\nBartellport, IL 41092-5388','housekeeping','2009-12-22','21:58:20','1999-06-18 16:47:35','2004-07-08 10:43:11'),
('10','Prof. Jake Zemlak MD','zieme.chelsea@hotmail.com','657 Langworth Fort Apt. 602\nLake Zacherychester, DE 17554-0521','dog walk','1978-09-22','13:37:28','2004-10-20 12:00:31','2017-10-10 01:46:45'),
('11','Federico Dare','mkris@terryframi.com','6429 Sporer Hollow\nWestberg, OH 01853-7213','housekeeping','2005-09-22','12:44:33','1976-06-01 03:17:07','1987-12-07 13:29:19'),
('12','Ruthie Hane','xjohnston@lubowitz.biz','885 Halle Port\nPort Jarodville, MS 86554','dog walk','2011-03-03','19:13:16','1984-12-04 13:13:16','1996-05-25 12:40:09'),
('13','Mina Spencer','rutherford.milan@rutherford.org','520 Cassin Parks\nNorth William, MD 11749','dog walk','1983-05-13','23:11:40','2011-12-16 15:46:14','1999-05-04 06:53:20'),
('14','Mr. Cyrus Bode Jr.','mstiedemann@terrykassulke.net','3261 Huel Brooks\nNorth Alicia, LA 62886','housekeeping','2016-06-05','04:48:18','2012-12-16 10:40:46','1998-11-05 21:57:44'),
('15','Miss Jaquelin Konopelski','jeromy.berge@gmail.com','4380 Mosciski Mission\nNorth Dasiaview, NV 73985','dog walk','1985-07-18','08:09:27','1989-11-09 00:51:07','1981-02-23 00:31:44'),
('16','Mrs. Aisha Beier','gennaro99@yahoo.com','5779 Beahan Ferry Suite 853\nWest Dextertown, TX 13248','dog walk','1997-06-21','18:31:34','2006-09-24 12:23:16','1988-04-26 18:34:15'),
('17','Myra Pollich','arden.pollich@lueilwitz.org','27308 Schimmel Grove\nLake Robbie, MA 02845','dog walk','2012-07-30','09:40:01','1988-11-12 17:26:18','1984-11-14 01:42:51'),
('18','Prof. Della Brakus','zfisher@yahoo.com','833 Harber Orchard\nLehnerfort, WY 71493-0803','housekeeping','2010-06-01','00:40:57','1986-06-12 15:38:22','1973-05-09 18:50:44'),
('19','Ms. Marlee Osinski MD','nicolas.harmony@gottlieb.com','505 Austin Via\nRohanmouth, WY 09437-6149','dog walk','1998-11-25','15:28:09','1987-11-01 10:32:39','1991-04-23 10:59:03');




COMMIT;