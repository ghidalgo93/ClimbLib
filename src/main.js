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

DomManipulation.prototype.createTable = function(headings){
	let table = document.createElement('table');
	table.id = 'climbTable';
	let thead = table.createTHead(); 	
	let row = thead.insertRow();
	for (let key of headings){
		let thCell = document.createElement('th');
		let text = document.createTextNode(key);
		thCell.appendChild(text);
		row.appendChild(thCell);
	}
	return table;
}

DomManipulation.prototype.createTableBody = function(climbLib){
	let tbody = document.createElement('tbody');
	let lib = climbLib.getLib();
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


//*******SCRIPT*********//
const ogClimb = new Climb();
const headings = Object.keys(ogClimb);

const climbLib = new ClimbLib();
const climb1 = new Climb('test.name1', 'test.grade1', 'test.location1', 'test.date1', 'test.type1', false);
const climb2 = new Climb('test.name2', 'test.grade2', 'test.location2', 'test.date2', 'test.type2', true);
climbLib.addClimb(climb1);
climbLib.addClimb(climb2);

const body = document.querySelector('body');
const Dom = new DomManipulation();
const table = Dom.createTable(headings);
body.appendChild(table);
table.appendChild(Dom.createTableBody(climbLib));



module.exports.Climb = Climb;
module.exports.ClimbLib = ClimbLib;
module.exports.DomManipulation = DomManipulation;





























