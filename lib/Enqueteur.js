/*
*	Classe représentant les enquêteurs présent autour du plateau
*	@author : Batow
*/

var Shared = require("./Shared");

//
//	Constructeur
//	x y : position de l'enqueteur sur le plateau 
//	orientation : direction dans laquelle l'enquêteur regarde
//
function Enqueteur(x,y,orientation){
	//identifiant de l'enqueteur
	this.id_enqueteur = Shared.generateUUID();
	this.x = x;
	this.y = y;
	this.orientation = orientation;
}

//
//	Effectue un déplacement de l'enqueteur dans le sens horaire
//	nb_deplacement : le nombre de deplacement a effectuer
// 	nb_longeur nb_largeur : Limite du plateau 
//
Enqueteur.prototype.deplacement = function(nb_deplacement, nb_longeur, nb_largeur){
	//Pour chaque déplacement demandé
	for(var i=0;i<nb_deplacement;i++){
		//Si le jeton se trouve sur la ligne NORD du plateau 
		if(this.y == 0){
			//On le déplace sur cette ligne
			this.x++;
			//Si on arrive au bout de la ligne 
			//on change l'orientation
			//on avance sur la ligne EST (le jeton ne va pas sur les angles)
			if(this.x==nb_longeur){
				this.y++;
				this.orientation = "O";
			}
		}
		//Si le jeton se trouve sur la ligne EST du plateau 
		else if(this.x==nb_longeur){
			//On le déplace sur cette ligne
			this.y++;
			//Si on arrive au bout de la ligne 
			//on change l'orientation
			//on avance sur la ligne SUD (le jeton ne va pas sur les angles)
			if(this.y==nb_largeur){
				this.x--;
				this.orientation = "N";
			}
		}
		//Si le jeton se trouve sur la ligne SUD du plateau 
		else if(this.y == nb_largeur){
			//On le déplace sur cette ligne
			this.x--;
			//Si on arrive au bout de la ligne 
			//on change l'orientation
			//on avance sur la ligne OUEST (le jeton ne va pas sur les angles)
			if(this.x==0){
				this.y--;
				this.orientation = "E";
			}
		}
		//Si le jeton se trouve sur la ligne EST du plateau 
		else if(this.x==0){
			//On le déplace sur cette ligne
			this.y--;
			//Si on arrive au bout de la ligne 
			//on change l'orientation
			//on avance sur la ligne SUD (le jeton ne va pas sur les angles)
			if(this.y==0){
				this.x++;
				this.orientation = "S";
			}
		}
	}
}

module.exports = Enqueteur;