const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index );
routes.post('/ongs', OngController.create);
 
routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
    //async(request, response) =>{
    //quer retornar uma resposta, usa o response. use send(tipo um print) para mandar o texto, tem o formato json dps do . tbm
        //para acessar o corpo da request
  
module.exports = routes;


