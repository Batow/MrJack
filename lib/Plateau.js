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
function Plateau(id_plateau, id_joueur1, id_joueur2, personnages, enqueteurs, tuiles, longueur, largeur){
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
	//longueur du plateau
	this.longueur = longueur
	//largeur du plateau
	this.largeur = largeur
}

//
//	Demande de déplacement d'un jeton enqueteur par un joueur
//	id_joueur : Joueur effectuant l'action
//	id_enqueteur : enqueteur déplacé
//	nb_deplacement : nombre de déplacement demandé
//
Plateau.prototype.deplacement = function(id_joueur,id_enqueteur,nb_deplacement){	
	//On vérifie le joueur qui doit jouer
	if(this.joueurCourant != id_joueur){
		return {"ok" : "false", "message" : "Ce joueur n'existe pas, ou ce n'est pas son tour de jouer"}
	}

	//On tente de récupérer l'enqueteur courant
	var currentEnqueteur = Shared.checkField(this.enqueteurs, "id_enqueteur", id_enqueteur);

	//On vérifie que l'enqueteur courant existe
	if(!currentEnqueteur){
		return {"ok" : "false", "message" : "Cet enqueteur n'existe pas"}		
	}

	//On ne peut pas déplacer un enqueteur de plus de 2 cases
	if(nb_deplacement>2 || nb_deplacement<0){
		return {"ok" : "false", "message" : "Nombre de déplacement incorrect"}		
	}

	//On effectue le déplacement
	//On considère que les jetons sont en dehors des limites du plateau
	//Ils interviennent sur une plage de 0->4 lorsque le plateau fait 1->3
	currentEnqueteur.deplacement(nb_deplacement,this.longueur+1,this.largeur+1)

	return {"ok":"true","message":id_joueur+" tente de déplacer le personnage "+id_enqueteur+" de " + nb_deplacement}
}


//
//	Demande de rotation d'une tuile par un joueur
//	id_joueur : Joueur effectuant l'action
//	id_tuile : Tuile tourné
//	nb_rotation : nombre de rotation demandée
//
Plateau.prototype.rotation = function(id_joueur,id_tuile,nb_rotation){
	//On vérifie le joueur qui doit jouer
	if(this.joueurCourant != id_joueur){
		return {"ok" : "false", "message" : "Ce joueur n'existe pas, ou ce n'est pas son tour de jouer"}
	}

	//On tente de récupérer la tuile courant
	var currentTuile = Shared.checkField(this.tuiles, "id_tuile", id_tuile);

	//On vérifie que la tuile courant existe
	if(!currentTuile){
		return {"ok" : "false", "message" : "Cette tuile n'existe pas"}		
	}

	//On effectue la rotation
	currentTuile.rotation(nb_rotation);

	return {"ok":"true","message":id_joueur+" tente d'effectuer une rotation sur la piece "+id_tuile+" de " + nb_rotation}
}

//
//	Demande d'échange de deux tuiles par un joueur
//	id_joueur : Joueur effectuant l'action
//	id_tuile : Tuile tourné
//	nb_rotation : nombre de rotation demandée
//
Plateau.prototype.echange = function(id_joueur,id_tuile1,id_tuile2){
	//On vérifie le joueur qui doit jouer
	if(this.joueurCourant != id_joueur){
		return {"ok" : "false", "message" : "Ce joueur n'existe pas, ou ce n'est pas son tour de jouer"}
	}

	//On tente de récupérer la tuile1 courant
	var currentTuile1 = Shared.checkField(this.tuiles, "id_tuile", id_tuile1);

	//On vérifie que la tuile courant existe
	if(!currentTuile1){
		return {"ok" : "false", "message" : "Cette tuile1 n'existe pas"}		
	}

	//On tente de récupérer la tuile2 courant
	var currentTuile2 = Shared.checkField(this.tuiles, "id_tuile", id_tuile2);

	//On vérifie que la tuile2 courant existe
	if(!currentTuile2){
		return {"ok" : "false", "message" : "Cette tuile2 n'existe pas "}		
	}

	//On effectue l'échange
	var pos1 = this.tuiles.indexOf(currentTuile1);
	var pos2 = this.tuiles.indexOf(currentTuile2);
	this.tuiles[pos1] = currentTuile2;
	this.tuiles[pos2] = currentTuile1;

	//On effectue le déplacement

	return {"ok":"true","message":id_joueur+" tente d'échange la tuile "+id_tuile1+" et " + id_tuile2}
}

module.exports=Plateau