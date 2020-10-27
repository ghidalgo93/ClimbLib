const Climb = require('./climb'); 

let climbLib = [];

function add(lib, climb){
	if ((!Array.isArray(lib)) || (typeof climb !== 'object')){
		throw new TypeError('Wrong types given, usage: add([array] library, [climb object] climb)');
	}
	return lib.concat(climb);
}

module.exports = add;


