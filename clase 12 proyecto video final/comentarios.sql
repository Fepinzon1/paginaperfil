-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-05-2016 a las 07:10:23
-- Versión del servidor: 5.0.45-community-nt
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `comentarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE IF NOT EXISTS `comentarios` (
  `id_comentario` bigint(20) unsigned NOT NULL auto_increment,
  `comentario` text NOT NULL,
  `id_video` int(11) NOT NULL,
  `usuario` text NOT NULL,
  `fecha` datetime NOT NULL,
  UNIQUE KEY `id_comentario` (`id_comentario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=55 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `idusuario` int(11) unsigned NOT NULL auto_increment,
  `nombre` varchar(100) default '',
  `usuario` varchar(100) default NULL,
  `clave` varchar(100) default NULL,
  `email` varchar(100) default NULL,
  `fecha` varchar(20) default NULL,
  `fecha_tiempo` int(11) default NULL,
  PRIMARY KEY  (`idusuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videos`
--

CREATE TABLE IF NOT EXISTS `videos` (
  `id_video` bigint(20) unsigned NOT NULL auto_increment,
  `url` text NOT NULL,
  `usuario` text NOT NULL,
  `fecha` datetime NOT NULL,
  UNIQUE KEY `id_video` (`id_video`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=38 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
