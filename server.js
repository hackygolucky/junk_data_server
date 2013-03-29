// Junk data server
var junkdata_stream = require('./junkdata-stream')
	, http = require('http')
	,	fs = require('fs')

var server = http.createServer(function (req, res) {
		var ttl = 33
			, mappings = {
			    keyname: Number
			  , otherKey: String
			  , someOtherKey: Boolean
		  }
    var stream = junkdata_stream(ttl, mappings);
    stream.on('error', function (err) {
        res.statusCode = 500;
        res.end(String(err));
    });
    stream.pipe(res);
});

server.listen(8000)