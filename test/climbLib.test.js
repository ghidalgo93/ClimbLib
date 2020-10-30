// const ClimbLib = require('../src/climbLib');
// const Climb = require('../src/climb');
const ClimbLib = require('../src/main').ClimbLib; //while I figure out modules, I'm combining them
const Climb = require('../src/main').Climb; //while I figure out modules, I'm combining them


describe('Testing the functionality of the climbLib object', () => {
	let climbLib, testClimb1, testClimb2;
	beforeEach(function(){
		climbLib = new ClimbLib();
		testClimb1 = new Climb('test.name1', 'test.grade1', 'test.location1', 'test.date1', 'test.type1', false);
		testClimb2 = new Climb('test.name2', 'test.grade2', 'test.location2', 'test.date2', 'test.type2', true);
	})

	it('should add a climb', () => {
		climbLib.addClimb(testClimb1);
		expect(climbLib.getLib().length).toBe(1);
	})

	it('should remove a climb', () => {
		climbLib.addClimb(testClimb1);
		climbLib.addClimb(testClimb2);
		climbLib.removeClimb(1);
		expect(climbLib.getLib().length).toBe(1);
		expect(climbLib.getLib()[0].name).toBe('test.name1');
	})

	it('should mark climb as sent', () => {
		climbLib.addClimb(testClimb1);
		climbLib.addClimb(testClimb2);
		climbLib.didSend(0);
		expect(climbLib.getLib().find(climb => climbLib.getLib().indexOf(climb) === 0).sent).toBe(true);
	})

	it('should mark climb as not-sent', () => {
		climbLib.addClimb(testClimb1);
		climbLib.addClimb(testClimb2);
		climbLib.notSend(1);
		expect(climbLib.getLib().find(climb => climbLib.getLib().indexOf(climb) === 1).sent).toBe(false);
	})
})



// it('getLib returns empty lib', () => {
// 	const climbLib = new ClimbLib();
// 	expect(climbLib.getLib()).toEqual([]);
// })

// it('getLib returns populated lib', () => {
// 	const climbLib = new ClimbLib();
// 	const testClimb1 = new Climb();
// 	const testClimb2 = new Climb('test.name', 'test.grade', 'test.location', 'test.date', 'test.type', 'test.sent');
// 	climbLib._lib = [testClimb1, testClimb2];
// 	expect(climbLib.getLib()).toEqual([testClimb1, testClimb2]);
// })

// it('addClimb returns lib with added climb', () => {
// 	const climbLib = new ClimbLib();
// 	const testClimb = new Climb();
// 	expect(climbLib.addClimb(testClimb)).toEqual([testClimb]);
// })

// it('addClimb actually adds the climb to lib', () => {
// 	const climbLib = new ClimbLib();
// 	const testClimb = new Climb();
// 	climbLib.addClimb(testClimb);
// 	expect(climbLib._lib).toEqual([testClimb]);
// })


// it('addClimb adds climb to populated lib', () => {
// 	const climbLib = new ClimbLib();
// 	const testClimb1 = new Climb();
// 	const testClimb2 = new Climb('test.name', 'test.grade', 'test.location', 'test.date', 'test.type', 'test.sent');
// 	climbLib._lib = [testClimb1, testClimb2];
// 	const testClimb3 = new Climb();
// 	climbLib.addClimb(testClimb3);
// 	expect(climbLib._lib).toEqual([testClimb1, testClimb2, testClimb3]);
// })


// it('correct types', () => {
// 	const climbLib = new ClimbLib();
// 	expect(() => climbLib.addClimb(1)).toThrow(); //numbers should throw error
// 	expect(() => climbLib.addClimb({})).toThrow(); //generic obj should throw error
// 	expect(() => climbLib.addClimb([])).toThrow(); //array should throw error
// })
