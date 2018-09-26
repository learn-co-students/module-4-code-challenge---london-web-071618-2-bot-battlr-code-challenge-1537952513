import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	renderBots() {
		return this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} recruitBot={this.props.recruitBot}/>)
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
