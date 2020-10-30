// const ClimbLib = require('../src/climbLib');
// const Climb = require('../src/climb');
// const DomManipulation = require('../src/html');
const ClimbLib = require('../src/main').ClimbLib; //while I figure out modules, I'm combining them
const Climb = require('../src/main').Climb; //while I figure out modules, I'm combining them
const DomManipulation = require('../src/main').DomManipulation; //while I figure out modules, I'm combining them




describe('Testing DOM manipulation', function(){
	let Dom, climb, climbLib, props;
	beforeEach(function(){
		Dom = new DomManipulation();
		climb1 = new Climb('test.name1', 'test.grade1', 'test.location1', 'test.date1', 'test.type1', false);
		climb2 = new Climb('test.name2', 'test.grade2', 'test.location2', 'test.date2', 'test.type2', true);
		climbLib = new ClimbLib();
		climbLib.addClimb(climb1);
		climbLib.addClimb(climb2);
		props = Object.keys(climb1);
	})

	it('should return table with table header given array of headings', function(){
		const table = document.createElement('table');
		table.id = 'climbTable';
		const thead = table.createTHead();
		const row = thead.insertRow();
		for (let key of props){
			let thCell = document.createElement('th');
			let text = document.createTextNode(key);
			thCell.appendChild(text);
			row.appendChild(thCell);
		}
		expect(Dom.createTable(props)).toEqual(table);
	})

	it('should return tablebody given climbLib', function(){
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
		}
		expect(Dom.createTableBody(climbLib)).toEqual(tbody);
	});

})
