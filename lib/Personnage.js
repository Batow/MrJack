/*
* Classe représentant les personnages présents sur les cartes et sur les tuiles
* @author : Batow
*/

var Shared = require("./Shared");

//
//	Constructeur
//	Nom : nom du personnage
//	NbSablier : nombre de sablier associé au personnage
//	Couleur : couleur de la tuile sur laquelle il se trouve
//
function Personnage(nom, nbSablier, couleur){
	this.id = Shared.generateUUID();
	this.nom = nom;
	this.nbSablier = nbSablier;
	this.couleur = couleur;
}

module.exports = Personnage;