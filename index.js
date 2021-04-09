const express = require('express');
const app = express();
const fs = require('fs')

const PORT = process.env.PORT || 1313;

/*

app.get('/endpoint*', (req, res) => {
	res.json({
		ptOne: [
			{
				ptTwo: "Oi :D",
				ptTwoTwo: "Hi :D"
			}
		]
	})
})


*/

app.get('/sobre', (req, res) => {
	res.json({
		criador: 'Fox'
	})
})

app.get('/face', (req, res) => {
	let rndFc = fs.readFileSync('./faces.txt').toString().split('\n')
	let randomFace = rndFc[Math.floor(Math.random() * rndFc.length)]

	res.json({
		face: randomFace
	})
})

app.get('/', (req, res) => {
	res.json({
		0: 'EndPoints:',
		1: '/sobre',
		2: '/face'
	})
})

app.listen(PORT, () => {
	console.log('Enter in port: ' + PORT)
})
