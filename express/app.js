const cache = require('memory-cache')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

const arts = []

cache.put('arts', JSON.stringify(arts))

app.use(bodyParser.json())

app.get('/load', (req, res) => {
	let arts = JSON.parse(cache.get('arts'))

	res.json(arts[req.query.id])
})

app.get('/save', (req, res) => {
	let arts = JSON.parse(cache.get('arts'))
	let item = JSON.parse(req.query.data)
	arts.push(item)

	cache.put('arts', JSON.stringify(arts))

	res.json({success: true, stored: item})
})

app.get('/dump', (req, res) => res.json(JSON.parse(cache.get('arts'))))

app.get('/list', (req, res) => {
	let arts = JSON.parse(cache.get('arts'))

	let output = []

	for (let i = 0; i < arts.length; i++) {
		output.push({
			id: i,
			title: arts[i].title,
			tags: arts[i].tags,
			author: arts[i],
			author

		})
	}
	res.json(output)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
