/*
* 	Test des différentes fonctionnalités de la classe Plateau
* 	@author : Batow
*/

var assert = require('assert');
var Plateau = require('../lib/Plateau');
var Enqueteur = require('../lib/Enqueteur');
var Tuile = require('../lib/Tuile');

//
//	Tests du bon fonctionnement des fonctionnalité du plateau
//
describe('Test Plateau', function(){

	//Tests de la fonction 'déplacement'
	it('deplacement', function(){
		var enqueteur = new Enqueteur(1,0,"S");	
		var plateau = new Plateau(1,"batow","julien",[],[enqueteur],[],3,3);

		//On vérifie que c'est bien le joueur courant qui effectue l'action
		assert.equal(plateau.deplacement("julien",1,2).ok,"false","id_joueur n'est pas le joueur courant");	

		//On vérifie que l'identifiant de l'enqueteur existe
		assert.equal(plateau.deplacement(plateau.joueurCourant,"tata",2).ok,"false","id_enqueteur n'existe pas");	

		//On ne peut pas déplacer un enqueteur de plus de 2 cases
		assert.equal(plateau.deplacement(plateau.joueurCourant,1,3).ok,"false", "nb_deplacement>2 doit être incorrect");

		//On ne peut pas déplacer un enqueteur d'un nombre négatif de case
		assert.equal(plateau.deplacement(plateau.joueurCourant,1,-1).ok,"false", "nb_deplacement<0 doit être incorrect");

	});

	//Tests de la fonction 'rotation'
	it('rotation',function(){
		var tuile = new Tuile("Jaune", false,false,false,true,true,true,false,false);
		var plateau = new Plateau(1,"batow","julien",[],[],[tuile],3,3);

		//On vérifie que c'est bien le joueur courant qui effectue l'action
		assert.equal(plateau.rotation("julien",tuile.id_tuile,2).ok,"false","id_joueur n'est pas le joueur courant");	

		//On vérifie que l'identifiant de la tuile existe
		assert.equal(plateau.rotation(plateau.joueurCourant,"tata",2).ok,"false","id_tuile n'existe pas");	
	})


	//Tests de la fonction 'echange'
	it('echange',function(){
		var tuile1 = new Tuile("Jaune", false,false,false,true,true,true,false,false);
		var tuile2 = new Tuile("Jaune", true,false,false,false,false,false,false,true);
		var plateau = new Plateau(1,"batow","julien",[],[],[tuile1,tuile2],3,3);

		//On vérifie que c'est bien le joueur courant qui effectue l'action
		assert.equal(plateau.echange("julien",tuile1.id_tuile,tuile2.id_tuile).ok,"false","id_joueur n'est pas le joueur courant");	

		//On vérifie que l'identifiant de la tuile1 existe
		assert.equal(plateau.echange(plateau.joueurCourant,"tata",tuile2.id_tuile).ok,"false","id_tuile1 n'existe pas");	

		//On vérifie que l'identifiant de la tuile2 existe
		assert.equal(plateau.echange(plateau.joueurCourant,tuile1.id_tuile,"tata").ok,"false","id_tuile1 n'existe pas");

		//On test le bon fonctionnement de l'échange
		var result = plateau.echange(plateau.joueurCourant,tuile1.id_tuile,tuile2.id_tuile)
		assert.equal(result.ok,"true","Un échange correct à échoué : "+result.message);
		assert.equal(plateau.tuiles[0],tuile2,"La tuile2 n'est pas à la bonne position");		
		assert.equal(plateau.tuiles[1],tuile1,"La tuile1 n'est pas à la bonne position");		
	})
});