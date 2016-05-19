/*
SQLyog Enterprise - MySQL GUI v8.1 
MySQL - 5.0.17-nt : Database - encuesta
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`encuesta` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `encuesta`;

/*Table structure for table `encuestas` */

DROP TABLE IF EXISTS `encuestas`;

CREATE TABLE `encuestas` (
  `id` int(20) NOT NULL,
  `token` varchar(50) default NULL,
  `titulo` varchar(30) default NULL,
  `pregunta` varchar(30) default NULL,
  `total` int(20) default NULL,
  `fecha` datetime default NULL,
  `orden` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `NewIndex1` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `encuestas` */

insert  into `encuestas`(id,token,titulo,pregunta,total,fecha,orden) values (1,'hdfs6dfs76dfdvjdhv6','lenguajes de programacion','que lenguaje conoce',1,'2016-05-12 00:00:00',1),(2,'njfdg7df67dfdfgdbdf5','todo sobre node','ventajas de node',1,'2016-05-12 00:00:00',2),(3,'hsbd65ds6mnss3s','todo de js','ventajas de js',2,NULL,NULL),(4,NULL,NULL,NULL,NULL,NULL,NULL),(5,NULL,NULL,NULL,NULL,NULL,NULL),(6,NULL,NULL,NULL,NULL,NULL,NULL),(7,NULL,NULL,NULL,NULL,NULL,NULL),(8,NULL,NULL,NULL,NULL,NULL,NULL),(9,NULL,NULL,NULL,NULL,NULL,NULL),(10,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `respuestas` */

DROP TABLE IF EXISTS `respuestas`;

CREATE TABLE `respuestas` (
  `id` int(11) NOT NULL,
  `id_encuestas` int(11) default NULL,
  `texto` varchar(30) default NULL,
  `cantidad` int(11) default NULL,
  `porcentaje` float default NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_respuestas` (`id_encuestas`),
  CONSTRAINT `FK_respuestas` FOREIGN KEY (`id_encuestas`) REFERENCES `encuestas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `respuestas` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
