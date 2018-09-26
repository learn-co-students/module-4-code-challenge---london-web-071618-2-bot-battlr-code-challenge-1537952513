import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {

  state = {
    bots: [],
    botsInArmy: []
  }

  getBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(data => this.setState({
        bots: data
      }))
  }

  componentDidMount = () => {
    this.getBots()
  }


  addBotToArmy = bot => {
    if (this.state.botsInArmy.includes(bot)) return;

  this.setState({
      botsInArmy: [...this.state.botsInArmy, bot]
    })
  }

  removeBotFromArmy = selectedbot => {
    this.setState({
          botsInArmy: this.state.botsInArmy.filter(bot => selectedbot !== bot)
    })
  }

  hasBotBeenAddedToArmy = bot => {
  return this.state.botsInArmy.includes(bot)
}


  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.botsInArmy}
          addBotToArmy={this.addBotToArmy}
          removeBotFromArmy={this.removeBotFromArmy}
          hasBotBeenAddedToArmy={this.hasBotBeenAddedToArmy}
        />
        <BotCollection
          bots={this.state.bots}
          addBotToArmy={this.addBotToArmy}
          removeBotFromArmy={this.removeBotFromArmy}
          hasBotBeenAddedToArmy={this.hasBotBeenAddedToArmy}
        />

      </div>
    );
  }

}

export default BotsPage;
