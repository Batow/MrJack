/*
* Test des différentes fonctionnalités de la classe Tuile
* @author : Batow
*/

var assert = require('assert');
var Tuile = require('../lib/Tuile');

//
//	Tests du bon fonctionnement des fonctionnalité de la tuile
//
describe('Test Tuile', function(){
	/*
	*	Données de test : 
	*		Une tuile avec :
	*			face visible le nord d'ouvert
	*			face retournée l'est et le sud d'ouvert							
	*/
	var tuile = new Tuile("Jaune", false,false,false,true,true,true,false,false)

	//Test du constructeur
	it('constructeur',function(){
		//On vérifie que la tuile est bien face visible au départ
		assert.equal(tuile.estDecouvert,false,"La tuile n'est pas initialisée à découvert");
		//On vérifie la bonne initialisation du côté nord visible
		assert.equal(tuile.nordVisible,true,"NordVisible incorrect");
		//On vérifie la bonne initialisation du côté est visible
		assert.equal(tuile.estVisible,false,"EstVisible incorrect");
		//On vérifie la bonne initialisation du côté sud visible
		assert.equal(tuile.sudVisible,false,"SudVisible incorrect");
		//On vérifie la bonne initialisation du côté ouest visible
		assert.equal(tuile.ouestVisible,false,"OuestVisible incorrect");
		//On vérifie la bonne initialisation du côté nord Retourne
		assert.equal(tuile.nordRetourne,false,"NordRetourne incorrect");
		//On vérifie la bonne initialisation du côté est Retourne
		assert.equal(tuile.estRetourne,true,"EstRetourne incorrect");
		//On vérifie la bonne initialisation du côté sud Retourne
		assert.equal(tuile.sudRetourne,true,"SudRetourne incorrect");
		//On vérifie la bonne initialisation du côté ouest Retourne
		assert.equal(tuile.ouestRetourne,false,"OuestRetourne incorrect");
	})

	//Tests de la fonctionnalité 'rotation'
	it('rotation',function(){
		//On effectue une rotation de 1
		tuile.rotation(1);
		//On vérifie la bonne modification du côté nord visible
		assert.equal(tuile.nordVisible,false,"NordVisible incorrect");
		//On vérifie la bonne modification du côté est visible
		assert.equal(tuile.estVisible,true,"EstVisible incorrect");
		//On vérifie la bonne modification du côté sud visible
		assert.equal(tuile.sudVisible,false,"SudVisible incorrect");
		//On vérifie la bonne modification du côté ouest visible
		assert.equal(tuile.ouestVisible,false,"OuestVisible incorrect");
		//On vérifie la bonne modification du côté nord Retourne
		assert.equal(tuile.nordRetourne,false,"NordRetourne incorrect");
		//On vérifie la bonne modification du côté est Retourne
		assert.equal(tuile.estRetourne,false,"EstRetourne incorrect");
		//On vérifie la bonne modification du côté sud Retourne
		assert.equal(tuile.sudRetourne,true,"SudRetourne incorrect");
		//On vérifie la bonne modification du côté ouest Retourne
		assert.equal(tuile.ouestRetourne,true,"OuestRetourne incorrect");

		//On effectue une rotation de 2
		tuile.rotation(2);
		//On vérifie la bonne modification du côté nord visible
		assert.equal(tuile.nordVisible,false,"NordVisible incorrect");
		//On vérifie la bonne modification du côté est visible
		assert.equal(tuile.estVisible,false,"EstVisible incorrect");
		//On vérifie la bonne modification du côté sud visible
		assert.equal(tuile.sudVisible,false,"SudVisible incorrect");
		//On vérifie la bonne modification du côté ouest visible
		assert.equal(tuile.ouestVisible,true,"OuestVisible incorrect");
		//On vérifie la bonne modification du côté nord Retourne
		assert.equal(tuile.nordRetourne,true,"NordRetourne incorrect");
		//On vérifie la bonne modification du côté est Retourne
		assert.equal(tuile.estRetourne,true,"EstRetourne incorrect");
		//On vérifie la bonne modification du côté sud Retourne
		assert.equal(tuile.sudRetourne,false,"SudRetourne incorrect");
		//On vérifie la bonne modification du côté ouest Retourne
		assert.equal(tuile.ouestRetourne,false,"OuestRetourne incorrect");

		//On effectue une rotation de 3
		tuile.rotation(3);
		//On vérifie la bonne modification du côté nord visible
		assert.equal(tuile.nordVisible,false,"NordVisible incorrect");
		//On vérifie la bonne modification du côté est visible
		assert.equal(tuile.estVisible,false,"EstVisible incorrect");
		//On vérifie la bonne modification du côté sud visible
		assert.equal(tuile.sudVisible,true,"SudVisible incorrect");
		//On vérifie la bonne modification du côté ouest visible
		assert.equal(tuile.ouestVisible,false,"OuestVisible incorrect");
		//On vérifie la bonne modification du côté nord Retourne
		assert.equal(tuile.nordRetourne,true,"NordRetourne incorrect");
		//On vérifie la bonne modification du côté est Retourne
		assert.equal(tuile.estRetourne,false,"EstRetourne incorrect");
		//On vérifie la bonne modification du côté sud Retourne
		assert.equal(tuile.sudRetourne,false,"SudRetourne incorrect");
		//On vérifie la bonne modification du côté ouest Retourne
		assert.equal(tuile.ouestRetourne,true,"OuestRetourne incorrect");

		//On effectue une rotation de 4 (il ne doit rien se passer)
		tuile.rotation(4);
		//On vérifie la bonne non-modification du côté nord visible
		assert.equal(tuile.nordVisible,false,"NordVisible incorrect");
		//On vérifie la bonne non-modification du côté est visible
		assert.equal(tuile.estVisible,false,"EstVisible incorrect");
		//On vérifie la bonne non-modification du côté sud visible
		assert.equal(tuile.sudVisible,true,"SudVisible incorrect");
		//On vérifie la bonne non-modification du côté ouest visible
		assert.equal(tuile.ouestVisible,false,"OuestVisible incorrect");
		//On vérifie la bonne non-modification du côté nord Retourne
		assert.equal(tuile.nordRetourne,true,"NordRetourne incorrect");
		//On vérifie la bonne non-modification du côté est Retourne
		assert.equal(tuile.estRetourne,false,"EstRetourne incorrect");
		//On vérifie la bonne non-modification du côté sud Retourne
		assert.equal(tuile.sudRetourne,false,"SudRetourne incorrect");
		//On vérifie la bonne non-modification du côté ouest Retourne
		assert.equal(tuile.ouestRetourne,true,"OuestRetourne incorrect");
	});
});