const http = require('http')
const fs = require('fs')
const index = fs.readFileSync('index.html')
const error404 = fs.readFileSync('error404.html')

//Create server http.
http.createServer((req, res) => {
	const paths = ['/path/index']
	if (paths.find(path => path === req.url ? true : false)) {
		res.write(index)
	} 
	else
		res.write(error404)

	res.end()
	
}).listen(3000, () => 
	console.log('Servidor rodando na porta 3000')
)