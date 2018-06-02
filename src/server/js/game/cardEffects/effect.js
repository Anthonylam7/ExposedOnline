/*
	Effects are game elements used to introduced special effects.
	Typically Effects are a composition of multiple more basic effects. Behaviors are
	used to refer to these base effects.
*/


export default class Effect
{
	constructor(id, targets, type="")
	{
		this.id = id;
		this.targets = targets;
		this.behaviors = [];
		this.promtType = type;
	}

	doBehavior(){
	}
};