/*
	Players are container for keeping track of score
	and managing mechanics such as scoring.
*/

class Player
{
	constructor(card)
	{
		this.card = card;
		this.wallets = 0;
		this.isExposed = false;
	}

	exposed()
	{
		// When player is exposed, half of their wallets are placed on their card.
		// Exposed state is used to determine win condition.
		this.isExposed = true;
		let wallets = this.wallets;
		this.wallets = 0;
		this.card.wallets += wallets/2;
	}

	get score()
	{
		if (this.isExposed)
		{
			return this.card.wallets;
		}

		return this.wallets;
	}
}