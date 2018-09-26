import React from 'react'
import BotCard from '../components/BotCard'

class BotCollection extends React.Component {
  // your code here

  render () {
  	return (
    <div className='ui four column grid'>
      <BotCard />
      <div className='row'>
    		  Collection of all bots
          {this.props.bots.map((bot) => {
            return (<li onClick={() => this.props.selectBot(bot)}>{bot.name}</li>)
          })}
      </div>
    </div>
  	)
  }

};

export default BotCollection
