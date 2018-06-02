/*
	The DeckLoader class reads from a card database and assembles the the appropiate deck
	Note: Currently the method to load data is "require" which expects a .json file extension.
*/
import Card from "./card";
var fs = require("fs");

export default class deckLoader
{
	constructor(dataSource)
	{
		this.dataSource = dataSource;
		this.cardData = require(dataSource);
	}

	readJSON(path)
	{
		let data = fs.readFileSync(path);
		data = JSON.parse(data);
		return data;
	}

	loadDeck(numPlayer, cardSet)
	{
		if(numPlayer > 6 || numPlayer < 2)
		{
			throw "Error: numPlayer should be between 2 and 6 inclusive.";
		}
		let deck = [];
		for(let i = 0; i < this.cardData[cardSet].length; i++)
		{
			let data = this.cardData[cardSet][i];
			if(data.numPlayer <= numPlayer)
			{
			let card = new Card(data.name, data.effectName, data.effectDesc, data.effectBehaviors, data.imgName);
			deck.push(card);
			}	
		}
		return deck;
	}
}