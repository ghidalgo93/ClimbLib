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
function DomManipulation(climbLib){
	this.climb = new Climb();
	this.headings = Object.keys(this.climb);
	this.climbLib = climbLib;
}

DomManipulation.prototype.createTableHead = function(){
	let thead = document.createElement('thead');
	let row = thead.insertRow();
	for (let key of this.headings){
		let thCell = document.createElement('th');
		let text = document.createTextNode(key);
		thCell.appendChild(text);
		row.appendChild(thCell);
	}
	return thead;
}

DomManipulation.prototype.createTableBody = function(){
	let tbody = document.createElement('tbody');
	let lib = this.climbLib.getLib();
	for (let climb of lib){
		let row = tbody.insertRow();
		let values = Object.values(climb);
		for (let value of values){
			let tdCell = document.createElement('td');
			let text = document.createTextNode(value);
			tdCell.appendChild(text);
			row.appendChild(tdCell);
		}
	}
	return tbody;
}

DomManipulation.prototype.createTable = function(){
	let table = document.createElement('table');
	table.id = 'climbTable';
	let thead = this.createTableHead();
	let tbody = this.createTableBody();
	table.appendChild(thead);
	table.appendChild(tbody);
	return table;
}


//*******SCRIPT*********//

const climbLib = new ClimbLib();

const body = document.querySelector('body');
const Dom = new DomManipulation(climbLib);
const table = Dom.createTable();
body.appendChild(table);

module.exports.Climb = Climb;
module.exports.ClimbLib = ClimbLib;
module.exports.DomManipulation = DomManipulation;





























