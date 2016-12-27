/*
*	Classe représentant la plateau de jeu avec ses différents éléments
*	@author : Batow
*/

var Personnage = require("./Personnage");
var Enqueteur = require("./Enqueteur");
var Tuile = require("./Tuile");

var Shared = require("./Shared");

//
//	Constructeur
//
function Plateau(id_plateau, id_joueur1, id_joueur2, personnages, enqueteurs, tuiles){
	//identifiant du plateau
	this.id_plateau = id_plateau;
	//liste des personnages de la partie
	this.personnages = personnages;
	//liste des enqueteurs de la partie
	this.enqueteurs = enqueteurs;
	//liste des tuiles du plateau de jeu
	this.tuiles = tuiles;
	//liste de jetons de jeu
	this.jetons =[];
	//identifiant du joueur enqueteur
	this.id_joueurEnqueteur = id_joueur1;
	//identifiant du joueur MrJack
	this.id_joueurJack = id_joueur2;
	//joueur courant (par défaut l'enquêteur)
	this.joueurCourant = this.id_joueurEnqueteur
}

Plateau.prototype.deplacement = function(id_joueur,id_enqueteur,nb_deplacement){	
	//On vérifie le joueur qui doit jouer
	if(this.joueurCourant != id_joueur){
		return {"ok" : "false", "message" : "Ce joueur n'existe pas, ou ce n'est pas son tour de jouer"}
	}

	//On vérifie que l'identifiant de l'enqueteur existe
	if(this.joueurCourant != id_joueur){
		return {"ok" : "false", "message" : "Ce joueur n'existe pas, ou ce n'est pas son tour de jouer"}
	}

	//On tente de récupérer l'enqueteur courant
	var currentEnqueteur = Shared.checkField(this.enqueteurs, "id_enqueteur", id_enqueteur);

	if(!currentEnqueteur){
		return {"ok" : "false", "message" : "Ce joueur n'existe pas, ou ce n'est pas son tour de jouer"}		
	}

	return {"ok":"true","message":id_joueur+" tente de déplacer le personnage "+id_enqueteur+" de " + nb_deplacement}
}

module.exports=Plateau