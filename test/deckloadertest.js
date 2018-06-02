import DeckLoader from "../src/server/js/game/deck/deckLoader";
var assert = require("assert");


var DECK_DAT_ALOCATION = __dirname + "/../src/server/assets/cards.json";

function playerToDeckSize(numPlayer)
{
	switch(numPlayer)
	{
		case 2:
			return 16;
		case 3:
		case 4:
			return 25;
		case 5:
		case 6:
			return 36;
	}
}

describe("Test DeckLoader Class", ()=>
{
	describe("Properties", ()=>
	{
		let dl;
		beforeEach(()=>
		{
			dl = new DeckLoader(DECK_DAT_ALOCATION);
		});

		it("JSON data read correctly", ()=>{
			assert(dl.cardData);
			assert.equal(36, dl.cardData.STANDARD.length);
		})

	});

	describe("Method", ()=>
	{
		describe("DeckLoader::loadDeck()", ()=>
		{
			let dl;
			beforeEach(()=>
			{
				dl = new DeckLoader(DECK_DAT_ALOCATION);
			});

			it("DeckLoader should load correct number of card based on player.", ()=>
			{
				for(let i = 2; i <= 6; i++)
				{
					let correctDeckSize = playerToDeckSize(i);
					let deck = dl.loadDeck(i, "STANDARD");
					assert.equal(correctDeckSize, deck.length);
				}
			});

			it("DeckLoader should raise error if invalid number of player.", ()=>
			{
				assert.throws(()=>
				{
					dl.loadDeck(0);
				});
				assert.throws(()=>
				{
					dl.loadDeck(9);
				});
			});
		});
	});
});