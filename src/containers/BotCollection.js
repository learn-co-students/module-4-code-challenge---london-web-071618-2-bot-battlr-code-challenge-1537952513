import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';

class BotCollection extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedBot: null		
		}
	}

	resetSelectedBot = (bot) => {
		this.setState({selectedBot: null})
	}

	renderBots() {
		return this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} recruitBot={this.props.recruitBot} selectBot={this.selectBot}/>)
	}


	renderSelectedBot() {
		console.log(this.state.selectedBot)
		return (
			<BotSpecs bot={this.state.selectedBot} recruitBot={this.props.recruitBot} goBack={this.resetSelectedBot}/>
		)
	}

	selectBot = (bot) => {
		this.setState({selectedBot: bot})
	}

  render(){
  	return (
			<div className="ui four column grid">
				<div className="row">
					{this.state.selectedBot ? this.renderSelectedBot() : this.renderBots()}
				</div>
			</div>
		);
	}
};

export default BotCollection;
