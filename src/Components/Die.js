import React, {Component} from 'react';

class Die extends Component {
state = {
    diceImages: 
        {'6': 'https://www.wpclipart.com/recreation/games/dice/die_face_6.png',
        '8': 'https://images.onlinelabels.com/images/clip-art/dwmoook/D8%20(Eight%20Sided)%20Dice-248551.png',
        '10': 'https://1001freedownloads.s3.amazonaws.com/vector/thumb/106772/ten_sided_dice.png',
        '12': 'https://cdn.pixabay.com/photo/2017/01/31/13/51/dice-2024222_1280.png',
        '20': 'https://cdn.pixabay.com/photo/2013/07/12/17/21/dice-152070_1280.png'   
    }
   
,
    sides: this.props.sides,
    sixSideOutcome: '',
    priorRoll: '',
    history: [],
    sixSideImages: [
        {value: 1,
    }
]    
}

updateHistory = (roll) => {
    let historyCopy = this.state.history
    if(this.state.history.length<6) {
        historyCopy.push(roll)
        this.setState({
            history: historyCopy
        })
    }
    else{
        historyCopy.shift()
        historyCopy.push(roll)
        this.setState({
            history: historyCopy
        })
    }
    console.log('history =' + this.state.history)
}

roll6 = (sides) => () => {
   const roll = Math.floor(Math.random() * sides) +1
   console.log('sides= ' + sides)
   console.log(roll)
   this.setState({
        priorRoll: this.state.sixSideOutcome,
        sixSideOutcome: roll
   })
   this.updateHistory(this.state.priorRoll)
}

    render() {
        return (
          <div>
            <div style={{listStyle: 'none', padding:0, display: 'flex', justifyContent: 'center'}}>
                
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyItems: 'space-between'}}>
                    <div style={{width:100}}>
                        <img style={{cursor: 'pointer'}} width='80' src={this.state.diceImages[this.state.sides]} onClick={this.roll6(this.state.sides)}/> 
                        <p>{this.state.sides}-sided</p>  
                    </div>
                    <div style={{width:400}}>
                        <p style={{fontWeight:'bold'}}>You rolled: {this.state.sixSideOutcome}</p>
                        <p>Prior roll: {this.state.priorRoll}</p>
                        <p>History (oldest to newest):{this.state.history.map(item=> ' ' + item)}</p>
                        <p></p>
                    </div>
                </div>
                
            </div>
          </div>
        );
      }
}

export default Die;