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

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourBotArmy} />
        <BotCollection bots={this.state.allBots} recruitBot={this.recruitBot}/>
      </div>
    );
  }

}

export default BotsPage;
