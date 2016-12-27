/*
*	Facade entre les services et les plateaux de jeu
*	@author
*/

var Plateau = require("./Plateau");
var Shared = require("./Shared");

//Constructeur
function JackFacade(){
	//Ensemble des plateaux existant
	this.plateaux = [];
}

//Facade de l'évenement déplacement d'un pion enqueteur
JackFacade.prototype.deplacement=function(id_partie,id_joueur,id_enqueteur,nb_deplacement){
	//Test d'id_partie
	if(!id_partie){
		return {"ok" : "false", "message" : "id_partie non défini"}
	}

	//On tente de récupérer la partie courante
	var currentPartie = Shared.checkField(this.plateaux, "id_plateau", id_partie);

	//On vérifie que la partie demandée existe
	if(!currentPartie){
		return {"ok": "false", "message" : "Partie introuvable"}
	}

	//Test d'id_joueur
	if(!id_joueur){
		return {"ok" : "false", "message" : "id_joueur non défini"}
	}

	//Test de id_enqueteur
	if(!id_enqueteur){
		return {"ok" : "false", "message" : "id_enqueteur non défini"}
	}

	//Test de nb_deplacement
	if(typeof nb_deplacement !=="number"){
		return {"ok":"false", "message":"nb_deplacement doit être un nombre"}
	}

	//On vérifie que nb_déplacement est bien un entier
	if(Math.floor(nb_deplacement) !== nb_deplacement){
		return {"ok":"false", "message":"nb_deplacement doit être un entier"}
	}
	return currentPartie.deplacement(id_joueur,id_enqueteur,nb_deplacement);
}

//Facade de l'évenement rotation d'un tuile du jeu
JackFacade.prototype.rotation=function(id_partie,id_joueur,id_piece,nb_rotation){
	return id_joueur+" tente d'effectuer une rotation sur la piece "+id_piece+" de " + nb_rotation;
}

//Facade de l'évenement échange de tuile du jeu
JackFacade.prototype.echange=function(id_partie,id_joueur,id_piece1,id_piece2){
	return id_joueur+" tente d'effectuer une echange la piece "+ id_piece1 +" et " + id_piece2;
}

//Facade de l'évenement pioche
JackFacade.prototype.pioche=function(id_partie,id_joueur){
	return id_joueur+" pioche";
}

module.exports=JackFacade;