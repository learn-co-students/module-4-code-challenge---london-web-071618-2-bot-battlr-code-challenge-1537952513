import React from "react";

import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {

//start here with your code for step one

  state = {
    bots: [],
    armyBots: []
  }

  addToArmy = (bot) => {
    if (this.state.armyBots.includes(bot)) return
      else  {
    this.setState({ armyBots: [...this.state.armyBots, bot]})
    }
  }

  fetchBots = () =>
    fetch(API)
      .then(resp => resp.json())
      .then(bots => this.setState({ bots}) )


  componentDidMount() {
    this.fetchBots()
  }


  render() {
    return (
      <div>
        < YourBotArmy armyBots={this.state.armyBots}/>
      < BotCollection bots={this.state.bots} addToArmy={this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
