/* 
	Cards are containers for card information from the database
*/


export default class Card
{
	constructor(name, effectName, effectDesc, effectBehaviors, imgName)
	{
		this.name = name;
		this.effectName = effectName;
		this.effectDesc = effectDesc;
		this.effectBehaviors = effectBehaviors;
		this.imgName = imgName;
	}
}