/*
*	Classe représentant une tuile de jeu
*	@author : Batow
*/

var Shared = require("./Shared");

//
// Constructeur
// Couleur : Couleur de la tuile
// Visible : Détermine si un chemin est ouvert lorsque la tuile est côté personnage visible
// Retourne : Détermine si un chemin est ouvert lorsque la tuile est côté personnage retourné
//
function Tuile(couleur, estVisible, sudVisible, ouestVisible, nordVisible, estRetourne, sudRetourne, ouestRetourne, nordRetourne){
	//identifiant de la tuile
	this.id_tuile=Shared.generateUUID();
	//détermine si la tuile est découverte (personnage innocenté)
	this.estDecouvert= false;

	this.couleur = couleur;

	this.estVisible = estVisible;
	this.sudVisible=sudVisible;
	this.ouestVisible=ouestVisible;
	this.nordVisible=nordVisible;
	this.estRetourne = estRetourne;
	this.sudRetourne=sudRetourne;
	this.ouestRetourne=ouestRetourne;
	this.nordRetourne=nordRetourne;
}

//
//	Effectue une rotation de la tuile dans le sens horaire
//	nb_rotation : nombre de rotation à effectuer
//
Tuile.prototype.rotation = function(nb_rotation){
	//Pour chaque rotation demandée (modulo 4 car 4 rotations reviennent à ne pas en faire)
	for(var i=0;i<nb_rotation%4;i++){
		var tempVisible = this.nordVisible;
		var tempRetourne = this.nordRetourne;

		//L'ouest se retrouve au nord
		this.nordVisible = this.ouestVisible;
		this.nordRetourne = this.ouestRetourne;

		//Le sud se retrouve à l'ouest
		this.ouestVisible = this.sudVisible;
		this.ouestRetourne = this.sudRetourne;

		//L'est se retrouve au sud
		this.sudVisible = this.estVisible;
		this.sudRetourne = this.estRetourne;

		//Le nord se retrouve à l'est
		this.estVisible = tempVisible;
		this.estRetourne = tempRetourne;
	}
}

module.exports = Tuile;