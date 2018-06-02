import PlayerManager from "../src/server/js/game/playerManager/playerManager";
var assert = require("assert");


describe("Testing PlayerManager Class", ()=>
{
	describe("Properties", ()=>
	{
		it("Assign identity should change player identity.", ()=>
		{
			let pm = new PlayerManager(4);
			pm.addPlayer(1, 1);
			pm.assignIdentity(1, "Doctor");
			assert.equal("Doctor", pm.players[0].identity);
		});
	});

	describe("Methods", ()=>
	{
		describe("PlayerManager::addPlayer", ()=>
		{
			let pm;
			let numPlayers = 4;
			beforeEach(()=>
			{
				pm = new PlayerManager(numPlayers);
			});

			it("Add player should store a new player instance in container.", ()=>
			{
				let uuid = Math.floor(3000 * Math.random());
				let ip = "192.168.1.1";
				pm.addPlayer(uuid, ip);
				assert.equal(uuid, pm.players[0].uuid);
				assert.equal(ip, pm.players[0].address); 
			});

			it("Should not be able to add player when full", ()=>
			{
				assert.throws(()=>
				{
					for(let i = 0; i < numPlayers + 1; i++)
					{
						pm.addPlayer(i, i);
					}
				});
			});
		});

		describe("PlayerManager::deletePlayer", ()=>
		{
			let pm;
			let numPlayers = 4;
			beforeEach(()=>
			{
				pm = new PlayerManager(numPlayers);
			});

			it("Properly removes a player and sets slot to null. 1 person room", ()=>
			{
				pm.addPlayer(1, 1);
				pm.deletePlayer(1, 1);
				assert.equal(numPlayers, pm.players.length);
				for(let i = 0; i < pm.players.length; i++)
				{
					assert.equal(null, pm.players[i]);
				}
			});

			it("Successful call results in null placeholder at the end of the list.", ()=>
			{
				for(let i = 0; i < numPlayers; i++)
				{
					pm.addPlayer(i, i);
				}
				pm.deletePlayer(0, 0);
				for(let i = 0; i < numPlayers - 1; i++)
				{
					assert.notEqual(null, pm.players[i]);
				}
				assert.equal(null, pm.players[numPlayers - 1]);
			});

			it("Calling deletePlayer on an empty room should fail.", ()=>
			{
				assert.throws(()=>
				{
					pm.deletePlayer(1, 1);
				});
			});
		})

		describe("PlayerManager::validateReconnect", ()=>
		{
			let numPlayers = 4;
			let pm;
			beforeEach(()=>
			{
				pm = new PlayerManager(numPlayers);
			});

			it("Validates true if player exists.", ()=>
			{
				pm.addPlayer(4, 4);
				assert.equal(true, pm.validateReconnect(4));
				assert.equal(false, pm.validateReconnect(3));
			});
		});

		describe("PlayerManager::history && PlayerManager::addToHistory", ()=>
		{
			let numPlayers = 4;
			let pm;
			beforeEach(()=>
			{
				pm = new PlayerManager(numPlayers);
				for(let i = 0; i < numPlayers; i++)
				{
					pm.addPlayer(i, i);
				}
			});

			it("addToHistory works.", ()=>
			{
				let action = {
					type: "MOVE",
					targets: [[4, 1], [2, 3]]
				}
				pm.addToHistory(0, action)
				assert.deepEqual([action], pm.findPlayer(0, 0).moveHistory)
			});

			it("Viewing history works.", ()=>
			{
				let action = {
					type: "MOVE",
					targets: [[4, 1], [2, 3]]
				}
				pm.addToHistory(0, action)
				assert.deepEqual([action], pm.history(0))
			});

			it("Move history cycles when it passes max size. (Using default size of 5).", ()=>
			{
				let actions = [
				
					{
						type: "MOVE",
						targets: [[4, 1], [2, 3]]
					},
					{
						type: "MOVE",
						targets: [[4, 1], [2, 3]]
					},
					{
						type: "MOVE",
						targets: [[4, 1], [2, 3]]
					},
					{
						type: "MOVE",
						targets: [[4, 1], [2, 3]]
					},
					{
						type: "MOVE",
						targets: [[4, 1], [2, 3]]
					},
					{
						type: "MOVE",
						targets: [[2, 1], [2, 2]]
					}
				]
				actions.forEach((action)=>{
					pm.addToHistory(0, action);
				})

				let expected = [
					{
						type: "MOVE",
						targets: [[2, 1], [2, 2]]
					},
					{
						type: "MOVE",
						targets: [[4, 1], [2, 3]]
					},
					{
						type: "MOVE",
						targets: [[4, 1], [2, 3]]
					},
					{
						type: "MOVE",
						targets: [[4, 1], [2, 3]]
					},
					{
						type: "MOVE",
						targets: [[4, 1], [2, 3]]
					}
					
				]
				assert.deepEqual(expected, pm.history(0));
			})
		});
	});
});