import React, { Component } from 'react'

const CommonLogicForHOC = (Men) => {

    class NewMen extends Component {
        state = {
            firingShot: 0
        }

        handleFire = () => {
            this.setState({ firingShot: this.state.firingShot + 1 })
        }

        render(){
            return(
                <Men gunName="AK47" firingCount={this.state.firingShot} handleFire={this.handleFire} />
            )
        }
    }

    return NewMen;

}



export default CommonLogicForHOC