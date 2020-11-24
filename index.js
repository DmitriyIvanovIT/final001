// JS is cool
require('http')
.Server((req, res) => {

const CORS = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET,POST,DELETE',
	'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};
res.writeHead(200, CORS);
if (req.url === '/day') return res.end(new Date().getDate());
if (req.url === '/v8') return res.end('6.8.275.32-node.55');
if (req.url === '/login') return res.end(' ВАШ ЛОГИН');
if (req.url === '/package.json') return require('fs').createReadStream('./package.json').pipe(res);
if (req.url === '/login') return res.end(' ВАШ ЛОГИН');
if (req.url === '/node') return res.end('10.19.0');
if (req.url === '/mirror?x=') return res.end(window.location.search.split('=')[1]);
res.end('Dmitriy Ivanov');
})
.listen(process.env.PORT);
