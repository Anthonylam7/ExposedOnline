/* 
	THe Player class abstracts information about a player's state.
*/


export default class Player
{
	constructor(uuid, ip)
	{
		this.identity = null;
		this.stash = 0;
		this.address = ip;
		this.uuid = uuid;
		this.moveHistory = [];
		this.maxHistory = 5;
	}

	setIdentity(identity)
	{
		if(this.identity !== null)
		{
			return this;
		}
			this.identity = identity;
		return this;
	}

	addToHistory(action)
	{
		if(this.moveHistory.length < this.maxHistory)
		{
			this.moveHistory.unshift(action);
		}
		else
		{
			this.moveHistory.pop();
			this.moveHistory.unshift(action);
		}
		return this;
	}

	set maxSize(val)
	{
		if(val >= 0)
		{
			this.maxHistory = val;
		}
		return this;
	}
}