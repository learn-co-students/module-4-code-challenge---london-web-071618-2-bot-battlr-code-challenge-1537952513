import React from 'react'
import BotCard from '../components/BotCard'
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  // your code here
	state = {
		selectedBot : undefined 
	}

	selectBot = (clickedBot) => {
		const selectedBot = this.props.bots.find(bot => bot.id === clickedBot.id)
		this.setState({ selectedBot: selectedBot })
	}

	deselectBot = () => {
		this.setState({ selectedBot: undefined })
	}

  render () {
  	return (
      <div className='ui four column grid'>
				<select onChange={(event) => this.props.sortBots(event.target.value)}>
					<option value="">Filter bots by:</option>
					<option value="health">Health</option>
					<option value="damage">Damage</option>
					<option value="armor">Armor</option>
				</select>
        <div className='row'>
				
					{	this.state.selectedBot ? 
						<BotSpecs 
							bot={this.state.selectedBot} 
							deselectBot={this.deselectBot}
							addBotToArmy={this.props.addBotToArmy}
							/>
						: this.props.bots.map(bot => 
						<BotCard 
							bot={bot} 
							selectBot={this.selectBot}
						/>)
						
					}
      </div>
    </div>
  	)
  }
};

export default BotCollection
