const nameComponents = [['Monsieur','King','Doctor','Lord','Professor'],['Fire','Evil','Pain','Poison','War','Nightmares','Thorns','Night','Storms'],['Darkness','Grief','Suffering','Sorrow','Torment','Sin','Madness','Heartache','Gloom','Agony','Melancholy','Anguish']];

const generateName = (components) =>
{
	let outputName = [];
	for (let i = 0; i < components.length; i++)
	{
		let componentCount = components[i].length;
		let randomComponent = (number) =>
		{
			return Math.floor(Math.random() * number)
		};
		outputName.push(components[i][randomComponent(componentCount)]);
	};
	return "Your villain name is 'The " + outputName[0] + " of " + outputName[1] + " and " + outputName[2] + "'!"
};

console.log(generateName(nameComponents))