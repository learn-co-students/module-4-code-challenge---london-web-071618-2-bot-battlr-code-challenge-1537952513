import React from 'react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  // start here with your code for step one

  constructor () {
    super()
    this.state = {
      allBots: [],
      yourBotArmy: [],
      specView: false,
      currentBot: []
    }
  }

  componentDidMount () {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(data => this.setState({ allBots: data }))
  }

  enlistBot = (selectedBot) => {
    if (!this.state.yourBotArmy.find(bot => bot === selectedBot)) {
      this.setState({ yourBotArmy: [...this.state.yourBotArmy, selectedBot],
        specView: !this.state.specView })
    }
  }

  delistBot = (selectedBot) => {
    if (this.state.yourBotArmy.find(bot => bot === selectedBot)) {
      this.setState({ yourBotArmy: this.state.yourBotArmy.filter(bot => bot !== selectedBot) })
    }
  }

  detailView = (bot) => {
    this.setState({ 
      specView: !this.state.specView,
      currentBot: bot
    })
  }

  seeAllBots = () => {
    this.setState({ 
      specView: !this.state.specView
    })
  }

  render () {

    let view

    view = this.state.specView ? <BotSpecs bot={this.state.currentBot} detailView={this.detailView} enlistBot={this.enlistBot} seeAllBots={this.seeAllBots}/> : <BotCollection allBots={this.state.allBots} enlistBot={this.enlistBot} detailView={this.detailView} />

    return (
      <div>
        <YourBotArmy yourBotArmy={this.state.yourBotArmy} delistBot={this.delistBot} />
        {view}
      </div>
    )
  }
}

export default BotsPage
