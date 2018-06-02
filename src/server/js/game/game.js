/* Game container 
	The game class mantain all the resources required for a game.
	It also serves as an interface for all actions with the game and validates all actions.
	TBD: 
		make common resources available server wide reducing space usage
*/
import {PlayersManager} from "playersManager/playersManager.js";
import {Deck} from "deck/deck.js";

export class Game()
{
	constructor(numPlayers, cardSet = "STANDARD")
	{
		this.players = new PlayersManager(numPlayers);
		this.deck = new Deck(numPlayers, cardSet, deckDatabasePath);
		this.board = new Board(numPlayers, this.deck);
		this.targets = new TargetsManager(numPlayers, this.deck);
	}
}