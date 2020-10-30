// Main js script

//import modules
// const Climb = require('./climb');
// **************************************
function Climb(name, grade, location, date, type, sent) {
	this.name = name;
	this.grade = grade;
	this.location = location;
	this.date = date;
	this.type = type;
	this.sent = sent;
}

// const ClimbLib = require('./climbLib'); 
// **************************************
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


// const DomManipulation = require('./html');
// **************************************
function DomManipulation(){}

DomManipulation.prototype.init = function(){
	const form = document.createElement('form');
	form.id = 'addClimbForm';
	const input = document.createElement('input');
	input.id = 'addClimbInput';
	form.appendChild(input);

	const table = document.createElement('table');
	table.id = 'climbTable';
	return {
		form, table
	}
}



//*******SCRIPT*********//
const body = document.querySelector('body');

const Dom = new DomManipulation();
Dom.init();

console.log(Dom.init().form)
console.log(Dom.init().table)








