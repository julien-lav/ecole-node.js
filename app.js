let express = require('express')
let events = require('events')
let bodyParser = require('body-parser')
let nodemailer = require('nodemailer')
let xoauth2 = require('xoauth2')
let path = require('path')

let app = express()
app.set('view engine', 'ejs') 
app.use('/assets', express.static('assets')) //css-js
app.use(express.static(__dirname + '/assets')) // images
//app.use('/assets', express.static(path.join(__dirname + '/assets'))) //css-js
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// process.env.NODE_ENV
app.get('/', (req, res) => {res.render('pages/index')})
app.get('/contact', (req, res) => {res.render('pages/contact')})
app.get('/ecran_narration', (req, res) => {res.render('pages/ecran_narration')})
app.get('/elements', (req, res) => {res.render('pages/elements')})
app.get('/ensemble', (req, res) => {res.render('pages/ensemble')})
app.get('/ensemble_a_la_carte_2', (req, res) => {res.render('pages/ensemble_a_la_carte_2')})
app.get('/equipes_enseignantes', (req, res) => {res.render('pages/equipes_enseignantes')})
app.get('/films_etudiants', (req, res) => {res.render('pages/films_etudiants')})
app.get('/formes_narrative', (req, res) => {res.render('pages/formes_narrative')})
app.get('/masterclass', (req, res) => {res.render('pages/masterclass')})
app.get('/methode', (req, res) => {res.render('pages/methode')})
app.get('/modules_optionnels', (req, res) => {res.render('pages/modules_optionnels')})
app.get('/modules_pratiques', (req, res) => {res.render('pages/modules_pratiques')})
app.get('/modules_theoriques', (req, res) => {res.render('pages/modules_theoriques')})
app.get('/mooc', (req, res) => {res.render('pages/mooc')})
app.get('/mooc_open', (req, res) => {res.render('pages/mooc_open')})
app.get('/nos_intentions', (req, res) => {res.render('pages/nos_intentions')})
app.get('/option_2', (req, res) => {res.render('pages/option_2')})
app.get('/pedagogie_prog', (req, res) => {res.render('pages/pedagogie_prog')})
app.get('/planning', (req, res) => {res.render('pages/planning')})
app.get('/plateforme', (req, res) => {res.render('pages/plateforme')})
app.get('/pratiques', (req, res) => {res.render('pages/pratiques')})
app.get('/presentation', (req, res) => {res.render('pages/presentation')})
app.get('/programme', (req, res) => {res.render('pages/programme')})
app.get('/theorique_prog', (req, res) => {res.render('pages/theorique_prog')})
app.get('/theoriques_optionnels', (req, res) => {res.render('pages/theoriques_optionnels')})
app.get('/un_realisateur', (req, res) => {res.render('pages/un_realisateur')})
app.get('/videoconf', (req, res) => {res.render('pages/videoconf')})
app.get('/videoconf_2', (req, res) => {res.render('pages/videoconf_2')})

app.post('/send', (req, res) => {
	let output = `
		<p>Nouveau message </p>
		<h3>Informations :</h3>
			<ul>
				<li> Nom : ${req.body.name} </li>
				<li> Prenom : ${req.body.firstname} </li>
				<li> E-mail : ${req.body.mail} </li>
				<li> Sujet : ${req.body.subject} </li>
			</ul>
			<h3> Message : ${req.body.message} </h3>
	`;
	var transporter = nodemailer.createTransport({
	    service: 'gmail',
	    auth: {
	        xoauth2: xoauth2.createXOAuth2Generator({
	            user: 'my.email@gmail.com',
	            clientId: 'XXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com',
	            clientSecret: 'XXXXXXXXXXXXXXXXXXXXXXXX',
	            refreshToken: 'X/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
	        })
	    }
	})
	var mailOptions = {
	    from: 'My Name <my.email@gmail.com>',
	    to: 'receiver.email@gmail.com',
	    subject: 'Nodemailer test',
	    text: 'Hello World!!',
	    html: output
	}
	transporter.sendMail(mailOptions, function (err, res) {
	    if(err){
	        console.log('Error');
	    } else {
	        console.log('Email Sent');
	    }
	})
})

app.get('*', (req, res) => {res.render('pages/404')})

app.listen(8080)