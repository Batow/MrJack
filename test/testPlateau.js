/*
* Test des différentes fonctionnalités de la classe Plateau
* @author : Batow
*/

var assert = require('assert');
var Plateau = require('../lib/Plateau');
var Enqueteur = require('../lib/Enqueteur');

//
//Tests du bon fonctionnement des fonctionnalité du plateau
//
describe('Test Plateau', function(){
	var enqueteur = new Enqueteur(1,0,"S");	
	var plateau = new Plateau(1,"batow","julien",[],[enqueteur],[],3,3);

	//Tests de la fonction 'déplacement'
	it('deplacement', function(){
		//On vérifie que c'est bien le joueur courant qui effectue l'action
		assert.equal(plateau.deplacement("julien",1,2).ok,"false","id_joueur n'est pas le joueur courant");	

		//On vérifie que l'identifiant de l'enqueteur existe
		assert.equal(plateau.deplacement(plateau.joueurCourant,"tata",2).ok,"false","id_enqueteur n'existe pas");	

		//On ne peut pas déplacer un enqueteur de plus de 2 cases
		assert.equal(plateau.deplacement(plateau.joueurCourant,1,3).ok,"false", "nb_deplacement>2 doit être incorrect");

		//On ne peut pas déplacer un enqueteur d'un nombre négatif de case
		assert.equal(plateau.deplacement(plateau.joueurCourant,1,-1).ok,"false", "nb_deplacement<0 doit être incorrect");

	})
});