/* 
	The Board class is an array like container for game pieces in play.
	It serves as a clear interface for querying specific game piece information, carrying out validated actions,
	and additionally is used by the server for initializing the game layout for clients connecting to the game.
*/
import GamePiece from "./gamePiece";


export default class Board
{
	constructor(numPlayer, deck)
	{
		this.numExposed = 0;
		this.numWalletsInPlay = 0;
		switch(numPlayer)
		{
			case 2:
				this.width = 4;
				break;
			case 3:
			case 4:
				this.width = 5;
				break;
			case 5:
			case 6:
				this.width = 6;
				break;
			default:
				throw "Board supports a max of 6 players and a minimum of 2 players";
		}

		this.totalTiles = this.width * this.width
		this.tiles = new Array(this.totalTiles);

		// initializes card from deck
		for( let i = 0; i < this.tiles.length; i++)
		{
			let card = deck[i];
			let position = [i % this.width, Math.floor(i / this.width)];
			this.tiles[i] = new GamePiece(card.name, position, 1);
		}

		// Add a wallet to corner pieces
		this.tiles[0].wallets += 1;
		this.tiles[this.width - 1].wallets += 1;
		this.tiles[this.width * (this.width - 1)].wallets += 1;
		this.tiles[this.width * this.width - 1].wallets += 1;

		this.numWalletsInPlay = 4 + this.totalTiles;
	}

	get wallets()
	{
		return this.numWalletsInPlay;
	}

	get tilesLeft()
	{
		return this.totalTiles - this.numExposed;
	}

	card(x, y)
	{
		if( x >= this.width || this.y >= this.width)
		{
			throw "Indexing out of array dimensions";
		}
		return this.tiles[y * this.width + x];
	}

	swap(from, to)
	{
		//aka "MOVE" action on adjacent tiles. Left unchecked because an effect card 'could' ignore the rule.
		if(from[0] >= this.width || from[1] >= this.width || to[0] >= this.width || to[1] >= this.width)
		{
			throw "Indexing out of array dimensions";
		}
		if(from[0] == to[0] && from[1] == to[1])
		{
			throw "Error: 'From' and 'To' are the same."
		}
		let temp = this.tiles[to[0] + this.width * to[1]];
		this.tiles[to[0] + this.width * to[1]] = this.tiles[from[0] + this.width * from[1]];
		this.tiles[from[0] + this.width * from[1]] = temp;
		return this;
	}

	mark(target)
	{
		if(target[0] >= this.width || target[1] >= this.width)
		{
			throw "Error: Indexing out of array dimensions"
		}
		this.card(...target).mark();
		return this;
	}

	expose(target)
	{
		if(target[0] >= this.width || target[1] >= this.width)
		{
			throw "Error: Indexing out of array dimensions"
		}
		this.card(...target).expose();
		return this;
	}

	steal(target)
	{
		if(target[0] >= this.width || target[1] >= this.width)
		{
			throw "Error: Indexing out of array dimensions"
		}
		this.card(...target).steal();
		return this;
	}
};