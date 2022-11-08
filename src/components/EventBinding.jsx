 import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props)
    {
        // base class initialization
        super(props)
        this.state={
            message:'Event Checking'
        }
        // this.myButton = this.myButton.bind(this)
         console.log("Constructor fired")
    }
    myButton=()=>
    {
        console.log(this)
        this.setState({
            message:'You have clicked'
        })
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("Get derived state from props")
        return null
    }
    componentDidMount()
    {
        console.log("Component did mount")
        this.setState({
            message:'message  updated'
        })
    }
    render() {
        console.log("Render called")
        return (
            <div>
                
                Event Binding
                <br/> 
                 {this.state.message}
                <br/>
                {/* <button onClick={this.myButton.bind(this)} >Click Here</button>*/}
                {/* <button onClick={this.myButton} >Click Here</button> */}
                {/* <button onClick={()=>this.myButton()} >Click Here</button> */}
                <button onClick={this.myButton} >Click Here</button>
            </div>
        )
    }
}

export default EventBinding
