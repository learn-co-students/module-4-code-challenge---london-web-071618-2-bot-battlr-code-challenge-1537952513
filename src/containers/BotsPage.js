import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    bots: [],
    botsArmy: []
  }

  componentDidMount() {
    this.getBots()
  }
  getBots = () => {
    return fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({bots}))
  }

  changeBotArmy = (clickedBot) => {
    if (this.state.botsArmy.includes(clickedBot)) {
      this.removeBotFromArmy()
    }
    else {
      this.setState({ botsArmy: [...this.state.botsArmy, clickedBot] })
    }  
  }

  addBotToArmy = (clickedBot) => {
    if (this.state.botsArmy.includes(clickedBot)) return
    this.setState({ botsArmy: [...this.state.botsArmy, clickedBot] })
  
  }

  removeBotFromArmy = (clickedBot) => {
    const botToBeRemoved = this.state.botsArmy.find(bot => bot.id === clickedBot.id)
    const index = this.state.botsArmy.indexOf(botToBeRemoved)
    const newBotArmy = this.state.botsArmy.splice(index, 1)
    this.setState({ botsArmy: newBotArmy })
  }
  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botsArmy} changeBotArmy={this.changeBotArmy}/>
        <BotCollection bots={this.state.bots} addBotToArmy={this.addBotToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
