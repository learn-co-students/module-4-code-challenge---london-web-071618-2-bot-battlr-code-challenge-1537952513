import React from "react";
import BotCard from '../components/BotCard'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {

  state={
    allBots: [],
    botArmy: []
  }
  
  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(json => this.setState({allBots: json}))
  }

  addBotToBotArmy (bot) {
    this.setState({ botArmy: [...this.state.botArmy, bot] })
  }
  
  removeBotFromBotArmy (bot) {
    let newArmy = this.state.botArmy
      let index = this.state.botArmy.indexOf(bot)
      if (index > -1) {
        let newArmy = this.state.botArmy.splice(index, 1)
      }
      this.setState({ botArmy: newArmy})
  }

  selectedBot = (bot) => {

    if(!this.state.botArmy.includes(bot)) {
      this.addBotToBotArmy (bot)
    } else {
      this.removeBotFromBotArmy(bot)
    }
  }

  

  render() {

    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} selectedBot={ this.selectedBot }/>
        { this.state.allBots.map(bot => 
          <BotCard bot={bot} selectedBot={ this.selectedBot } />
          ) }
      </div>
    );
  }

}

export default BotsPage;
