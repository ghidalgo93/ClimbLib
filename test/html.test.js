// const ClimbLib = require('../src/climbLib');
// const Climb = require('../src/climb');
// const DomManipulation = require('../src/html');
const ClimbLib = require('../src/main').ClimbLib; //while I figure out modules, I'm combining them
const Climb = require('../src/main').Climb; //while I figure out modules, I'm combining them
const DomManipulation = require('../src/main').DomManipulation; //while I figure out modules, I'm combining them




describe('Testing DOM manipulation', function(){
	let Dom, climb, climbLib;
	beforeEach(function(){
		Dom = new DomManipulation();
		climb = new Climb('test.name1', 'test.grade1', 'test.location1', 'test.date1', 'test.type1', false);
		climbLib = new ClimbLib();
	})

	it('should initialize HTML form and table', function(){
		const form = document.createElement('form');
		form.id = 'addClimbForm';
		const table = document.createElement('table');
		table.id = 'climbTable';
		expect(Dom.init().form).toEqual(form);
		expect(Dom.init().table).toEqual(table);

	})

	it('should create an input element with default parameters left out', function(){
		const input = document.createElement('input');
		input.name = '';
		input.placeholder = '';
		input.type = 'text';
		input.value = '';
		input.maxLength = '200';
		input.required = 'required';
		expect(Dom.createInput()).toEqual(input);
	})

	it('should create an input element with all parameters provided', function(){
		const input = document.createElement('input');
		input.name = 'testName';
		input.placeholder = 'testPlaceholder';
		input.type = 'testText';
		input.value = 'testValue'
		input.maxLength = '200';
		input.required = 'required';
		expect(Dom.createInput('testName', 'testPlaceholder', 'testText', 'testValue', '200', 'required')).toEqual(input);
	})

	it('should create a label element with a select child with N options', function(){
		const label = document.createElement('label');
		label.for = 'testFor';
		const select = document.createElement('select');
		select.id = 'testID';
		select.name = 'testName';
		const option1 = document.createElement('option');
		option1.value = 'option1';
		const option2 = document.createElement('option');
		option2.value = 'option2';
		label.appendChild(select);
		select.appendChild(option1);
		select.appendChild(option2);
	})

})
