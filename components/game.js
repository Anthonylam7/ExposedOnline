/*
	The game class is the entry point for starting a game of exposed.
	It enforces all high level game logic and manage underlying constructs such as cards and decks.
*/


class Game
{
	constructor(numPlayer)
	{
		this.gameover = false;
		this.winner = null;

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

	addPlayers()
	{
		// Deal each player a card
		// Instantiate a player instance with card
		// Add player to player list
		for (let i = 0; i < this.players.length; i++)
		{
			let card = this.deck.deal();
			let player = new Player();
			player.card = card;
			this.players[i] = player;
		}
		return this;
	}

	setupDeck()
	{
		// Load up deck based on number of players
	}

	setupBoard()
	{
		// Use deck to populate board
		// Shuffle deck again after placing onto board
		for (let i = 0; i < this.board.length; i++)
		{
			let top_card = this.deck.cards[i];
			let card = new Card(top_card.name, top_card.desc, top_card.img);
			this.board[i] = card;
		}
		this.deck.shuffle();
	}

	main()
	{
		// Main game loop
	}

	update()
	{
		// update events
	}
}