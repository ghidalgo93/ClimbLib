const ClimbLib = require('../src/climbLib')
const Climb = require('../src/climb')
const DomManipulation = require('../src/html')



describe('Testing DOM manipulation', function(){
	let Dom, climb, climbLib;
	beforeEach(function(){
		Dom = new DomManipulation();
		climb = new Climb('test.name1', 'test.grade1', 'test.location1', 'test.date1', 'test.type1', false);
		climbLib = new ClimbLib();
	})

	it('should initialize HTML', function(){
		const form = document.createElement('form');
		form.id = 'addClimbForm';
		const input = document.createElement('input');
		input.id = 'addClimbInput'
		const table = document.createElement('table');
		table.id = 'climbTable';
		
		form.appendChild(input);

		expect(Dom.init().form).toEqual(form);
		expect(Dom.init().table).toEqual(table);

	})

})
