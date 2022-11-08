import React, { Component } from 'react'

class TestUnmount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             display:true 
        }
    }
    
    removeChildComponent=()=>{
        //console.log("Unmounting the component")
        this.setState({
            display:!this.state.display
        })
    }
    render() {

        return (
            <div>
                <h1>Unmount Demo</h1>
                {
                    this.state.display===true?<MyChildComponent />:null 
                }
                
                <button onClick={this.removeChildComponent}>Remove Component</button>
            </div>
        )
    }
}

class MyChildComponent extends Component
{
    componentWillUnmount()
    {
        console.log("Component is removed from DOM")
    }
    render()
    {
        return(
            <h2>This is child component</h2>
        )
    }
}

export default TestUnmount
