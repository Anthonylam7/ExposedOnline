/*
	The game class is the entry point for starting a game of exposed.
	It enforces all high level game logic and manage underlying constructs such as cards and decks.
*/


class Game
{
	constructor(numPlayer)
	{
		if (numPlayer === 2)
		{
			this.boardWidth = 4;
			numTargets = 2;
		}
		else if (numPlayer === 3 || numPlayer === 4)
		{
			this.boardWidth = 5;
			numTargets = 3;
		}
		else if (numPlayer === 5 || numPlayer === 6)
		{
			this.boardWidth = 6;
			numTargets = 4
		}

		// Need to add players;
		this.players = new Array(numPlayer);
		this.deck = new Deck(numPlayer); // contains all the card for use in the current game
		// Need to add cards to board
		this.board = new Array(this.boardWidth * this.boardWidth); // Square board
		this.targets = new Array(numTargets);

	}	
}