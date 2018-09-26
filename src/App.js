import React, { Component } from 'react'
import BotsPage from './containers/BotsPage'
import './App.css'
import BotCollection from './containers/BotCollection'
import BotCard from './components/BotCard'
import YourBotArmy from './containers/YourBotArmy.js'

class App extends Component {

  state = {
    bots: [],
    selectedBot: null,
    botArmy: []
    
  }


  selectBot = (bot) => {this.setState({selectedBot: bot})} 


  addToBotArmy = (selectedBot) => {this.setState({botArmy: [...this.state.botArmy, selectedBot]})}


  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(data => this.setState({bots: data}))
  }

  render () {
    return (
      <div>
      <BotCollection bots = {this.state.bots}/>
      <BotCard selectedBot = {this.state.selectedBot} selectBot = {this.selectBot}/>


      </div>
      
    )
  }
}

export default App
