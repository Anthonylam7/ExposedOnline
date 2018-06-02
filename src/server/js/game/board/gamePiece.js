/* 
	GamePieces represent specific tiles on the game board.
	Each piece hold state information for specific tiles such as name, position, etc.
*/


export default class GamePiece
{
	constructor(name, position, wallets)
	{
		this.name = name;
		if(!Array.isArray(position) || position.length !== 2)
		{
			throw "Position should be an Array of length 2"; 
		}
		this.position = position;
		this.wallets = wallets;
		this.playerRef = null;
		this.isTarget = false;
		this.isExposed = false;
	}

	get player()
	{
		return this.playerRef;
	}

	set player(playerInstance)
	{
		if (this.playerRef == null)
		{	
			this.playerRef = playerInstance;
		}
		return this;
	}

	expose()
	{
		this.isExposed = true;
		return this;
	}

	mark()
	{
		// A player can not also be a target.
		if(!this.playerRef){
			this.isTarget = true;
		}
		return this;
	}

	removeMark()
	{
		this.isTarget = false;
		// Once a target loses its mark it is automatically considered exposed.
		this.expose();
		return this;
	}

	steal()
	{
		if(this.wallets <= 0)
		{
			throw "Can't steal from tile with 0 walllets."
		}
		this.wallets -= 1;
		if(this.isTarget)
		{
			this.removeMark();
		}
	}
}