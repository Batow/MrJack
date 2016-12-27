/*
*	Méthodes utils communes à toutes les classes
*	@author : Batow
*/

function Shared(){};

//	Permet de déterminer si un champs d'un tableau contiens la valeur passée en paramètre
//	tableau : tableau dans lequel chercher
//	champs : champs visé
//	valeur : valeur recherchée
Shared.checkField = function (tableau, champs, valeur){
	for(var i=0; i<tableau.length; i++){
		if(tableau[i][champs] == valeur)
			return tableau[i];
	}
	return null;
}

module.exports = Shared;