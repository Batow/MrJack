/*
* Test des différentes fonctionnalités de la facade JackFacade
* @author : Batow
*/

var assert = require('assert');
var JackFacade = require ('../lib/JackFacade');
var Plateau = require('../lib/Plateau');
var Enqueteur = require('../lib/Enqueteur');
var Tuile = require('../lib/Tuile');


//
//Test des fonctionnalité de la facade
//
describe('Test Facade',function(){

	//On test les mauvaises saisies sur la fonction déplacement
	describe('Test de deplacement', function(){
		var instance = new JackFacade();
		var enqueteur = new Enqueteur(1,0,"S");
		var plateau = new Plateau(1,"batow","julien",[],[enqueteur],[],3,3);
		instance.plateaux.push(plateau);

		//Tests sur le paramètre 'id_partie'
		it('id_partie', function(){
			//On vérifie que l'identifiant de la partie n'est pas null
			assert.equal(instance.deplacement(null,plateau.joueurCourant,enqueteur.id_enqueteur,2).ok,"false","id_partie ne doit pas être null");
			//On vérifie que l'identifiant de la partie existe
			assert.equal(instance.deplacement("toto","batow",enqueteur.id_enqueteur,2).ok,"false","id_partie n'existe pas");	
		})

		//Tests sur le paramètre 'id_joueur'
		it('id_joueur',function(){
			//On vérifie que l'identifiant du joueur n'est pas null
			assert.equal(instance.deplacement(plateau.id_plateau,null,enqueteur.id_enqueteur,2).ok,"false","id_joueur ne doit pas être null");
			//On vérifie que l'identifiant du joueur existe
			assert.equal(instance.deplacement(plateau.id_plateau,"toto",enqueteur.id_enqueteur,2).ok,"false","id_joueur n'existe pas");	
		})

		//Tests sur le paramètre 'id_joueur'
		it('id_enqueteur',function(){
			//On vérifie que l'identifiant de l'enqueteur n'est pas null
			assert.equal(instance.deplacement(plateau.id_plateau,plateau.joueurCourant,null,2).ok,"false","id_enqueteur ne doit pas être null");
		})

		//Tests sur le paramètre 'nb_deplacement'
		it('nb_deplacement', function(){
			//On vérifie que le paramètre n'est pas null 
			assert.equal(instance.deplacement(plateau.id_plateau,plateau.joueurCourant,enqueteur.id_enqueteur,null).ok,"false","nb_deplacement ne doit pas être null");
			//On vérifie que l'on saisie un nombre
			assert.equal(instance.deplacement(plateau.id_plateau,plateau.joueurCourant,enqueteur.id_enqueteur,"tata").ok,"false", "nb_deplacement doit être un nombre");
			//On vérifie que l'on saisie un entier
			assert.equal(instance.deplacement(plateau.id_plateau,plateau.joueurCourant,enqueteur.id_enqueteur,1.3).ok,"false", "nb_deplacement doit être un entier");
		})

		//Tests globaux
		it('global',function(){
			//On vérifie qu'un fonction correcte fonctionne
			var result = instance.deplacement(plateau.id_plateau,plateau.joueurCourant,enqueteur.id_enqueteur,2);
			assert.equal(result.ok,"true","Un deplacement correcte ne fonctionne pas : " + result.message);
		})
	});

	//On test les mauvaises saisies sur la fonction rotation
	describe('Test de rotation', function(){
		var instance = new JackFacade();
		var tuile = new Tuile("Jaune", false,false,false,true,true,true,false,false);
		var plateau = new Plateau(1,"batow","julien",[],[],[tuile],3,3);
		instance.plateaux.push(plateau);

		//Tests sur le paramètre 'id_partie'
		it('id_partie', function(){
			//On vérifie que l'identifiant de la partie n'est pas null
			assert.equal(instance.rotation(null,plateau.joueurCourant,tuile.id_tuile,2).ok,"false","id_partie ne doit pas être null");
			//On vérifie que l'identifiant de la partie existe
			assert.equal(instance.rotation("toto","batow",tuile.id_tuile,2).ok,"false","id_partie n'existe pas");	
		})

		//Tests sur le paramètre 'id_joueur'
		it('id_joueur',function(){
			//On vérifie que l'identifiant du joueur n'est pas null
			assert.equal(instance.rotation(plateau.id_plateau,null,tuile.id_tuile,2).ok,"false","id_joueur ne doit pas être null");
			//On vérifie que l'identifiant du joueur existe
			assert.equal(instance.rotation(plateau.id_plateau,"toto",tuile.id_tuile,2).ok,"false","id_joueur n'existe pas");	
		})

		//Tests sur le paramètre 'id_tuile'
		it('id_tuile',function(){
			//On vérifie que l'identifiant de la tuile n'est pas null
			assert.equal(instance.rotation(plateau.id_plateau,plateau.joueurCourant,null,2).ok,"false","id_tuile ne doit pas être null");
		})

		//Tests sur le paramètre 'nb_rotation'
		it('nb_rotation', function(){
			//On vérifie que le paramètre n'est pas null 
			assert.equal(instance.rotation(plateau.id_plateau,plateau.joueurCourant,tuile.id_tuile,null).ok,"false","nb_rotation ne doit pas être null");
			//On vérifie que l'on saisie un nombre
			assert.equal(instance.rotation(plateau.id_plateau,plateau.joueurCourant,tuile.id_tuile,"tata").ok,"false", "nb_rotation doit être un nombre");
			//On vérifie que l'on saisie un entier
			assert.equal(instance.rotation(plateau.id_plateau,plateau.joueurCourant,tuile.id_tuile,1.3).ok,"false", "nb_rotation doit être un entier");
		})

		//Tests globaux
		it('global',function(){
			//On vérifie qu'un fonction correcte fonctionne
			var result = instance.rotation(plateau.id_plateau,plateau.joueurCourant,tuile.id_tuile,2);
			assert.equal(result.ok,"true","Une rotation correct ne fonctionne pas : " + result.message);
		})
	})

	//On test les mauvaises saisies sur la fonction échange
	describe('Test de echange', function(){
		var instance = new JackFacade();
		var tuile1 = new Tuile("Jaune", false,false,false,true,true,true,false,false);
		var tuile2 = new Tuile("Jaune", true,false,false,false,false,false,false,true);
		var plateau = new Plateau(1,"batow","julien",[],[],[tuile1, tuile2],3,3);
		instance.plateaux.push(plateau);

		//Tests sur le paramètre 'id_partie'
		it('id_partie', function(){
			//On vérifie que l'identifiant de la partie n'est pas null
			assert.equal(instance.echange(null,plateau.joueurCourant,tuile1.id_tuile,tuile2.id_tuile).ok,"false","id_partie ne doit pas être null");
			//On vérifie que l'identifiant de la partie existe
			assert.equal(instance.echange("toto","batow",tuile1.id_tuile,tuile2.id_tuile).ok,"false","id_partie n'existe pas");	
		})

		//Tests sur le paramètre 'id_joueur'
		it('id_joueur',function(){
			//On vérifie que l'identifiant du joueur n'est pas null
			assert.equal(instance.echange(plateau.id_plateau,null,tuile1.id_tuile,tuile2.id_tuile).ok,"false","id_joueur ne doit pas être null");
			//On vérifie que l'identifiant du joueur existe
			assert.equal(instance.echange(plateau.id_plateau,"toto",tuile1.id_tuile,tuile2.id_tuile).ok,"false","id_joueur n'existe pas");	
		})

		//Tests sur le paramètre 'id_tuile'
		it('id_tuile',function(){
			//On vérifie que l'identifiant de la tuile1 n'est pas null
			assert.equal(instance.echange(plateau.id_plateau,plateau.joueurCourant,null,tuile2.id_tuile).ok,"false","id_tuile1 ne doit pas être null");
			//On vérifie que l'identifiant de la tuile1 n'est pas null
			assert.equal(instance.echange(plateau.id_plateau,plateau.joueurCourant,tuile1.id_tuile,null).ok,"false","id_tuile2 ne doit pas être null");
		})

		//Tests globaux
		it('global',function(){
			//On vérifie qu'un fonction correcte fonctionne
			var result = instance.echange(plateau.id_plateau,plateau.joueurCourant,tuile1.id_tuile,tuile2.id_tuile);
			assert.equal(result.ok,"true","Un échange correct ne fonctionne pas : " + result.message);
		})

	})
})