//js/plateau.js

'use strict';

var plateauApp = angular.module('plateauApp',['MrJackPlateau']);

var MrJackPlateau = angular.module('MrJackPlateau',[]);

/*
*	Controlleur de la section tuiles de jeu du plateau
*	
*/
MrJackPlateau.controller('tuileContentCtrl',function($scope){
	$scope.tuileContentStyle = {"height" : document.getElementById("tuileContent").clientWidth + "px" };

	var rows1 = [{src : "img/Plateau/Blanc.png", rotate : 0},{src : "img/Plateau/Bleu.png", rotate : 1},{src : "img/Plateau/Noir.png", rotate : 2}]
	var rows2 = [{src : "img/Plateau/Jaune.png", rotate : 3},{src : "img/Plateau/Rose.png", rotate : 0},{src : "img/Plateau/Orange.png", rotate : 3}]
	var rows3 = [{src : "img/Plateau/Marron.png", rotate : 2},{src : "img/Plateau/Vert.png", rotate : 3},{src : "img/Plateau/Violet.png", rotate : 0}]

	$scope.rows = [rows1,rows2,rows3];
})