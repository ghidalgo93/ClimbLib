// const ClimbLib = require('../src/climbLib');
// const Climb = require('../src/climb');
// const DomManipulation = require('../src/html');
const ClimbLib = require('../src/main').ClimbLib; //while I figure out modules, I'm combining them
const Climb = require('../src/main').Climb; //while I figure out modules, I'm combining them
const DomManipulation = require('../src/main').DomManipulation; //while I figure out modules, I'm combining them




describe('Testing DOM manipulation', function(){
	let Dom, climb, climbLib, props;
	beforeEach(function(){
		climb1 = new Climb('test.name1', 'test.grade1', 'test.location1', 'test.date1', 'test.type1', false);
		climb2 = new Climb('test.name2', 'test.grade2', 'test.location2', 'test.date2', 'test.type2', true);
		climbLib = new ClimbLib();
		climbLib.addClimb(climb1);
		climbLib.addClimb(climb2);
		props = Object.keys(climb1);
		Dom = new DomManipulation(climbLib);
	})

	it('should return a thead', function(){
		const thead = document.createElement('thead');
		const row = thead.insertRow();
		for (let key of props){
			let thCell = document.createElement('th');
			let text = document.createTextNode(key);
			thCell.appendChild(text);
			row.appendChild(thCell);
		}
		expect(Dom.createTableHead()).toEqual(thead)
	})

	it('should return tablebody filled with the climbLib', function(){
		const tbody = document.createElement('tbody');
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
			row.dataset.index = lib.indexOf(climb);
		}
		//########TODO expect row of one to equal specific index:     expect(tbody.childNodes)
		expect(Dom.createTableBody()).toEqual(tbody);
	});

	it('should return table', function(){
		const table = document.createElement('table');
		table.id = 'climbTable';
		const thead = Dom.createTableHead();
		const tbody = Dom.createTableBody();
		table.appendChild(thead);
		table.appendChild(tbody);
		expect(Dom.createTable()).toEqual(table);
	})

})
