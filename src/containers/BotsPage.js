import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
			allBots: [],
			yourBotArmy: []
		}
	}

	componentDidMount() {
		fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
		.then(res => res.json())
		.then(botData => this.setState({allBots: botData}))
  }
  
  recruitBot = (bot) => {
    this.setState({yourBotArmy: [...this.state.yourBotArmy, bot]}, () => console.log(this.state.yourBotArmy))
  }

  sortBy = (stat) => {
    const sortedByArmour = this.state.allBots.sort(function(a, b) {
      if (a[stat] > b[stat]) return -1;
      else if (a[stat] < b[stat]) return 1;
      return 0;
    });

    this.setState({allBots: sortedByArmour})
  }


  render() {
    return (
      <div>
        <button onClick={() => this.sortBy("armor")}>Sort by Armour</button>
        <button onClick={() => this.sortBy("damage")}>Sort by Damage</button>
        <button onClick={() => this.sortBy("health")}>Sort by Health</button>


        <YourBotArmy bots={this.state.yourBotArmy} />
        <BotCollection bots={this.state.allBots} recruitBot={this.recruitBot}/>
      </div>
    );
  }

}

export default BotsPage;
