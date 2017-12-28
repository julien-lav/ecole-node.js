let express = require('express')
let events = require('events')
let bodyParser = require('body-parser')
let app = express()

app.set('view engine', 'ejs') 
app.use('/assets', express.static('assets'))
// process.env.NODE_ENV
app.get('/', (request, response) => {response.render('pages/index')})
app.get('/contact', (request, response) => {response.render('pages/contact')})
app.get('/ecrannarration', (request, response) => {response.render('pages/ecrannarration')})
app.get('/elements', (request, response) => {response.render('pages/elements')})
app.get('/ensemble', (request, response) => {response.render('pages/ensemble')})
app.get('/ensemble_a_la_carte_2', (request, response) => {response.render('pages/ensemble_a_la_carte_2')})
app.get('/equipes-enseignantes', (request, response) => {response.render('pages/equipes-enseignantes')})
app.get('/films-etudiants', (request, response) => {response.render('pages/films-etudiants')})
app.get('/formesnarrative', (request, response) => {response.render('pages/formesnarrative')})
app.get('/masterclass', (request, response) => {response.render('pages/masterclass')})
app.get('/methode', (request, response) => {response.render('pages/methode')})
app.get('/modulesoptionnels', (request, response) => {response.render('pages/modulesoptionnels')})
app.get('/modulespratiques', (request, response) => {response.render('pages/modulespratiques')})
app.get('/moduletheorique', (request, response) => {response.render('pages/moduletheorique')})
app.get('/mooc', (request, response) => {response.render('pages/mooc')})
app.get('/moocopen', (request, response) => {response.render('pages/moocopen')})
app.get('/nosintentions', (request, response) => {response.render('pages/nosintentions')})
app.get('/option2', (request, response) => {response.render('pages/option2')})
app.get('/pedagogie_prog', (request, response) => {response.render('pages/pedagogie_prog')})
app.get('/planning', (request, response) => {response.render('pages/planning')})
app.get('/plateforme', (request, response) => {response.render('pages/plateforme')})
app.get('/pratiques', (request, response) => {response.render('pages/pratiques')})
app.get('/presentation', (request, response) => {response.render('pages/presentation')})
app.get('/programme', (request, response) => {response.render('pages/programme')})
app.get('/theorique_prog', (request, response) => {response.render('pages/theorique_prog')})
app.get('/theoriquesoptionnels', (request, response) => {response.render('pages/theoriquesoptionnels')})
app.get('/unrealisateur', (request, response) => {response.render('pages/unrealisateur')})
app.get('/videoconf', (request, response) => {response.render('pages/unrealisateur')})
app.get('/videoconf2', (request, response) => {response.render('pages/unrealisateur')})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());






app.listen(8080)