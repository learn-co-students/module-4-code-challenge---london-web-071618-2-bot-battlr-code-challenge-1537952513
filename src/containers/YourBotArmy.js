import React from 'react'
import BotCard from '../components/BotCard'

class YourBotArmy extends React.Component {
  render () {
    return (
      <div className='ui segment inverted olive bot-army'>
        <div className='ui five column grid'>
          <div className='row bot-army-row'>
            {this.props.yourBotArmy.map(bot => {
              return <div> 
                <BotCard bot={bot} />
                <button onClick={() => this.props.delistBot(bot)}>Delist</button>
              </div>
            })}
            Your Bot Army
          </div>
        </div>
      </div>
    )
  }
};

export default YourBotArmy
