/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Burak DAG
 * @version 0.2
 * @since   2023-09-05
 */
'use strict'; // Demande un interprétation stricte du code

var celsius = prompt('Entrez la température en degrés Celsius :');

var fahrenheit = (celsius * 9/5) + 32;

alert(celsius + ' degrés Celsius équivaut à ' + fahrenheit + 'degrés Fahrenheit');
