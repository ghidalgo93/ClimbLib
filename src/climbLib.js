const Climb = require('./climb'); 


function ClimbLib(){
	this.lib = [];
}

ClimbLib.prototype.addClimb = function(climb){
	this.lib.push(climb);
}

ClimbLib.prototype.removeClimb = function(index){
	this.lib = this.lib.filter(climb => this.lib.indexOf(climb) !== index);
}

ClimbLib.prototype.getLib = function(){
	return this.lib;
}

ClimbLib.prototype.didSend = function(index){
	this.lib.find(climb => this.lib.indexOf(climb) === index).sent = true;
}

ClimbLib.prototype.notSend = function(index){
	this.lib.find(climb => this.lib.indexOf(climb) === index).sent = false;
}


















// function ClimbLib() {
// 	this._lib = [];

// 	this.getLib = () => this._lib;
// 	this.addClimb = (climb) => {
// 		if (climb instanceof Climb === false){
// 			throw TypeError('Wrong type given, climb must be a climb object')
// 		}
// 		this._lib = this._lib.concat(climb);
// 		return this._lib;
// 	}
// }



module.exports = ClimbLib;
