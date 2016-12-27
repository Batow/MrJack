var JackFacade = require('./lib/JackFacade')
var express = require('express');

var app = express();

app.get('/',function(req,res){
	res.setHeader('Content-Type', 'text/plain');
	res.end("Vous êtes à l'accueil");
});

app.get('/deplacement/:id_partie/:id_joueur/:id_enqueteur/:nb_deplacement',function(req,res){
	res.setHeader('Content-Type', 'application/json');
	res.end(JackFacade.deplacement(req.params.id_partie,req.params.id_joueur,req.params.id_enqueteur,req.params.nb_deplacement));
});

app.get('/rotation/:id_partie/:id_joueur/:id_piece/:nb_rotation',function(req,res){
	res.setHeader('Content-Type', 'application/json');
	res.end(JackFacade.rotation(req.params.id_partie,req.params.id_joueur,req.params.id_piece,req.params.nb_rotation));
});

app.get('/echange/:id_partie/:id_joueur/:id_piece1/:id_piece2',function(req,res){
	res.setHeader('Content-Type', 'application/json');
	res.end(JackFacade.echange(req.params.id_partie,req.params.id_joueur,req.params.id_piece1,req.params.id_piece2));
});

app.get('/pioche/:id_partie/:id_joueur',function(req,res){
	res.setHeader('Content-Type', 'application/json');
	res.end(JackFacade.pioche(req.params.id_partie,req.params.id_joueur));
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

app.listen(8080);