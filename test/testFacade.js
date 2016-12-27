/*
* Test des différentes fonctionnalités de la facade JackFacade
* @author : Batow
*/

var assert = require('assert');
var JackFacade = require ('../lib/JackFacade');
var Plateau = require('../lib/Plateau');
var Enqueteur = require('../lib/Enqueteur');

var instance = new JackFacade();

//On test les mauvaises saisies sur la fonction déplacement
describe('Test de deplacement', function(){	
	var enqueteur = new Enqueteur(1,0,"S");
	var plateau = new Plateau(1,"batow","julien",[],[enqueteur],[],3,3);
	instance.plateaux.push(plateau);

	//Tests sur le paramètre 'id_partie'
	it('id_partie', function(){
		//On vérifie que l'identifiant de la partie n'est pas null
		assert.equal(instance.deplacement(null,plateau.joueurCourant,1,2).ok,"false","id_partie ne doit pas être null");
		//On vérifie que l'identifiant de la partie existe
		assert.equal(instance.deplacement("toto","batow",1,2).ok,"false","id_partie n'existe pas");	
	})

	//Tests sur le paramètre 'id_joueur'
	it('id_joueur',function(){
		//On vérifie que l'identifiant du joueur n'est pas null
		assert.equal(instance.deplacement(plateau.id_plateau,null,1,2).ok,"false","id_joueur ne doit pas être null");
		//On vérifie que l'identifiant du joueur existe
		assert.equal(instance.deplacement(plateau.id_plateau,"toto",1,2).ok,"false","id_joueur n'existe pas");	
		//On vérifie que c'est bien le joueur courant
		assert.equal(instance.deplacement(plateau.id_plateau,"julien",1,2).ok,"false","id_joueur n'est pas le joueur courant");	
	})

	//Tests sur le paramètre 'id_joueur'
	it('id_enqueteur',function(){
		//On vérifie que l'identifiant de l'enqueteur n'est pas null
		assert.equal(instance.deplacement(plateau.id_plateau,plateau.joueurCourant,null,2).ok,"false","id_enqueteur ne doit pas être null");
		//On vérifie que l'identifiant de l'enqueteur existe
		assert.equal(instance.deplacement(plateau.id_plateau,plateau.joueurCourant,"tata",2).ok,"false","id_enqueteur n'existe pas");	
	})

	//Tests sur le paramètre 'nb_deplacement'
	it('nb_deplacement', function(){
		//On vérifie que le paramètre n'est pas null 
		assert.equal(instance.deplacement(plateau.id_plateau,plateau.joueurCourant,1,null).ok,"false","nb_deplacement ne doit pas être null");
		//On vérifie que l'on saisie un nombre
		assert.equal(instance.deplacement(plateau.id_plateau,plateau.joueurCourant,1,"tata").ok,"false", "nb_deplacement doit être un nombre");
		//On vérifie que l'on saisie un entier
		assert.equal(instance.deplacement(plateau.id_plateau,plateau.joueurCourant,1,1.3).ok,"false", "nb_deplacement doit être un entier");
		//On ne peut pas déplacer un enqueteur de plus de 2 cases
		assert.equal(instance.deplacement(plateau.id_plateau,plateau.joueurCourant,1,3).ok,"false", "nb_deplacement>2 doit être incorrect");
		//On ne peut pas déplacer un enqueteur d'un nombre négatif de case
		assert.equal(instance.deplacement(plateau.id_plateau,plateau.joueurCourant,1,-1).ok,"false", "nb_deplacement<0 doit être incorrect");
	})

	//Tests globaux
	it('global',function(){
		//On vérifie qu'un fonction correcte fonctionne
		assert.equal(instance.deplacement(plateau.id_plateau,plateau.joueurCourant,1,2).ok,"true","Une construction correcte ne fonctionne pas");
	})
})