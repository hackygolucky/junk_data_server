// Junk data server 
var http = require('http')
	, hyperquest = require('hyperquest')
	, connect = require('connect')
	, tpl = require('tpl')

// Create server
var server = connect.createServer()

// Template for junk data
var template = {
		'key': 'some value'
	, 'key.2': 'some other value'
}

var entries = 20 // # of entries we want to generate for our fake data

var data = data_fixture.generate(template, entries)

// prep object for template
var data_fixture = {
	result: data
}

// get template
var fixture_template = tpl

// pass values to template
var output = tpl.render(fixture_template, data_fixture)





