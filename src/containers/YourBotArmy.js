import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class YourBotArmy extends React.Component {
  //your bot army code here...
  // state = {
  //   armyBots: []
  // }

  // updateArmy = (selectedBot) =>{
  //   this.setState({armyBots: selectedBot})
  // }
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
           {/* <BotSpecs 
            bot={this.props.selectedBot} /> */}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
