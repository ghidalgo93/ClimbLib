// const Climb = require('../src/climb');
const Climb = require('../src/main').Climb; //while I figure out modules, I'm combining them

it('basic creation', () => {
	const climb = new Climb('test.name', 'test.grade', 'test.location', 'test.date', 'test.type', 'test.sent');
	expect(climb.name).toBe('test.name');
	expect(climb.grade).toBe('test.grade');
	expect(climb.location).toBe('test.location');
	expect(climb.date).toBe('test.date');
	expect(climb.type).toBe('test.type');
	expect(climb.sent).toBe('test.sent');
});

it('no property names', () => {
	const climb = new Climb();
	expect(climb.name).toBe(undefined);
	expect(climb.grade).toBe(undefined);
	expect(climb.location).toBe(undefined);
	expect(climb.date).toBe(undefined);
	expect(climb.type).toBe(undefined);
	expect(climb.sent).toBe(undefined);
})


