/*
	The PlayerManager class holds logic regarding player such as:
		* the current player turn
		* player states 
		* playerIds validations for the current game for reconnects and to prevent unauthorized play
		* player move history
*/
import Player from "./player";

export default class PlayersManager
{
	constructor(numPlayers)
	{
		this.players = new Array(numPlayers);
		this.playersInRoom = 0;
		this.playerIndex = Math.floor(numPlayers * Math.random());
	}

	findPlayer(uuid, ip)
	{
		for(let i = 0; i < this.players.length; i++)
		{
			let player = this.players[i]
			if(player)
			{
				if(player.uuid === uuid || player.address === ip)
				{
					return player;
				}
			}
		}
		return null;
	}

	addPlayer(uuid, ip)
	{
		// Only add new players when space available. Should not be used for spectators(TBD).
		if(this.playersInRoom < this.players.length && this.findPlayer(uuid, ip) === null)
		{
			let newPlayer = new Player(uuid, ip)
			this.players[this.playersInRoom] = newPlayer;
			this.playersInRoom += 1;
			return newPlayer;
		}
		throw "Error: Game does not accept anymore players.";
	}

	deletePlayer(uuid, ip)
	{
		let player = this.findPlayer(uuid, ip);
		if(player !== null)
		{
			this.players.splice(this.players.indexOf(player), 1);
			this.playersInRoom -= 1;
			// Adds a placeholder at the end for a new player;
			this.players.push(null);
			return player;
		}
		throw "Error: Trying to remove a player that does not exist.";
	}

	changeRoomSize(newSize)
	{
		throw "TODO";
	}

	assignIdentity(uuid, identity)
	{
		// This method is called when cards are dealt to bind a role to a player such as "Doctor"
		let player = this.findPlayer(uuid, null);
		player.setIdentity(identity);
	}

	get nextPlayerTurn()
	{
		this.playerIndex = (this.playerIndex + 1) % this.players.length;
		return this.players[this.playerIndex];
	}

	validateReconnect(ip)
	{
		return this.findPlayer(null, ip) !== null;
	}

	history(uuid)
	{
		let player = this.findPlayer(uuid, null);
		if(player === null)
		{
			throw "Can't find history of a Player that does not exists.";
		}
		return player.moveHistory;
	}

	addToHistory(uuid, action)
	{
		// Adds action to a player
		let player = this.findPlayer(uuid, null);
		if(player === null)
		{
			throw "Error: No player to append actions to."
		}
		player.addToHistory(action);
		return player;
	}
}