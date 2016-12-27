/*
* Test des différentes fonctionnalités de la classe Enqueteur
* @author : Batow
*/

var assert = require('assert');
var Enqueteur = require('../lib/Enqueteur');

//
//Tests du bon fonctionnement des fonctionnalité de l'enqueteur
//
describe('Test Enqueteur', function(){	
	var enqueteur = new Enqueteur(1,0,"S");

	//Tests sur la fonction 'deplacement'
	it('Test deplacement', function(){
		enqueteur.deplacement(2,4,4);
		//On vérifie que l'enqueteur a bien bougé
		assert.equal(enqueteur.x,3,"l'enqueteur n'a pas bougé correctement sur X");
		assert.equal(enqueteur.y,0,"l'enqueteur n'a pas bougé correctement sur Y");
		//On vérifie un changement de ligne (N->E)
		enqueteur.deplacement(2,4,4);
		//On vérifie que l'enqueteur a bien bougé
		assert.equal(enqueteur.x,4,"l'enqueteur n'a pas bougé correctement sur X au changement de plateau (N->E)");
		assert.equal(enqueteur.y,2,"l'enqueteur n'a pas bougé correctement sur Y au changement de plateau (N->E)");
		assert.equal(enqueteur.orientation,"O","l'orientation n'a pas changé (N->E)");
		//On vérifie un changement de ligne (E->S)
		enqueteur.deplacement(2,4,4);
		//On vérifie que l'enqueteur a bien bougé
		assert.equal(enqueteur.x,3,"l'enqueteur n'a pas bougé correctement sur X au changement de plateau (E->S)");
		assert.equal(enqueteur.y,4,"l'enqueteur n'a pas bougé correctement sur Y au changement de plateau (E->S)");
		assert.equal(enqueteur.orientation,"N","l'orientation n'a pas changé (E->S)");
		//On vérifie un changement de ligne (S->O)
		enqueteur.deplacement(2,4,4);
		enqueteur.deplacement(2,4,4);
		//On vérifie que l'enqueteur a bien bougé
		assert.equal(enqueteur.x,0,"l'enqueteur n'a pas bougé correctement sur X au changement de plateau (S->O)");
		assert.equal(enqueteur.y,2,"l'enqueteur n'a pas bougé correctement sur Y au changement de plateau (S->O)");
		assert.equal(enqueteur.orientation,"E","l'orientation n'a pas changé (S->O)");
		//On vérifie un changement de ligne (O->N)
		enqueteur.deplacement(2,4,4);
		//On vérifie que l'enqueteur a bien bougé
		assert.equal(enqueteur.x,1,"l'enqueteur n'a pas bougé correctement sur X au changement de plateau (O->N)");
		assert.equal(enqueteur.y,0,"l'enqueteur n'a pas bougé correctement sur Y au changement de plateau (O->N)");
		assert.equal(enqueteur.orientation,"S","l'orientation n'a pas changé (O->N)");
	})


});