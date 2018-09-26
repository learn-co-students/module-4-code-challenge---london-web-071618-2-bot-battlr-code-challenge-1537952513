import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'


class BotsPage extends React.Component {

  state = {
    bots: [],
    botsInArmy: [],
    selectedBot: undefined
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

  selectBot = bot => {
    this.setState({
      selectedBot: bot
    })
  }

  deselectBot = () =>{
    this.setState({
      selectedBot: undefined
    })
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

      {
        this.state.selectedBot ?
          <BotSpecs bot={this.state.selectedBot}
            deselectBot={this.deselectBot}
            addBotToArmy={this.addBotToArmy}

          />
          :
          < BotCollection
          bots={this.state.bots}
          addBotToArmy={this.addBotToArmy}
          removeBotFromArmy={this.removeBotFromArmy}
          hasBotBeenAddedToArmy={this.hasBotBeenAddedToArmy}
          selectBot={this.selectBot}
          />
      }

      </div>
    );
  }

}

export default BotsPage;
