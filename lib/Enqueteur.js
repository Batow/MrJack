/*
*	Classe représentant les enquêteurs présent autour du plateau
*	@author : Batow
*/


//
//	Constructeur
//	x y : position de l'enqueteur sur le plateau 
//	orientation : direction dans laquelle l'enquêteur regarde
//
function Enqueteur(x,y,orientation){
	//identifiant de l'enqueteur
	this.id_enqueteur = 1;
	this.x = x;
	this.y = y;
	this.orientation = orientation;
}

module.exports = Enqueteur;