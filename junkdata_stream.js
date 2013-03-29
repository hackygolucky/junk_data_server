var junkdata_stream = require('junkdata-stream')
 
var server = junkdata(
  33  // milliseconds between junk!
, {   // shape of junk!
    keyname: Number
  , otherKey: String
  , someOtherKey: Boolean
  }
)
 
junkdata_stream.on('data', console.log)