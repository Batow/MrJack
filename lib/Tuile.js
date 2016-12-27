/*
*	Classe représentant une tuile de jeu
*	@author : Batow
*/

//
// Constructeur
// Couleur : Couleur de la tuile
// Visible : Détermine si un chemin est ouvert lorsque la tuile est côté personnage visible
// Retourne : Détermine si un chemin est ouvert lorsque la tuile est côté personnage retourné
//
function Tuile(couleur, estVisible, sudVisible, ouestVisible, nordVisible, estRetourne, sudRetourne, ouestRetourne, nordRetourne){
	this.id=1;
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

module.exports = Tuile;