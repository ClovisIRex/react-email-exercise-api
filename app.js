const express = require('express');
const app = express();
const {data} = require('./c');
const _ = require('lodash');
const cors = require('cors');
const bodyParser = require('body-parser');

const emails = ['ofer@totango.com' , 'idan@totango.com','manu@totango.com','dor@totango.com','asher@totango.com','peshi@totango.com','sharon@totango.com','tal@totango.com','oryan@totango.com','david@totango.com'];

app.use(cors());
app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));
app.use(bodyParser.json({limit: '10mb'}));

app.get('/', (req, res) => {
	res.json(_.filter(data , x => _.toUpper(x.name[0]) <= _.toUpper(req.query.q)));
});

app.post('/email', (req, res) => {
	const {email} = req.body;
	setTimeout(() => res.json({exists: emails.indexOf(email) !== -1}), 600);
});

app.listen(3009);
