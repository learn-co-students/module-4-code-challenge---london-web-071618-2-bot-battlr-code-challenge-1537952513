import React from 'react';
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
class BotsPage extends React.Component {
  // start here with your code for step one
  state = {
    bots: [],
    selectedBot: undefined
  }
  getBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => this.setState({ bots }))
  }
  componentDidMount = () => {
    this.getBots()
  }

  selectBot = (bot) => {
    this.setState({ selectedBot: bot })
  }

  deselectBot = () => {
    this.setState({ selectedBot: undefined })
  }
  render () {
    const { bots, selectedBot, deselectBot } = this.state
    return (
      <div className='bot-specs'>

        <BotSpecs
          bot={selectBot} deselectBot={deselectBot} />

        <BotCollection
          bots={bots}
          selectBot={selectedBot} />

      </div>
    )
  }
}

export default BotsPage
