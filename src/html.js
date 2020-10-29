//****html functions****//

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



module.exports = DomManipulation; 
