/* 
	The Deck class keeps tabs on the cards available and cards that have been played and "discarded."
	This provides a clear interface to all card specific queries and actions
	Additionally a Deck can contain cards from various future card sets so Deck uses a loaded mechanic to
	fill a deck with cards.
*/
import DeckLoader from "./deckLoader";


export default class Deck
{
	constructor(numPlayer, cardSet, deckDatabasePath)
	{
		this.totalCards = 0;
		this.discarded = [];
		this.deck = DeckLoader(deckDatabasePath).loadDeck(numPlayer, cardSet);
	}

	deal(numCards)
	{
		let cards = new Array(numCards);
		for(let i = 0; i < numCards; i++)
		{
			// deal cards and remove them from the deck
			cards[i] = this.deck.shift();
		}
		return cards;
	}

	shuffle()
	{
		for( let i = 0; i < this.deck.length; i++)
		{
			const j = Math.floor(Math.random() * (i+1));
			let temp = this.deck[i];
			this.deck[i] = this.deck[j];
			this.deck[j] = this.deck[i];
		}
	}
}