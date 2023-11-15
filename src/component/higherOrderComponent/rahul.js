import React, { Component } from 'react'
import CommonLogicForHOC from './commonLoginForHOC'

class Rahul extends Component {
    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.handleFire}>
                    Rahul fire {this.props.gunName} Gun {this.props.firingCount} Times
                </h3>
            </div>
        )
    }
}
export default CommonLogicForHOC(Rahul)