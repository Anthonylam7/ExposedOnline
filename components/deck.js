/*
	Decks contain all cards for the current game instance
	Cards are stored in an array as names.
	The goal of a deck is to: 
		* Manage cards available for the current game instance
		* Assign players their role
		* Update targets in play
*/

class Deck
{
	constructor(numPlayer)
	{
		this.numPlayer = numPlayer;
		this.cards = [];
	}

	loadDeck()
	{
		let numPlayer = this.numPlayer;
		if (numPlayer === 2)
		{
			this.numCards = 16; 
		}
		else if (numPlayer === 3 or numPlayer === 4)
		{
			this.numCards = 25;
		}
		else if (numPlayer === 5 or numPlayer === 6)
		{
			this.numCards = 36;
		}

		this.addCardsFromPreset(numPlayer);
		return this;
	}

	addCardsFromPreset(numPlayer)
	{
		// use numPlayer as a filter criteria for adding cards to deck from preset.
		// Deck is shuffled afterwards
		// Todo: implement after a concrete implementation of EffectCards.
		return this;
	}

	deal()
	{
		// Deal the top card on the deck
		if (this.cards.length > 0)
		{
		card = this.cards[0];
		this.cards = this.cards.slice(1);
		}
		return card
	}

	shuffle()
	{
		//  Uses Fisher-Yates Algorithm for in-place shuffle
		for( let i = 0; i < this.cards.length; i++)
		{
			const j = Math.floor(Math.random() * (i+1));
			let temp = this.cards[i];
			this.cards[i] = this.cards[j];
			this.cards[j] = this.cards[i];
		}
		return this;
	}
}