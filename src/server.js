
//import dependency
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//Express init => server = object 
const server = express();

server

//Use body request
.use(express.urlencoded({extended: true}))
//Use static's archives
.use(express.static('public'))

//Configure template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//Creating route
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//Turn on server
server.listen(5000);


