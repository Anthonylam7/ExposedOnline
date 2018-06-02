import GamePiece from "../src/server/js/game/board/gamePiece";
var assert = require('assert');


describe("Test GamePiece Class", ()=>
{
	describe("Test Base behaviors", ()=>
	{
		it("Test player getter and setter", ()=>
		{
			let playerID = Math.floor(99 * Math.random());
			let gp = new GamePiece("Doctor", [3, 2], 1);
			gp.player = playerID;
			assert.equal( playerID, gp.player);
		});

		it("Test target becomes exposed after losing mark", ()=>
		{
			let gp = new GamePiece("Doctor", [0, 0], 1);
			gp.mark();
			assert.equal(false, gp.isExposed);
			gp.removeMark();
			assert.equal(true, gp.isExposed);
		});

		it("Test that player ID is immutable once assigned.", ()=>
		{
			let playerID = Math.floor(99 * Math.random());
			let gp = new GamePiece("Doctor", [0, 0], 1);
			gp.player = playerID;
			// Attempt to assign new player id
			gp.player = Math.floor(99 * Math.random());
			assert.equal(playerID, gp.player);
		});

		it("Test that position is length 2 Array", ()=>
		{
			assert.throws(()=>{new GamePiece("Doctor", 2, 1)});
			assert.throws(()=>{new GamePiece("Doctor", [2], 1)});
		});
	});
});