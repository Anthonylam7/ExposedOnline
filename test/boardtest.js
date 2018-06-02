var assert = require("assert");
import Board from "../src/server/js/game/board/board";

function generateDummyDeck(size)
{
	let output = [];
	for(let i = 0; i < size * size; i++)
	{
		let card = {
			name: "Card number" + i,
			desc: "Dummy card generated."
		}
		output.push(card);
	}
	return output;
}

function playerToSize(numPlayers){
	switch(numPlayers){
		case 2:
			return 4;
		case 3:
		case 4:
			return 5;
		case 5:
		case 6:
			return 6;
	}
}

describe("Test Board Class", ()=>
{
	describe("Properties", ()=>
	{
		it("Test board initializes properly for all numbers of players.", ()=>
		{
			for(let i = 2; i <= 6; i++)
			{
				let bsize = playerToSize(i);
				let deck = generateDummyDeck(bsize);
				let b = new Board(i, deck);
				// Correct board size;
				assert.equal(bsize * bsize, b.totalTiles);
				// Tiles left is properly initialized;
				assert.equal(b.totalTiles, b.tilesLeft);
				// Wallets in play is correct
				assert.equal(bsize * bsize + 4, b.wallets);
				// Cards are initalized and all accounted for;
				for(let j = 0; j < bsize; j++)
				{
					assert.equal(deck[j].name, b.tiles[j].name)
				}
			}
		});
	});
	describe("Methods", ()=>
	{
		describe("Board::swap()", ()=>
		{
			let b;
			let numPlayers = 2;
			let decksize = playerToSize(numPlayers);
			let deck = generateDummyDeck(decksize);
			
			beforeEach(()=>
			{
				b = new Board(numPlayers, deck);
			});
			
			it("Swap is functioning", ()=>
			{
				let targetA = [0, 2];
				let targetB = [1, 1];
				let cardA = b.card(...targetA);
				let cardB = b.card(...targetB);
				b.swap(targetA, targetB);
				assert.equal(cardA, b.card(...targetB));
				assert.equal(cardB, b.card(...targetA));
			});

			it("Swap should not work if indexing outside of dimensions.", ()=>
			{
				assert.throws(()=>
				{
					b.swap([0, 0], [10, 0]);
				});
			});

			it("Swap should not work if both targets are the same.", ()=>
			{
				assert.throws(()=>
				{
					b.swap([1,1], [1,1]);
				});
			});
		});

		describe("Board::mark(), Board::steal(), Board::expose()", ()=>
		{
			let b;
			let numPlayers = 2;
			let decksize = playerToSize(numPlayers);
			let deck = generateDummyDeck(decksize);

			beforeEach(()=>
			{
				b = new Board(numPlayers, deck);
			});

			it("Stealing works;", ()=>
			{
				let walletsBefore = b.card(1, 1).wallets;
				b.steal([1, 1]);
				assert.equal(walletsBefore - 1, b.card(1, 1).wallets);
			});

			it("Should not be able to steal from tile with no wallets", ()=>
			{
				//Card has to have only 1 wallet for test to work
				assert(1, b.card(1, 1).wallets);
				b.steal([1, 1]);
				assert.throws(()=>{
					b.steal([1, 1]);
				});
			});

			it("Mark should set target flag in game piece", ()=>
			{
				b.mark([1, 1]);
				assert.equal(true, b.card(1, 1).isTarget);
			})

			it("Stealing from a marked card exposes it.", ()=>
			{
				b.mark([1, 1]);
				b.steal([1, 1]);
				assert.equal(true, b.card(1, 1).isExposed);
			});


		});
	});
});