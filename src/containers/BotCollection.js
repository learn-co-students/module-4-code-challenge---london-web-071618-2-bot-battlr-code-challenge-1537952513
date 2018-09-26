import React from 'react';

import BotCard from '../components/BotCard'
class BotCollection extends React.Component {
  // your code here

  render () {
  	return (
    <div className='ui four column grid'>
    		<div className='row'>
      
    		  Collection of all bots
      {
            this.props.bots.map(bot =>
              <BotCard bot={bot} selectBot={this.props.selectBot} />
            )
          }
    		</div>
  	  </div>
  	)
  }
};

export default BotCollection
