/* 
	Cards corresponds to the units laid out on the tile of the game. Not to be confused with cards explaining the effects.
*/


function getType(elem)
{
	return Object.prototype.toString().call(elem).slice(8, -1);
}


class Card
{
	
	constructor(name, desc, imgPath)
	{
		this.name = name;
		this.desc = desc;
		this.imgPath = imgPath;
		this.playerRef = null;
		this.isTarget = false;
		this.isExposed = false;
		this.position = [0, 0]
		this.wallets = 1
	}

	get player()
	{
		return this.playerRef;
	}

	set player(instance)
	{
		if (!this.playerRef)
		{	
			this.player = instance;
		}
		return this;
	}

	move(x ,y)
	{
		if (getType(x) === "Number" and getType(y) === "Numbers")
		{
			this.position = [x, y];
			return this;
		}
	}

	expose()
	{
		thisisExposed = true;
		return this;
	}

	markAsTarget()
	{
		this.isTarget = true;
		return this;
	}
}