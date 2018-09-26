import React from 'react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  // start here with your code for step one

  constructor () {
    super()
    this.state = {
      allBots: [],
      yourBotArmy: []
    }
  }

  componentDidMount () {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(data => this.setState({ allBots: data }))
  }

  enlistBot = (selectedBot) => {
    if (!this.state.yourBotArmy.find(bot => bot === selectedBot)) {
      this.setState({ yourBotArmy: [...this.state.yourBotArmy, selectedBot] })
    }
  }

  delistBot = (selectedBot) => {
    if (this.state.yourBotArmy.find(bot => bot === selectedBot)) {
      this.setState({ yourBotArmy: this.state.yourBotArmy.filter(bot => bot !== selectedBot) })
    }
  }

  render () {
    return (
      <div>
        <YourBotArmy yourBotArmy={this.state.yourBotArmy} delistBot={this.delistBot} />
        <BotCollection allBots={this.state.allBots} enlistBot={this.enlistBot} />
      </div>
    )
  }
}

export default BotsPage
