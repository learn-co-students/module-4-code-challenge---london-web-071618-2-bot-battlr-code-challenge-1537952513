import React from 'react'
import BotCard from '../components/BotCard'

class BotCollection extends React.Component {
// code here

  render () {
  	return (
    <div className='ui four column grid'>
      <div className='row'>
        {this.props.bots.map(bot =>
          <BotCard bot={bot}
            addBotToArmy={this.props.addBotToArmy}
            removeBotFromArmy={this.props.removeBotFromArmy}
            hasBotBeenAddedToArmy={this.props.hasBotBeenAddedToArmy}
          />)}
    		  Collection of all bots
    		</div>
    </div>
  	)
  }

};

export default BotCollection
