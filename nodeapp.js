
console.log('Initializing app')

var fs = require ('fs')

// command line: node nodefile.js Netherlands

// Take in a parameter from the command line

readCountry(process.argv[2])


// Use readfile and json.parse to read and parse the countries.json file
function readCountry ( x ) {

	fs.readFile(__dirname + '/countries.json', 'utf8', function(err, data) {
		if (err) throw err
		var interpreted = JSON.parse(data)

//for loop runs through the objects in the string and identifies the object the value of which matches the given x (which is the value matching the "names" key)
//loop prints the name of the country and top Level Domain
		for (var i=0; i<interpreted.length; i++) {

			if (interpreted[i].name == x) {
				console.log("Country: " + interpreted[i].name )
				console.log("Top Level Domain: " + interpreted[i].topLevelDomain)
			}
		}
	})
}

// specify the type of data to be printed out by the function

//obj
// [{ "name":"Netherlands", "topLevelDomain": [".nl"]} ]