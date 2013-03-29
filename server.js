// Junk data server

var hyperquest = require('hyperquest')
	, http = require('http')
	, junkdata_stream = ('junkdata_stream')

var server = http.createServer(function (req, res) {
    res.writeHead(req.url.slice(1) + '\n');
    setTimeout(res.end.bind(res), 3000);
});





