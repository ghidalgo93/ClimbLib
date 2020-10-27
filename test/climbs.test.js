// const Climbs = require('../src/climbs');
const add = require('../src/climbs');
const Climb = require('../src/climb');

it('addition of new climb to empty library', () => {
	const testClimb = new Climb();
	let arr = [];
	expect(add(arr, testClimb)).toEqual([testClimb]);
})

it('addition of new climb to populated library', () => {
	const testClimb1 = new Climb();
	const testClimb2 = new Climb();
	let arr = [testClimb1];
	expect(add(arr, testClimb2)).toEqual([testClimb1, testClimb2]);
})

it('correct types', () => {
	expect(() => add(1,1)).toThrow();
	const testClimb = new Climb();
	let arr = [];
	expect(() => add(testClimb, arr)).toThrow();
})
